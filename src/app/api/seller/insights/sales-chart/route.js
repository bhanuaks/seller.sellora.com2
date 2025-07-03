import { responseFun } from "@/Http/helper";
import { orderProductModel } from "@/Http/Models/order";
import mongoose from "mongoose";
import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "../../../../../../lib/dbConnect";
import { productModel } from "@/Http/Models/productModel";

export async function GET(request) {
  await connectDb();
 const { searchParams } = new URL(request.url);
  const reportDay = searchParams.get("filter") || 30;
  const filterDays = new Date();
  filterDays.setDate(filterDays.getDate() - Number(reportDay));

  const seller = await getLoginSeller();
  if (!seller) {
    return responseFun(false, { message: "unauthorized user" }, 403);
  }
  const seller_id = seller._id;

 const productQuery = {
  seller_id: new mongoose.Types.ObjectId(seller_id),
  createdAt: { $gte: filterDays },
  order_status: { $nin: [5, 6, 7, 8] }
};

  try {
    const chartData = await orderProductModel.aggregate([
      {
        $match: productQuery
       
      },
      {
        // Group by order date (without time)
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$createdAt",
            },
          },
          sales: { $sum: "$price" },
          units: { $sum: "$quantity" },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);

    const data = chartData.map((item) => {
    const dateStr = new Date(item._id).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return {
      date: dateStr,
      sales: item.sales,
      units: item.units, 
    };
  });
    return responseFun(
      true,
      {
        data: data,
      },
      200
    );
  } catch (error) {
    console.log(error);
    return responseFun(false, { message: error.message }, 500);
  }
}

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const reportDay = searchParams.get("filter") || "";
  const filterDays = new Date();
  filterDays.setDate(filterDays.getDate() - Number(reportDay));

  const seller = await getLoginSeller();
  if (!seller) {
    return responseFun(false, { message: "unauthorized user" }, 403);
  }
  const seller_id = seller._id;

  const productQuery = {
    seller_id: new mongoose.Types.ObjectId(seller_id),
  };

  try {
    const product = await orderProductModel.aggregate([
      {
        $match: productQuery,
      },
      {
        // Group by order date (without time)
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$createdAt",
            },
          },
          sales: { $sum: "$price" },
          units: { $sum: "$quantity" },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);
    return responseFun(
      true,
      {
        product: product,
      },
      200
    );
  } catch (error) {
    console.log(error);
    return responseFun(
      false,
      {
        message: error.message,
      },
      500
    );
  }
}
