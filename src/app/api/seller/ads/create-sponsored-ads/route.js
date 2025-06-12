import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { responseFun } from "@/Http/helper";
import { AdsStatusModal } from "@/Http/Models/AddModel/campaignStatus";
import { AdsProductsModals } from "@/Http/Models/AddModel/saponsoredAdsProducts";
import { searchKeywordModal } from "@/Http/Models/AddModel/SearchingKeywordModal";
import { adsKeywordModal, ExcludeKeywordModal, SponsoredAdsModal } from "@/Http/Models/AddModel/SponsoredAdsModal";
import { SellerWalletModel } from "@/Http/Models/WalletModal";
import mongoose from "mongoose";


export async function POST(request) { 


    const seller = await getLoginSeller(); 
    if(!seller){
        return responseFun(false, {message:"unauthorized user"}, 500)
    } 

    const seller_id = seller._id; 
    const {
        adsType,
            _id,
            campaignType,
            campaignName,
            defaultBid,
            dailyBudget,
            budgetManually,
            startDate,
            endDate,
            selectedProduct, 
            selectedKeyword, 
            selectedExcludeKeyword,
            expectedROI,
            budgetLimit
         }  = await request.json();

    // const session = await mongoose.startSession();
    //  session.startTransaction();

    
    try{

        // start manage wallet 
        const wallet =  await SellerWalletModel.findOne({seller_id: new mongoose.Types.ObjectId(seller_id)});
        let remainingAmount = 0
        let newRemainingAmount = 0
        let newSpendAmount = 0
        const start_date = new Date(startDate)
        const end_date = new Date(endDate)
        const timeDiffer = end_date.getTime() - start_date.getTime();
        // Convert milliseconds to days 
            let diifInDay = Math.floor(timeDiffer/ (1000 * 60 * 60 * 24));
            // include start and end date
            diifInDay = diifInDay + 1;
        const totalDayAdsAmount = Number(dailyBudget) * diifInDay;
        if(_id){
         const exitsAd  =  await SponsoredAdsModal.findById(_id);
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

        
         // Create ad
          let ad = null;
         if(_id){
            ad = await SponsoredAdsModal.findByIdAndUpdate(_id, {
                seller_id,
                adsType,
                campaignType,
                campaignName,
                defaultBid,
                budgetManually,
                dailyBudget,
                startDate,
                endDate,
                expectedROI,
                budgetLimit,
                spendAmount     : newSpendAmount,
                remainingAmount : newRemainingAmount
            }); 
         }else{
             ad = await SponsoredAdsModal.create({
                seller_id,
                adsType,
                campaignType,
                campaignName,
                defaultBid,
                budgetManually,
                dailyBudget,
                startDate,
                endDate,
                expectedROI,
                budgetLimit,
                spendAmount     : newSpendAmount,
                remainingAmount : newRemainingAmount
            }); 
         await AdsStatusModal.create([{seller_id, ads_id:ad._id}]);
         }
      
 

        // =====================================add keyword=============================
        
        const newSearchKeyword = [];
        let keywordDocs = [];
        if(_id){

              const selectedKeywordNames = selectedKeyword.map(k => k.keywordName); // For deletion use 
                keywordDocs = await Promise.all(
                    selectedKeyword.map(async (keyword) => {
                    const exists = await searchKeywordModal.countDocuments({ keywordName: keyword.keywordName });
                    if (exists === 0) {
                        newSearchKeyword.push({ keywordName: keyword.keywordName });
                    }

                    const { _id, ...rest } = keyword;

                    await adsKeywordModal.findOneAndUpdate(
                        {
                        ads_id: ad._id,
                        keywordName: keyword.keywordName,
                        },
                        {
                        $set: {
                            ...rest,
                            ads_id: ad._id,
                            seller_id,
                        },
                        },
                        {
                        new: true,
                        upsert: true,
                        }
                    );

                    return {
                        ...rest,
                        ads_id: ad._id,
                        seller_id,
                    };
                    })
                );

                if (newSearchKeyword.length > 0) {
                    await searchKeywordModal.insertMany(newSearchKeyword);
                }

                // ✅ Delete keywords that were previously saved but are now missing in selectedKeyword
                await adsKeywordModal.deleteMany({
                    ads_id: ad._id,
                    keywordName: { $nin: selectedKeywordNames }
                });


        }else if (selectedKeyword?.length > 0) {
            keywordDocs = await Promise.all(selectedKeyword.map(async (keyword) => {
                const exists = await searchKeywordModal.countDocuments({ keywordName: keyword.keywordName });
                if (exists === 0) {
                    newSearchKeyword.push({ keywordName: keyword.keywordName });
                }

                const {...rest } = keyword;
                return {
                    ...rest,
                    ads_id: ad._id,
                    seller_id
                };
            }));

            if (newSearchKeyword.length > 0) {
                await searchKeywordModal.insertMany(newSearchKeyword);
            }
             
            await adsKeywordModal.insertMany(keywordDocs);
        }else{
             await adsKeywordModal.deleteMany({ ads_id: ad._id});
        }

         // ======================Exclude Keyword============================
          if(_id){ 
                await ExcludeKeywordModal.deleteMany({ads_id: ad._id});
            }
        if (selectedExcludeKeyword?.length > 0) {
            const excludeKeywordDoc = selectedExcludeKeyword.map(({ _id, ...keywordItem }) => ({
                ...keywordItem,
                ads_id: ad._id,
                seller_id
            })); 
            await ExcludeKeywordModal.insertMany(excludeKeywordDoc);
        }

        // ======================add ads product============================
        if(_id){
             const produDoc = await Promise.all(selectedProduct.map(async (prod) => {
                
                 const check = await AdsProductsModals.findOne({
                    product_id:new mongoose.Types.ObjectId(prod.product_id),
                    variant_id:new mongoose.Types.ObjectId(prod.variant_id),
                    ads_id: ad._id,
                    seller_id:new mongoose.Types.ObjectId(seller_id)
                });
              
                if(!check){
                      await AdsProductsModals.create({
                         product_id: prod.product_id,
                        variant_id:prod.variant_id,
                        ads_id: ad._id,
                        seller_id:seller_id
                    });
                }
             }));

            //  delete product delete
            await AdsProductsModals.deleteMany({
            ads_id: ad._id,
                seller_id: new mongoose.Types.ObjectId(seller_id),
                $nor: selectedProduct.map(({ product_id, variant_id }) => ({
                    product_id: new mongoose.Types.ObjectId(product_id),
                    variant_id: new mongoose.Types.ObjectId(variant_id)
                }))
            });

        }else if (selectedProduct?.length > 0) {
            const produDoc = selectedProduct.map(({ _id, ...prod }) => ({
                ...prod,
                ads_id: ad._id,
                seller_id
            }));

            await AdsProductsModals.insertMany(produDoc);
        } 
 
        return responseFun(true, {message:"Your ad has been created successfully."}, 201)
    }catch(error){ 

        console.log(error.message);
        return responseFun(false, {message:error.message}, 500)
    }


}