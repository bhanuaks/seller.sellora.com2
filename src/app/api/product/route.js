import { isEmpty, rand, responseFun, slugify } from "@/Http/helper";
import path from 'path'
import { productModel, productVariantModel } from "@/Http/Models/productModel";
import { Category } from "../../../../lib/categoryModel";
import { subCategory } from "../../../../lib/subcategoryModel";
import ChildCategory from "../../../../lib/childcategoryModel";
import { connectDb } from "@/Http/dbConnect2";

export async function POST(req) {
    await connectDb()
    try {
       
        const url = new URL(req.url);
        const category = url.searchParams.get('category');
        const subcategory = url.searchParams.get('subcategory');
        const childcategory = url.searchParams.get('childcategory');

        const  filterBy ="";
        const  start_price = "";
        const  end_price = "";
        const  brand = [];
        


        let query = {};
        
        if (category) {
            const categoryData = await Category.findOne({slug : category});
           
            if (categoryData) {
                query.category_id = categoryData._id;
            }else{
                return responseFun(true, { message: "No products found matching the filters." }, 404);
            }
        }
        
        // if choose sub category
        if (subcategory) {
            const subcategoryData = await subCategory.findOne({ slug: subcategory }); 
            if (subcategoryData) {
                query.subcategory_id = subcategoryData._id;
            }else{
                return responseFun(true, { message: "No products found matching the filters." }, 404);
            }
        }
        
         // if choose child category
        if (childcategory) {
            const childcategoryData = await ChildCategory.findOne({ slug: childcategory });
            if (childcategoryData) {
                query.childcategory_id = childcategoryData._id;
            }else{
                return responseFun(true, { message: "No products found matching the filters." }, 404);
            }
        }
        
        // fetch  product data
        const products = await productModel.find(query);

        // get variant data
         let productWithVariant = await Promise.all(
                    products.map(async (prod)=>{
                        let variantQuery = {
                            product_id: prod._id,
                            listingStatus: 1
                        }; 

                        if(start_price){
                            variantQuery.consumerSalePrice  = {...variantQuery.consumerSalePrice, $gte:start_price }
                        }
                        if(end_price){
                            variantQuery.consumerSalePrice = {...variantQuery.consumerSalePrice, $lte:end_price}
                        }
                        let variantQueryBuilder = await productVariantModel.find(variantQuery) 
                        if (filterBy) {
                            let sortOrder = filterBy === "ASC"? 1:-1;
                            variantQueryBuilder = variantQueryBuilder.sort({consumerSalePrice: sortOrder }).limit(1);
                        }
                        //  const variant =  variantQueryBuilder; 

                         if (!variantQueryBuilder.length) return null;
                        return {
                            ...prod.toObject(),
                            variant:variantQueryBuilder[0]
                        }
                    })
                 )

               productWithVariant = productWithVariant.filter((item)=> item != null)
         
       
        return responseFun(true, productWithVariant, 200);
          
      } catch (error) {
        console.log(error);
       return responseFun(false, {message:"An error occurred while fetching products"}, 500)
    }
}
