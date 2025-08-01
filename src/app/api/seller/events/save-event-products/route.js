import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { productModel } from "@/Http/Models/productModel";
import { appliedEventModal, appliedEventProductModal } from "@/Http/Models/Sales-events/AppliedEvent";
import mongoose from "mongoose";


export async function POST(request) {
    
    await connectDb();
    const { selectedProduct, _id, event_id, discount } = await request.json()

    const seller = await getLoginSeller();
    if(!seller){
            return responseFun(false, {message:"unauthrized request"}, 401)
    }
    const seller_id = seller._id;


    try {
         const productIds = selectedProduct.map((itemData)=>new mongoose.Types.ObjectId(itemData.product_id))
        //  const variantIds = selectedProduct.map((itemData)=>new mongoose.Types.ObjectId(itemData.variant_id))


          let AppliedEvent = null;
          const checkEvent = await appliedEventModal.findOne(
                {
                    event_id: new mongoose.Types.ObjectId(event_id),
                    seller_id: new mongoose.Types.ObjectId(seller_id)
                }
            )
            if(checkEvent){
                AppliedEvent = await appliedEventModal.updateOne(
                    {
                        event_id: new mongoose.Types.ObjectId(event_id),
                        seller_id: new mongoose.Types.ObjectId(seller_id)
                    },
                    {
                        $set: {
                            discount
                        }
                    }
                )
            }else{
                AppliedEvent = await appliedEventModal.create({
                    event_id,
                    seller_id,
                    discount
                })
            }
            
            if(!AppliedEvent){
                return responseFun(false, {message:"Something went wrong."})
            }
               const productData = selectedProduct.map((prod)=>{
                    return {
                        seller_id        : seller_id,
                        event_id        : event_id,
                        appliedEventId  : AppliedEvent._id,
                        product_id      : prod.product_id,
                        variant_id      : prod.variant_id,
                        discount        : discount,
                    }
                }) 

                
             await appliedEventProductModal.deleteMany({appliedEventId:AppliedEvent._id})
             await appliedEventProductModal.insertMany(productData)

             await productModel.updateMany(
                {
                    seller_id: new mongoose.Types.ObjectId(seller_id),
                    event_id: new mongoose.Types.ObjectId(event_id)
                },
                {
                    $set: {
                    event_id: undefined,
                    discount: 0
                    }
                }

            );

            await productModel.updateMany(
                {
                    seller_id: new mongoose.Types.ObjectId(seller_id),
                    _id: { $in: productIds }
                },
                {
                    $set: {
                    event_id: event_id,
                    discount: discount
                    }
                }
            );
         
         
         return responseFun(true, { message:"You have applied this event." }, 200)

    } catch (error) {
        console.log(error);
          return responseFun(false, { message:error.message }, 500)
    }
}