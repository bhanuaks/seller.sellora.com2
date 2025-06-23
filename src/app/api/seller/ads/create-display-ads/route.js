

import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { uploadImageFun } from "@/app/api/uploadImage/route";
import { responseFun, slugify } from "@/Http/helper";
import { adsCategoryModal } from "@/Http/Models/AddModel/AdsCategoryModal";
import { AdsStatusModal } from "@/Http/Models/AddModel/campaignStatus";
import { AdsProductsModals } from "@/Http/Models/AddModel/saponsoredAdsProducts";
import { searchKeywordModal } from "@/Http/Models/AddModel/SearchingKeywordModal";
import { adsKeywordModal, ExcludeKeywordModal, SponsoredAdsModal } from "@/Http/Models/AddModel/SponsoredAdsModal";
import mongoose from "mongoose";
import path from 'path';
import { writeFile } from "fs/promises";
import { SellerWalletModel } from "@/Http/Models/WalletModal";


export async function POST(request) { 

      
    const seller = await getLoginSeller(); 
    if(!seller){
        return responseFun(false, {message:"unauthorized user"}, 403)
    }  
    const seller_id = seller._id; 

     const formData = await request.formData();
    
     const data = {
        _id                 : formData.get("_id") || undefined,
        adsType             : formData.get("adsType"),
        adFormat            : formData.get("adFormat"),
        campaignName        : formData.get("campaignName"),
        dailyBudget         : formData.get("dailyBudget"),
        budgetManually      : formData.get("budgetManually"),
        startDate           : formData.get("startDate"),
        endDate             : formData.get("endDate"), 
        previewType         : formData.get("adFormat") == "Image"?formData.get("previewType"):undefined, 
    }

       const  adProduct           = formData.get("adProduct")?JSON.parse(formData.get("adProduct")) :"";
       const  fileUrl           = formData.get("fileUrl");
       const  selectedProduct   = JSON.parse(formData.get("selectedProduct"));
       const  selectedCategory  = JSON.parse(formData.get("selectedCategory")); 
       

        // start manage wallet 
               const wallet =  await SellerWalletModel.findOne({seller_id: new mongoose.Types.ObjectId(seller_id)});
               let remainingAmount = 0
               let newRemainingAmount = 0
               let newSpendAmount = 0
               const start_date = new Date(data.startDate)
               const end_date = new Date(data.endDate)
               const timeDiffer = end_date.getTime() - start_date.getTime();
               // Convert milliseconds to days

                let diifInDay = Math.floor(timeDiffer/ (1000 * 60 * 60 * 24));
                // include start and end date

                diifInDay = diifInDay + 1;
               const totalDayAdsAmount = Number(data.dailyBudget) * diifInDay;
               if(data._id){
                const exitsAd  =  await SponsoredAdsModal.findById(data._id);
                if(exitsAd){ 
                    remainingAmount = exitsAd.remainingAmount || 0 ;
       
                     if(totalDayAdsAmount > remainingAmount){ 
                           const newPayAmount = totalDayAdsAmount - remainingAmount
                            if(!wallet || wallet.adsBalance < newPayAmount){
                               return responseFun(false, {message:"Your ads wallet balance is low. Please recharge your wallet."}, 200)
                            }
                           newRemainingAmount      = (exitsAd.remainingAmount || 0) + newPayAmount
                           newSpendAmount          = (exitsAd.spendAmount || 0) + newPayAmount 
                           wallet.adsBalance       =  wallet.adsBalance - newPayAmount; 
                           wallet.accruingCharge   =  wallet.accruingCharge + newPayAmount; 
       
                   }else if(totalDayAdsAmount < remainingAmount){
                            const newSubAmount     = remainingAmount - totalDayAdsAmount;
                           newRemainingAmount      = (exitsAd.remainingAmount || 0) - newSubAmount
                           newSpendAmount          = (exitsAd.spendAmount || 0) - newSubAmount
                           wallet.adsBalance       =  wallet.adsBalance + newSubAmount;
                           wallet.accruingCharge   =  wallet.accruingCharge - newSubAmount;
                   }else if(totalDayAdsAmount == remainingAmount){
                    newRemainingAmount = exitsAd.remainingAmount;
                    newSpendAmount = exitsAd.spendAmount;
                   }
                }
               }else{ 
                    if(!wallet || wallet.adsBalance < totalDayAdsAmount){
                           return responseFun(false, {message:"Your ads wallet balance is low. Please recharge your wallet."}, 200)
                     }
                   newSpendAmount          = totalDayAdsAmount;
                   newRemainingAmount      = totalDayAdsAmount;
       
                   wallet.adsBalance       = wallet.adsBalance - totalDayAdsAmount; 
                   wallet.accruingCharge   = wallet.accruingCharge + totalDayAdsAmount; 
               }
               
               await wallet.save(); 
               // end manage wallet



       
        if(!fileUrl && data?.adFormat == "Video"){
            let message =   "Video has not uploaded";
            return responseFun(false, {message:message}, 200)
        }
        
      
         let filpath = "";
        if(fileUrl && fileUrl instanceof File){
            const extension = path.extname(fileUrl.name);
             let filename = `${slugify(data.campaignName)}${Date.now()}${extension}`;
            const uploadingPath = '/public/uploads/ads/';
            if (data.adFormat == "Video") {
                const buffer = Buffer.from(await fileUrl.arrayBuffer());  
                const outputFilePath = path.join(process.cwd(), uploadingPath, filename); 
                await writeFile(outputFilePath, buffer);
               
            }else{
               await uploadImageFun(fileUrl, uploadingPath, filename, 1100)
            }
            filpath = `uploads/ads/${filename}`;
        }else{
            filpath = fileUrl;
        }
 
    
    try{
         // Create ad
         let ad = null;
         if(data._id){
         ad = await SponsoredAdsModal.findByIdAndUpdate(data._id,{
                seller_id,
                ...data,
                fileUrl:filpath,
                adProduct: adProduct || undefined,
                  spendAmount     : newSpendAmount,
                remainingAmount : newRemainingAmount
            }); 
         }else{
        ad = await SponsoredAdsModal.create({
                seller_id,
                ...data,
                fileUrl:filpath,
                adProduct: adProduct || undefined,
                spendAmount     : newSpendAmount,
                remainingAmount : newRemainingAmount
            }); 
            
         await AdsStatusModal.create([{seller_id, ads_id:ad._id}]); 
         }
        
 

      
     

        // =====================================add Category=============================
        if (data._id && selectedCategory?.length > 0) {
            const selectedCategoryIds = selectedCategory.map(c => c._id.toString());

            //  Get all existing category mappings for the ad
            const existingCategories = await adsCategoryModal.find({
                ads_id: ad._id,
                seller_id: seller_id,
            });

            // Delete categories not in selectedCategory
            const categoriesToDelete = existingCategories.filter(cat =>
                !selectedCategoryIds.includes(cat.category_id.toString())
            );

            if (categoriesToDelete.length > 0) {
                await adsCategoryModal.deleteMany({
                _id: { $in: categoriesToDelete.map(cat => cat._id) }
                });
            }

            // Map for faster lookup
            const existingCategoryMap = new Map(
                existingCategories.map(cat => [cat.category_id.toString(), cat])
            );

            // Step 4: Upsert logic
            await Promise.all(
                selectedCategory.map(async (category) => {
                const existing = existingCategoryMap.get(category._id.toString());

                if (existing) {
                    if (existing.suggBid !== category.suggBid || existing.bid !== category.bid) {
                    await adsCategoryModal.findByIdAndUpdate(existing._id, {
                        suggBid: category.suggBid,
                        bid: category.bid,
                    });
                    }
                } else {
                    await adsCategoryModal.create({
                    suggBid: category.suggBid,
                    bid: category.bid,
                    category_id: category._id,
                    ads_id: ad._id,
                    seller_id: seller_id,
                    });
                }
                })
            );
            }else if (selectedCategory?.length > 0) {
           const categoriesDoc = selectedCategory.map((category) => {
                return {
                    suggBid     : category.suggBid,
                    bid         : category.bid,
                    category_id : category._id,
                    ads_id      : ad._id,
                    seller_id   : seller_id
                };
            });
 
             await adsCategoryModal.insertMany(categoriesDoc); 
        }
 
        // ======================add ads product============================
        if (data._id && selectedProduct?.length > 0) {
            const selectedProductKeys = selectedProduct.map(p =>
                `${p._id.toString()}-${p.variant_id?.toString()}`
            );

            // ========Fetch existing products mapped to the ad============
            const existingProducts = await AdsProductsModals.find({
                ads_id: ad._id,
                seller_id: seller_id,
            });

            //=========Identify and delete products not in selectedProduct ====================
            const productToDelete = existingProducts.filter(prod => {
                const key = `${prod.product_id.toString()}-${prod.variant_id?.toString()}`;
                return !selectedProductKeys.includes(key);
            });

            if (productToDelete.length > 0) {
                await AdsProductsModals.deleteMany({
                _id: { $in: productToDelete.map(p => p._id) }
                });
            }

            // =============Create map for fast lookups
            const existingProductMap = new Map(
                existingProducts.map(prod => [
                `${prod.product_id.toString()}-${prod.variant_id?.toString()}`,
                prod
                ])
            );

            // Step 4: Insert or update products
            await Promise.all(
                selectedProduct.map(async (product) => {
                const key = `${product._id.toString()}-${product.variant_id?.toString()}`;
                const existing = existingProductMap.get(key);

                if (!existing)   {
                    await AdsProductsModals.create({
                        product_id          : product._id,
                        variant_id          : product.variant_id || null, 
                        ads_id              : ad._id,
                        seller_id           : seller_id,
                         category_id        : product.category_id,
                        subcategory_id      : product.subcategory_id,
                        childcategory_id    : product.childcategory_id,
                    });
                }
                })
            );
            }else if (selectedProduct?.length > 0) {
                // when create new Ad 
            const produDoc = selectedProduct.map((prod) => ({
                    product_id          : prod._id,
                    variant_id          : prod.variant_id || null, 
                    ads_id              : ad._id,
                    seller_id           : seller_id,
                    category_id         : prod.category_id,
                    subcategory_id      : prod.subcategory_id,
                    childcategory_id    : prod.childcategory_id,
            }));

            await AdsProductsModals.insertMany(produDoc);
        } 
        return responseFun(true, {message:"Your ad has been created successfully."}, 201)
    }catch(error){ 
        console.log(error);
        return responseFun(false, {message:error.message}, 500)
    }


}