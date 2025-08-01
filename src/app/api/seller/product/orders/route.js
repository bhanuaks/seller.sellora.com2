import { connectDb } from "@/Http/dbConnect2";
import { decodeJwt, responseFun } from "@/Http/helper";
import { orderModel, orderProductModel } from "@/Http/Models/order";
import mongoose from "mongoose";
import { cookies } from "next/headers";
import { pipeline } from "nodemailer/lib/xoauth2";

function isValidDate(val) {
  return !isNaN(Date.parse(val));
}


export async function GET(request) {
  await connectDb();
  
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") || "All";
  const searchBy = searchParams.get("searchBy") || null;
  const searchText = searchParams.get("searchText") || null;
  const from_date = searchParams.get("from_date") || null;
  const to_date = searchParams.get("to_date") || null;



  const sellerToken = request.cookies.get("sellerAuthToken")?.value;

  const page = parseInt(searchParams.get("page")) || 1;
  const pageSize = parseInt(searchParams.get("pageSize")) || 1;
  const skip = (page - 1) * pageSize;

  if (!sellerToken) {
    return responseFun(false, "You are not authorized", 403);
  }

  const seller = decodeJwt(sellerToken)?.seller;
  if (!seller || !seller._id) {
    return responseFun(false, "seller id not found!", 404);
  }
  const sellerId = new mongoose.Types.ObjectId(seller._id);
  
 
 
  const totalDataAggregation = await orderProductModel.aggregate([
    { $match: {seller_id: sellerId} },
    {
      $group: {
        _id: null,
        totalAllOrder: { $sum: 1 },
        totalCanceledOrder: {
          $sum: { $cond: [{ $in: [{ $toInt: "$order_status" }, [5, 6,7]] }, 1, 0] },
        },
        totalShippedOrder: {
          $sum: { $cond: [{ $eq: ["$order_status", 2] }, 1, 0] },
        },
        totalUnshippedOrder: {
          $sum: { $cond: [{ $eq: ["$order_status", 1] }, 1, 0] },
        },
      },
    },
  ]);

  const totalData = totalDataAggregation[0] || {
    totalAllOrder: 0,
    totalCanceledOrder: 0,
    totalShippedOrder: 0,
    totalUnshippedOrder: 0,
  };

  const query = { seller_id: sellerId };
  const statusMap = {
    Unshipped: 1,
    // Confirmed: 1,
    Shipped: 2,
    Canceled: {$in:[5,7,6]},
  };

  if (status in statusMap) {
    query.order_status = statusMap[status];
  }

  if (searchText && searchBy) {
    if (searchBy === "sku") {
        query.sku = { $regex: searchText, $options: "i" };
    } else if (searchBy === "OrderId") {
        query.order_id = { $regex: searchText, $options: "i" };
    }
}

    if (isValidDate(from_date) && isValidDate(to_date)) {
      const toDateObj = new Date(to_date);
      toDateObj.setUTCHours(23, 59, 59, 999);

      query.createdAt = {
        $gte: new Date(from_date),
        $lte: toDateObj
      };
    } else if (isValidDate(from_date)) {
      query.createdAt = {
        $gte: new Date(from_date),
      };
    } else if (isValidDate(to_date)) {
      const toDateObj = new Date(to_date);
      toDateObj.setUTCHours(23, 59, 59, 999);

      query.createdAt = {
        $lte: toDateObj,
      };
    }


  try {
    const orders = await orderProductModel.aggregate([
      // Filter by sellerId
      { $match: query },

      // Fetch user details
      {
        $lookup: {
          from: "consumers",
          let: { userId: "$user_id" },
          pipeline: [
            { $match: { $expr: { $eq: ["$_id", "$$userId"] } } },
            { $project: { _id: 0, full_name: 1, email: 1 } },
          ],
          as: "user",
        },
      },

      // Fetch product details
      {
        $lookup: {
          from: "products",
          let: { productId: "$product_id" },
          pipeline: [
            { $match: { $expr: { $eq: ["$_id", "$$productId"] } } },
            { $project: { _id: 0, product_name: 1, main_image: 1 } },
          ],
          as: "product",
        },
      },

      // Fetch product variant details
      {
        $lookup: {
          from: "productvariants",
          let: { variantId: "$variant_id" },
          pipeline: [
            { $match: { $expr: { $eq: ["$_id", "$$variantId"] } } },
            { $project: { _id: 0, withImage: 1, image_1: 1, sku: 1 } },
          ],
          as: "variant",
        },
      },

      // Flatten arrays and keep only relevant fields
      {
        $addFields: {
          user: { $arrayElemAt: ["$user", 0] },
          product: { $arrayElemAt: ["$product", 0] },
          variant: { $arrayElemAt: ["$variant", 0] },
        },
      },
      { $skip: skip },
      { $limit: pageSize },
    ]);

    const totalOrders = await orderProductModel.countDocuments(query);

    const pagination = {
      totalOrders,
      page,
      pageSize,
      totalPages: Math.ceil(totalOrders / pageSize),
    };

    return responseFun(true, { orders: orders, totalData, pagination }, 200);
  } catch (error) {
    console.log(error);
    return responseFun(false, error, 500);
  }
}
