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

    return responseFun(
      true,
      {
        data: { grossSales, cancellation, returnDa, afterCancelData, netSale },
      },
      200
    );
  } catch (error) {
    console.log(error);
    return responseFun(false, { message: error.message }, 500);
  }
}

export async function POST(request) {

  const body = await request.json();
  const page = parseInt(body.page) || 1;
  const limit = parseInt(body.limit) || 20;
  const searchText = body.searchText || "";
  const status = body.status || "";
  const skip = (page - 1) * limit;
  
   const seller = await getLoginSeller();
  if (!seller) {
    return responseFun(false, { message: "unauthorized user" }, 403);
  }
  const seller_id = seller._id;

  const productQuery = {
    seller_id: new mongoose.Types.ObjectId(seller_id),
          save_as_draft: "0", 
  }

  if(searchText){
    productQuery.product_name = { $regex: searchText, $options: "i" };
  }

  try {

    const pipeline = [
      {
        $match:productQuery
      },
      {
        $lookup: {
          from: "productvariants",
          let: { productId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$product_id", "$$productId"] },
                    { $eq: ["$isProcessing", "Approved"] },
                  ],
                },
              },
            },
          ],
          as: "variant",
        },
      },

      {
        $unwind: {
          path: "$variant",
          preserveNullAndEmptyArrays: false,
        },
      },
      {
        $lookup: {
          from: "orderproducts",
          let: {
            productId: "$_id",
            variantId: "$variant._id",
            // reportDay: reportDay,
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$product_id", "$$productId"] },
                    { $eq: ["$variant_id", "$$variantId"] },
                    // { $gte: ["$createdAt", "$$reportDay"] }
                  ],
                },
              },
            },
            {
              $group: {
                _id: null,
                grossSale: { $sum: "$price" },
                grossUnit: { $sum: "$quantity" },
                afterCancelSale: {
                  $sum: {
                    $cond: [
                      { $not: { $in: ["$order_status", [5, 6]] } },
                      "$price",
                      0,
                    ],
                  },
                },
                afterCancelUnit: {
                  $sum: {
                    $cond: [
                      { $not: { $in: ["$order_status", [5, 6]] } },
                      "$quantity",
                      0,
                    ],
                  },
                },
                cancellationSale: {
                  $sum: {
                    $cond: [{ $in: ["$order_status", [5, 6]] }, "$price", 0],
                  },
                },
                cancellationUnit: {
                  $sum: {
                    $cond: [{ $in: ["$order_status", [5, 6]] }, "$quantity", 0],
                  },
                },
                netSale: {
                  $sum: {
                    $cond: [
                      { $in: ["$order_status", [1, 2, 3, 4]] },
                      "$price",
                      0,
                    ],
                  },
                },
                netUnit: {
                  $sum: {
                    $cond: [
                      { $in: ["$order_status", [1, 2, 3, 4]] },
                      "$quantity",
                      0,
                    ],
                  },
                },

                returnSale: {
                  $sum: {
                    $cond: [{ $in: ["$order_status", [8]] }, "$price", 0],
                  },
                },
                returnUnit: {
                  $sum: {
                    $cond: [{ $in: ["$order_status", [8]] }, "$quantity", 0],
                  },
                },
              },
            },
          ],
          as: "orderStats",
        },
      },
      {
        $addFields: {
          netSale: {
            $ifNull: [{ $arrayElemAt: ["$orderStats.netSale", 0] }, 0],
          },
          netUnit: {
            $ifNull: [{ $arrayElemAt: ["$orderStats.netUnit", 0] }, 0],
          },

          returnSale: {
            $ifNull: [{ $arrayElemAt: ["$orderStats.returnSale", 0] }, 0],
          },
          returnUnit: {
            $ifNull: [{ $arrayElemAt: ["$orderStats.returnUnit", 0] }, 0],
          },

          grossSale: {
            $ifNull: [{ $arrayElemAt: ["$orderStats.grossSale", 0] }, 0],
          },
          grossUnit: {
            $ifNull: [{ $arrayElemAt: ["$orderStats.grossUnit", 0] }, 0],
          },
          afterCancelSale: {
            $ifNull: [{ $arrayElemAt: ["$orderStats.afterCancelSale", 0] }, 0],
          },
          afterCancelUnit: {
            $ifNull: [{ $arrayElemAt: ["$orderStats.afterCancelUnit", 0] }, 0],
          },
          cancellationSale: {
            $ifNull: [{ $arrayElemAt: ["$orderStats.cancellationSale", 0] }, 0],
          },
          cancellationUnit: {
            $ifNull: [{ $arrayElemAt: ["$orderStats.cancellationUnit", 0] }, 0],
          },
        },
      },
    ]

   if (status === "Non") {
      pipeline.push({
        $match: {
          orderStats: { $eq: [] }
        }
      });
    }else if(status == "Top"){
      pipeline.push({
        $match: {
          orderStats: { $not: { $size: 0 } }
        }
      });
    }

     if(status == "New"){
        pipeline.push({
        $sort:{
          createdAt:-1
        }
      })
    }else{
       pipeline.push({
          $sort:{
            grossUnit:-1
          }
        })
    }
    

       pipeline.push(
        {
        $project: {
          netUnit: 1,
          netSale: 1,
          returnSale: 1,
          returnUnit: 1,
          grossSale: 1,
          grossUnit: 1,
          afterCancelSale: 1,
          afterCancelUnit: 1,
          cancellationSale: 1,
          cancellationUnit: 1,

          _id: 1,
          product_name: 1,
          main_image: 1,
          variant: {
            _id: "$variant._id",
            sku: "$variant.sku",
            sin: "$variant.sin",
            msrp: "$variant.msrp",
            consumerSalePrice: "$variant.consumerSalePrice",
            businessSalePrice: "$variant.businessSalePrice",
            currency: "$variant.currency",
            stock: "$variant.stock",
            customAttributes: "$variant.customAttributes",
            withImage: "$variant.withImage",
            image_1: "$variant.image_1",
            image_1: "$variant.image_1",
          },
        },
      },
       {
        $facet: {
          data: [
            { $skip: skip },
            { $limit: limit },
          ],
          totalCount: [
            { $count: "count" },
          ],
        },
      },

    )
    const product = await productModel.aggregate(pipeline);


    const total = product[0]?.totalCount[0]?.count || 0;
    const productData = product[0]?.data || [];
  const pagination = {
      totalCount:total,
      page:page,
      pageSize:limit,
      totalPages: Math.ceil(total / limit),
    }
    return responseFun(
      true,
      {
         product:productData , pagination
      },
      200
    );
  } catch (error) {
    console.log(error);
   return responseFun(
      false,
      {
         message:error.message
      },
      500
    );
  }
}
