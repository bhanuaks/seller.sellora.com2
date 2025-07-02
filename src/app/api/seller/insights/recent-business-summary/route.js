import { responseFun } from "@/Http/helper";
import { orderProductModel } from "@/Http/Models/order";
import mongoose from "mongoose";
import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "../../../../../../lib/dbConnect";
import { productModel } from "@/Http/Models/productModel";

export async function GET(request) {
  connectDb();

  const { searchParams } = new URL(request.url);
    const reportDay = searchParams.get("filter") || "";

  const seller = await getLoginSeller();
  if (!seller) {
    return responseFun(false, { message: "unauthorized user" }, 403);
  }
  const seller_id = seller._id;

  const sellerObjectId = new mongoose.Types.ObjectId(seller_id);

  const filterDays = new Date();
  filterDays.setDate(filterDays.getDate() - Number(reportDay));

  try {
    const pipeline = [
      {
        $match: {
          seller_id: sellerObjectId,
          createdAt: { $gte: filterDays },
        },
      },
      {
        $facet: {
          grossSales: [
            {
              $group: {
                _id: null,
                totalSale: { $sum: "$price" },
                unit: { $sum: "$quantity" },
              },
            },
          ],
          cancellation: [
            {
              $match: {
                order_status: { $in: [5, 6] },
              },
            },
            {
              $group: {
                _id: null,
                totalSale: { $sum: "$price" },
                unit: { $sum: "$quantity" },
              },
            },
          ],
          returnDa: [
            {
              $match: {
                order_status: { $in: [8] },
              },
            },
            {
              $group: {
                _id: null,
                totalSale: { $sum: "$price" },
                unit: { $sum: "$quantity" },
              },
            },
          ],
          afterCancelData: [
            {
              $match: {
                order_status: { $nin: [5, 6] },
              },
            },
            {
              $group: {
                _id: null,
                totalSale: { $sum: "$price" },
                unit: { $sum: "$quantity" },
              },
            },
          ],
          netSale: [
            {
              $match: {
                order_status: { $in: [1, 2, 3, 4] },
              },
            },
            {
              $group: {
                _id: null,
                totalSale: { $sum: "$price" },
                unit: { $sum: "$quantity" },
              },
            },
          ],
        },
      },
    ];

    const result = await orderProductModel.aggregate(pipeline);

    const grossSales = {
      sale: result[0].grossSales[0]?.totalSale || 0,
      unit: result[0].grossSales[0]?.unit || 0,
    };

    const cancellation = {
      sale: result[0].cancellation[0]?.totalSale || 0,
      unit: result[0].cancellation[0]?.unit || 0,
    };

    const returnDa = {
      sale: result[0].returnDa[0]?.totalSale || 0,
      unit: result[0].returnDa[0]?.unit || 0,
    };

    const afterCancelData = {
      sale: result[0].afterCancelData[0]?.totalSale || 0,
      unit: result[0].afterCancelData[0]?.unit || 0,
    };

    const netSale = {
      sale: result[0].netSale[0]?.totalSale || 0,
      unit: result[0].netSale[0]?.unit || 0,
    };

    const product = await sellingProduct(seller_id, filterDays);
    console.log({product});
    return responseFun(
      true,
      {product, grossSales, cancellation, returnDa, afterCancelData, netSale },
      200
    );
  } catch (error) {
    console.log(error);
    return responseFun(false, { message: error.message }, 500);
  }
}



async function sellingProduct(seller_id, reportDay) {

 
    try{



const product = await productModel.aggregate([
  {
    $match: {
      seller_id: new mongoose.Types.ObjectId(seller_id),
      save_as_draft: "0",
    },
  },
  {
    $lookup: {
      from: "productvarinats",
      let: { productId: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$product_id", "$$productId"] },
                // { $eq: ["$isProcessing", "Approved"] },
                // { $eq: ["$listingStatus", 1] }
              ]
            }
          }
        }
      ],
      as: "varinat"
    }
  },
//   {
//     $unwind: {
//       path: "$varinat",
//       preserveNullAndEmptyArrays: false
//     }
//   },
//   {
//     $lookup: {
//       from: "orderproducts",
//       let: {
//         productId: "$_id",
//         variantId: "$varinat._id",
//         reportDay: reportDay
//       },
//       pipeline: [
//         {
//           $match: {
//             $expr: {
//               $and: [
//                 { $eq: ["$product_id", "$$productId"] },
//                 { $eq: ["$variant_id", "$$variantId"] },
//                 { $gte: ["$createdAt", "$$reportDay"] }
//               ]
//             }
//           }
//         },
//         {
//           $group: {
//             _id: null,
//             grossSale: { $sum: "$price" },
//             grossUnit: { $sum: "$quantity" },
//             afterCancelSale: {
//               $sum: {
//                 $cond: [
//                   { $not: { $in: ["$order_status", [5, 6]] } },
//                   "$price",
//                   0
//                 ]
//               }
//             },
//             afterCancelUnit: {
//               $sum: {
//                 $cond: [
//                   { $not: { $in: ["$order_status", [5, 6]] } },
//                   "$quantity",
//                   0
//                 ]
//               }
//             },
//             cancellationSale: {
//               $sum: {
//                 $cond: [
//                   { $in: ["$order_status", [5, 6]] },
//                   "$price",
//                   0
//                 ]
//               }
//             },
//             cancellationUnit: {
//               $sum: {
//                 $cond: [
//                   { $in: ["$order_status", [5, 6]] },
//                   "$quantity",
//                   0
//                 ]
//               }
//             }
//           }
//         }
//       ],
//       as: "orderStats"
//     }
//   },
//   {
//     $addFields: {
//       grossSale: { $ifNull: [ { $arrayElemAt: [ "$orderStats.grossSale", 0 ] }, 0 ] },
//       grossUnit: { $ifNull: [ { $arrayElemAt: [ "$orderStats.grossUnit", 0 ] }, 0 ] },
//       afterCancelSale: { $ifNull: [ { $arrayElemAt: [ "$orderStats.afterCancelSale", 0 ] }, 0 ] },
//       afterCancelUnit: { $ifNull: [ { $arrayElemAt: [ "$orderStats.afterCancelUnit", 0 ] }, 0 ] },
//       cancellationSale: { $ifNull: [ { $arrayElemAt: [ "$orderStats.cancellationSale", 0 ] }, 0 ] },
//       cancellationUnit: { $ifNull: [ { $arrayElemAt: [ "$orderStats.cancellationUnit", 0 ] }, 0 ] }
//     }
//   },
  {
    $project: {
      orderStats: 0 // remove temp array if not needed
    }
  }
]);


    return  product
    }catch(error){
        console.log(error);
        return []
    }
}