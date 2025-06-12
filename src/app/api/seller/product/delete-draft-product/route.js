import { main_large_img_path, main_medium_img_path, main_thumb_img_path, product_large_img_path1, product_large_img_path2, product_large_img_path3, product_large_img_path4, product_large_img_path5, product_large_img_path6, product_large_img_path7, product_medium_img_path1, product_medium_img_path2, product_medium_img_path3, product_medium_img_path4, product_medium_img_path5, product_medium_img_path6, product_medium_img_path7, responseFun, variant_large_img_path1, variant_large_img_path2, variant_large_img_path3, variant_large_img_path4, variant_large_img_path5, variant_large_img_path6, variant_large_img_path7 } from "@/Http/helper";
import { productModel, productOtherDetailModel, productThresholdModel, productVariantModel, variantThresholdSchemaModal } from "@/Http/Models/productModel";
import { productDynamicFieldModel } from "../../../../../../lib/categoryModel";
import mongoose from "mongoose";
import { deleteImageOne } from "@/app/api/uploadImage/route";

import { variant_medium_img_path1, variant_medium_img_path2, variant_medium_img_path3, variant_medium_img_path4, variant_medium_img_path5, variant_medium_img_path6, variant_medium_img_path7  } from "@/Http/helper";
import { variant_thumb_img_path1, variant_thumb_img_path2, variant_thumb_img_path3, variant_thumb_img_path4, variant_thumb_img_path5, variant_thumb_img_path6, variant_thumb_img_path7  } from "@/Http/helper";


const variantLargePaths = [
    variant_large_img_path1,
    variant_large_img_path2,
    variant_large_img_path3,
    variant_large_img_path4,
    variant_large_img_path5,
    variant_large_img_path6,
    variant_large_img_path7,
];

const variantMediumPaths = [
    variant_medium_img_path1,
    variant_medium_img_path2,
    variant_medium_img_path3,
    variant_medium_img_path4,
    variant_medium_img_path5,
    variant_medium_img_path6,
    variant_medium_img_path7,
];

const variantThumbPaths = [
    variant_thumb_img_path1,
    variant_thumb_img_path2,
    variant_thumb_img_path3,
    variant_thumb_img_path4,
    variant_thumb_img_path5,
    variant_thumb_img_path6,
    variant_thumb_img_path7,
];


// product Image Path
const productLargePaths = [
    product_large_img_path1,
    product_large_img_path2,
    product_large_img_path3,
    product_large_img_path4,
    product_large_img_path5,
    product_large_img_path6,
    product_large_img_path7, 
];

const productMediumPaths = [
    product_medium_img_path1, 
    product_medium_img_path2, 
    product_medium_img_path3, 
    product_medium_img_path4, 
    product_medium_img_path5, 
    product_medium_img_path6, 
    product_medium_img_path7, 
];

const productThumbPaths = [
    product_large_img_path1, 
    product_large_img_path2, 
    product_large_img_path3, 
    product_large_img_path4, 
    product_large_img_path5, 
    product_large_img_path6, 
    product_large_img_path7, 
];

// const imageName = ["image_1", "image_2", "image_3", "image_4", "image_5", "image_6", "image_7"];

export async function DELETE(request) {
    
    const {_id} = await request.json();


    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        const product = await productModel.findById(_id);
        if(!product ){
            return responseFun(false, "This product was not found or has already been deleted.", 200)
        } 

        if(product.save_as_draft !== "1" ){   
            return responseFun(false, "Published products cannot be deleted.", 200)
        }

        const variant =  await productVariantModel.find({product_id: new mongoose.Types.ObjectId(_id) }) 
        

        if (variant && variant.length > 0) {
            for (let item of variant) {
                for (let i = 1; i <= 7; i++) {
                    const imageKey = `image_${i}`;
                    const imageName = item[imageKey]; 
                    if (imageName) {
                        const largePath = variantLargePaths[i - 1];
                        const mediumPath = variantMediumPaths[i - 1];
                        const thumbPath = variantThumbPaths[i - 1];
                        
                        await deleteImageOne(`${largePath}/${imageName}`);
                        await deleteImageOne(`${mediumPath}/${imageName}`);
                        await deleteImageOne(`${thumbPath}/${imageName}`);
                    }
                }
            }
        }


        // delete product image 
        for (let i = 1; i <= 7; i++) {
            const imageKey = `image_${i}`;
            const imageName = product[imageKey];

            if (imageName) {
                const prodLargePath = productLargePaths[i - 1];
                const prodMediumPath = productMediumPaths[i - 1];
                const prodThumbPath = productThumbPaths[i - 1];

                await deleteImageOne(`${prodLargePath}/${imageName}`);
                await deleteImageOne(`${prodMediumPath}/${imageName}`);
                await deleteImageOne(`${prodThumbPath}/${imageName}`);
            }
        }

        // delete product main image
        await deleteImageOne(`${main_large_img_path}/${product.main_image}`);
        await deleteImageOne(`${main_medium_img_path}/${product.main_image}`);
        await deleteImageOne(`${main_thumb_img_path}/${product.main_image}`);

        // delete all product image
        await productDynamicFieldModel.deleteMany({product_id: new mongoose.Types.ObjectId(_id) });
        await productOtherDetailModel.deleteMany({product_id: new mongoose.Types.ObjectId(_id) });
        await productThresholdModel.deleteMany({product_id: new mongoose.Types.ObjectId(_id) });
        await productVariantModel.deleteMany({product_id: new mongoose.Types.ObjectId(_id) });
        await variantThresholdSchemaModal.deleteMany({product_id: new mongoose.Types.ObjectId(_id) });
        await productModel.findByIdAndDelete(_id);
        session.commitTransaction();
        return responseFun(true, "Product has been deleted successfully.", 200)
    }catch(error){
        session.abortTransaction();
        console.log(error);
        return responseFun(false, "Something went wrong please try leter.", 200)
    }
            
}