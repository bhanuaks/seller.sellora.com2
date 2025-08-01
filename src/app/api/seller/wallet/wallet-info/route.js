import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { SellerWalletHistoryModel, SellerWalletModel } from "@/Http/Models/WalletModal";
import mongoose from "mongoose";



export async function GET(request) {
    await connectDb();
    const seller = await getLoginSeller();
    if(!seller || !seller._id){
        return responseFun(false, {message:"unauthrized user"}, 403);
    }

    try {
            const wallet = await SellerWalletModel.findOne({seller_id: new mongoose.Types.ObjectId(seller._id) });
            const walletHistoty = await SellerWalletHistoryModel.find({seller_id: new mongoose.Types.ObjectId(seller._id) })
            .select("transactionId receiptId amount transactionType paymentMethod remarks status createdAt")
            .sort({createdAt:-1});
            return responseFun(true, {wallet, walletHistoty}, 200);
    } catch (error) {
        console.log(error.message);
        return responseFun(false, {message:error.message}, 500);
    }
}