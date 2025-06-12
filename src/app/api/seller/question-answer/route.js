import { isEmpty, responseFun } from "@/Http/helper";
import { ProductQuestionModal } from "@/Http/Models/productQuestion";


export async function GET(request) {
    
    const { searchParams } = new URL(request.url) 
    const page = searchParams.get("page") || 1;
    const pageSize = searchParams.get("pageSize") || 10;
    const skip = (page - 1) * pageSize;
     
    try{ 
        const questionList = await ProductQuestionModal.aggregate([
            {
                $lookup:{
                    from:"products",
                    let:{"productId": "$product_id"},
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $eq:["$_id", "$$productId"]
                                }
                            }
                        },
                        {
                            $project:{
                                _id:1,
                                product_name:1,
                                main_image:1,
                            }
                        }
                    ],
                    as:"product"
                }
            },

            {
                $lookup:{
                    from:"consumers",
                    let:{"userId": "$user_id"},
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $eq:["$_id", "$$userId"]
                                }
                            }
                        },
                        {
                            $project:{
                                _id:1,
                                full_name:1, 
                            }
                        }
                    ],
                    as:"user"
                }
            },

            {
                $lookup:{
                    from:"productvariants",
                    let:{"variantId": "$variant_id"},
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $eq:["$_id", "$$variantId"]
                                }
                            }
                        },
                        {
                            $project:{
                                _id:1,
                                sku:1, 
                                withImage:1, 
                                image_1:1, 
                            }
                        }
                    ],
                    as:"variant"
                }
            },


            {
                $addFields:{
                    product: { $arrayElemAt: ["$product", 0] },
                    user: { $arrayElemAt: ["$user", 0] },
                    variant: { $arrayElemAt: ["$variant", 0] },
                }
            },
            {
                $skip:skip
            },
            {
                $limit:pageSize
            }
        ])
         

        const totalCount = await ProductQuestionModal.countDocuments()
        let pagination= {
            totalCount,
            page,
            pageSize, 
            totalPages: Math.ceil(totalCount / pageSize),
        };

        return responseFun(true, {list:questionList, pagination}, 200)

    }catch(error){
        console.log(error);
        return responseFun(false, "error", 500)
    }
}



export async function POST(request) { 

    const {_id, answer} = await request.json()

    const errors = {}
    if(isEmpty(answer))errors.answer = "required"
    if(Object.keys(errors).length > 0){
        return responseFun(false, {errors, status_code:401} , 200)
    }
   try{
        await ProductQuestionModal.findByIdAndUpdate(_id, {
            answer
        })
        return responseFun(true, {message:"Success"}, 200)
   }catch(error){
    console.log(error);
    return responseFun(false, error.message, 500)
   }
}