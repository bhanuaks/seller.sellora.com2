import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { orderProductModel } from "@/Http/Models/order";
import { productModel } from "@/Http/Models/productModel";
import mongoose from "mongoose";

export async function GET(request) {
  await connectDb();
  try {
    const seller = await getLoginSeller();
    if (!seller) {
      return responseFun(false, { message: "unauthorized request" }, 403);
    }

   const endOfToday = new Date();
  endOfToday.setHours(23, 59, 59, 999);

  const startOfLastWeek = new Date();
  startOfLastWeek.setDate(endOfToday.getDate() - 6);
  startOfLastWeek.setHours(0, 0, 0, 0);

    const seller_id = seller._id;

    const dailySalesReport = await orderProductModel.aggregate([
      {
        $match: {
          seller_id: new mongoose.Types.ObjectId(seller_id),
          order_status: { $nin: [5, 6, 7, 8] }, 
          //  createdAt: {
          //     $gte: startOfLastWeek,
          //     $lte: endOfToday
          //   }
        },
      },
        {
          $sort:{
            createdAt:-1
          }
        },
        {
            $group: {
              _id: {
                $dateToString: {
                  format: "%Y-%m-%d",
                  date: "$createdAt"
                }
              },
              totalSales: { $sum: "$price" },
              totalOrders: { $sum: 1 }
            }
          },
         
          {
            $sort: {
              _id: 1
            }
          },
           {
            $limit:7
          }

      
    ]);
let maxSale = 0;
let totalSales = 0;

if (dailySalesReport.length) {
  maxSale = Math.max(...dailySalesReport.map(d => d.totalSales)); 
  totalSales = dailySalesReport
    .map(d => d.totalSales)
    .reduce((acc, curr) => acc + curr, 0);
}
    
    const returnData = dailySalesReport.map((item)=>{
      return {
        totalSales:item.totalSales,
        totalOrders:item.totalOrders,
        date: new Date(item._id).toLocaleDateString("en-us",{
          day:"numeric",
          month:"short"
        }),
      }
    })
 
    return responseFun(true, { data:returnData, maxSale, totalSales }, 200); 
  } catch (error) {
    console.log(error);
    return responseFun(false, { message: error.message }, 500);
  }
}
