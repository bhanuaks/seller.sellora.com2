import { getLoginSeller, getLoginUser } from "@/app/api/getLoginUser/route";
import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { orderProductModel } from "@/Http/Models/order";
import mongoose from "mongoose";



export async function GET(request) {
    
    await connectDb();
    
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || "All";
    const searchBy = searchParams.get("searchBy") || null;
    const searchText = searchParams.get("searchText") || null;
    const filterByDay = searchParams.get("filterByDay") || "";

    const page = parseInt(searchParams.get("page")) || 1;
    const pageSize =  parseInt(searchParams.get("pageSize")) || 10;
    const skip = (page - 1) * pageSize;
   
    const seller = await getLoginSeller();
    if (!seller || !seller._id) {
        return responseFun(false, "seller id not found!", 404);
      }

        const sellerId = new mongoose.Types.ObjectId(seller._id);
        
     

    try{

        // const totalCoute = { 
        //         all: await orderProductModel.countDocuments({seller_id: sellerId,  order_status: { $in: [6, 7] } }),
        //         pending: await orderProductModel.countDocuments({seller_id: sellerId, order_status:7}),
        //         complete: await orderProductModel.countDocuments({seller_id: sellerId, order_status:6}),
        // } 

        let days = parseInt(filterByDay);
        let currentDate = new Date();
        let startDate = new Date();

        if (filterByDay !== "") { 
            if (days === 0) {
                // Exact date (today)
                startDate.setHours(0, 0, 0, 0);
            } else {
                // Days range (last X days)
                startDate.setDate(currentDate.getDate() - days);
            }
        }else{
            startDate.setDate(currentDate.getDate() - 30);
        }

        const totalCoute = {
                          all: await countOrdersWithLookup({
                            sellerId,
                            orderStatus: [6, 7],
                            startDate
                          }),
                          pending: await countOrdersWithLookup({
                            sellerId,
                            orderStatus: 7,
                            startDate
                          }),
                          complete: await countOrdersWithLookup({
                            sellerId,
                            orderStatus: 6,
                            startDate
                          })
                        };


        const query = { seller_id: sellerId, order_status:7 };
        if (status == "All") {
            query.order_status = { $in: [6, 7] }; 

        }else if(status == "Pending"){
            query.order_status = 7 ; 
        }else if(status == "Complete"){
            query.order_status = 6 ; 
        }

        if (searchText && searchBy) {
            if (searchBy === "sku") {
                query.sku = { $regex: searchText, $options: "i" };
            } else if (searchBy === "OrderId") {
                query.order_id = { $regex: searchText, $options: "i" };
            }
        }

        

        console.log({startDate});
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
                    { $project: { _id: 0, withImage: 1, image_1: 1, sku: 1, sin:1 } },
                  ],
                  as: "variant",
                },
              },

                // Fetch cancelByUser  details
                {
                    $lookup: {
                      from: "orderitemstatushistries",
                      let: { suborderId: "$_id", filterDate: startDate },
                      pipeline: [
                        { $match: { $expr: {
                            $and: [
                              { $eq: ["$orderItemId", "$$suborderId"] },
                              { $eq: ["$status", 7] }, 
                              { $gte: ["$createdAt", "$$filterDate"] }
                            ]
                          }
                         } }, 
                      ],
                      as: "cancelByUser",
                    },
                  },

                  

                     // Fetch cancelByUser  details
                {
                    $lookup: {
                      from: "orderitemstatushistries",
                      let: { suborderId: "$_id" },
                      pipeline: [
                        { $match: { $expr: {
                            $and: [
                              { $eq: ["$orderItemId", "$$suborderId"] },
                              { $eq: ["$status", 6] }
                            ]
                          }
                         } }, 
                      ],
                      as: "refundDetails",
                    },
                  },

                       // Fetch cancelByUser  details
                {
                  $lookup: {
                    from: "orderitemstatushistries",
                    let: { suborderId: "$_id" },
                    pipeline: [
                      { $match: { $expr: {
                          $and: [
                            { $eq: ["$orderItemId", "$$suborderId"] },
                            { $eq: ["$status", 2] }
                          ]
                        }
                       } 
                      }, 
                    ],
                    as: "shippingInfo",
                  },
                },
         
              // Flatten arrays and keep only relevant fields
              {
                $addFields: {
                  shippingInfo: { $arrayElemAt: ["$shippingInfo", 0] },
                  cancelByUser: { $arrayElemAt: ["$cancelByUser", 0] },
                  refundDetails: { $arrayElemAt: ["$refundDetails", 0] },
                  user: { $arrayElemAt: ["$user", 0] },
                  product: { $arrayElemAt: ["$product", 0] },
                  variant: { $arrayElemAt: ["$variant", 0] },
                },
              },
              {
                $match: { cancelByUser: { $ne: null } }
              },
              {
                $sort : {createdAt: -1}
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

         return responseFun(true, { orders: orders,totalCoute,  pagination }, 200);


    }catch(error){
        console.log(error);
        return responseFun(false, error, 500)
    }
}


async function countOrdersWithLookup({
  sellerId,
  orderStatus,
  startDate
}) {
  const matchStage = {
    seller_id: sellerId
  };

  if (orderStatus !== undefined) {
    if (Array.isArray(orderStatus)) {
      matchStage.order_status = { $in: orderStatus };
    } else {
      matchStage.order_status = orderStatus;
    }
  }

  const pipeline = [
    { $match: matchStage },

    {
      $lookup: {
        from: "orderitemstatushistries",
        let: {
          suborderId: "$_id",
          filterDate: startDate
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$orderItemId", "$$suborderId"] },
                  { $eq: ["$status", 7] },
                  ...(startDate
                    ? [{ $gte: ["$createdAt", "$$filterDate"] }]
                    : [])
                ]
              }
            }
          }
        ],
        as: "cancelByUser"
      }
    },

    // Optional: Filter further if you want only orders that HAVE a matching cancellation
    // Uncomment below if you only want orders where cancelByUser is NOT empty
    
    {
      $match: {
        "cancelByUser.0": { $exists: true }
      }
    },
   

    { $count: "total" }
  ];

  const result = await orderProductModel.aggregate(pipeline);

  return result[0]?.total || 0;
}



 