import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "../../../../../../lib/dbConnect";
import { responseFun } from "@/Http/helper";
import { productClicksModal } from "@/Http/Models/productViewsAndClicks";
import { productModel } from "@/Http/Models/productModel";
import mongoose from "mongoose";
import { orderProductModel } from "@/Http/Models/order";

export async function GET(request) {
  await connectDb();

  const { searchParams } = new URL(request.url);
  const reportDay = searchParams.get("filter") || "";
  const seller = await getLoginSeller();
  if (!seller) {
    return responseFun(false, { message: "unauthorized user" }, 403);
  }
  const seller_id = seller._id;

  const filterDays = new Date();
  filterDays.setDate(filterDays.getDate() - Number(reportDay));

  try {
    const totalUsersAgg = await orderProductModel.aggregate([
      {
        $match: {
          seller_id: new mongoose.Types.ObjectId(seller_id),
          createdAt: { $gte: filterDays }
        },
      },
      {
        $group: {
          _id: "$user_id",
        },
      },
      {
        $count: "totalUsers",
      },
    ]);

   

    const user = await orderProductModel.aggregate([
      {
        $match: {
          seller_id: new mongoose.Types.ObjectId(seller_id),
        },
      },
      {
        $group: {
          _id: "$user_id",
          firstOrderDateForSeller: { $min: "$createdAt" },
        },
      },
      {
        $lookup: {
          from: "orderproducts",
          let: {
            userId: "$_id",
            firstOrderDateForSeller: "$firstOrderDateForSeller",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$user_id", "$$userId"] },
                    { $lt: ["$createdAt", "$$firstOrderDateForSeller"] },
                  ],
                },
              },
            },
          ],
          as: "earlierOrders",
        },
      },
      {
        $match: {
          earlierOrders: { $size: 0 },
          firstOrderDateForSeller: {
            $gte: new Date(new Date().setDate(new Date().getDate() - Number(reportDay))), // last 7 days
          },
        },
      },

      {
        $lookup: {
          from: "consumers",
          localField: "_id",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      {
        $unwind: "$userDetails",
      },
      {
        $count: "totalNewUsers",
      },

      
    ]);

     const totalUsers = totalUsersAgg[0]?.totalUsers || 0;
    const totalNewUsers = user[0]?.totalNewUsers || 0;

    const repeatUsers = totalUsers - totalNewUsers;

    return responseFun(true, { message: "success", data:{totalUsers, totalNewUsers, repeatUsers } }, 200);
  } catch (error) {
    console.log(error);
    return responseFun(false, { message: error.message }, 500);
  }
}
