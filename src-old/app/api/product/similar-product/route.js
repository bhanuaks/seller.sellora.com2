import { responseFun } from "@/Http/helper";
import { productModel } from "@/Http/Models/productModel";


export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const product_id = searchParams.get('product_id')

    try {
        if (!product_id) {
            return responseFun(false, { message: "Product Id is required" }, 200)
        }
        let similarProduct = [];
        const product = await productModel.findById(product_id)
        let similarProductQuery = { _id: { $ne: product_id } };

        if (!product) {
            return responseFun(false, { similarProduct: [] }, 200)
        }
        if (product.childcategory_id) {
            similarProductQuery.childcategory_id = product.childcategory_id
        }
        else if (product.subcategory_id) {
            similarProductQuery.subcategory_id = product.subcategory_id
        }
        else if (product.category_id) {
            similarProductQuery.category_id = product.category_id
        }

        similarProduct = await productModel.aggregate([
            {
                $match: similarProductQuery
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
                                        { $eq: ["$listingStatus", 1] }
                                    ]
                                }
                            }
                        },
                        {
                            $sort: { consumerSalePrice: 1 }
                        },
                        {
                            $limit:1
                        }
                    ],
                    as: "variant"
                }
            },
            {
                $addFields:{variant: { $arrayElemAt:["$variant",0]}}
            },
            {
                // if product variant not exist
                $match: { variant: { $ne: null } } 
            },
        ])

        return responseFun(true, { similarProduct }, 200)
    } catch (error) {
        console.log(error);
        return responseFun(false, { error }, 200)
    }
}