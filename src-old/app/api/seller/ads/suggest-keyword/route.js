import { responseFun } from "@/Http/helper";
import { searchKeywordModal } from "@/Http/Models/AddModel/SearchingKeywordModal";
import { adsKeywordModal } from "@/Http/Models/AddModel/SponsoredAdsModal";


export async function POST(request) {

    const { searchText } = await request.json();
    
    try {
        const query = {};
          let suggKeyword = [];
        if(searchText){
            query.keywordName = { $regex: searchText, $options: "i" };
             suggKeyword = await searchKeywordModal.find(query).sort({priority:-1})
        }
         
        
        const keywardWithBid = await Promise.all(
            suggKeyword.map(async (keyword)=>{
                const adsKeyword = await adsKeywordModal.findOne({ keywordName : keyword.keywordName }).sort({bid:-1})
                if (adsKeyword) {
                        return {
                            ...keyword.toObject(),  
                            SuggBid: [adsKeyword.bid + 1, adsKeyword.bid + 0.5],
                            MatchType: ["Phrase", "Exact"],
                            selectedBid:(adsKeyword.bid + 0.5),
                            selectedMatchType:"Phrase",
                        };
                    }else{
                        return {
                            ...keyword.toObject(),
                            SuggBid: [2.21, 2.25],
                            MatchType: ["Phrase", "Exact"],
                            selectedBid:2.21,
                            selectedMatchType:"Phrase",

                        };
                    }
            })
        )
        return responseFun(true, { message:"success", suggKeyword:keywardWithBid }, 200); 
    } catch (error) {
        console.log(error.message);
        return responseFun(false, {message:error.message}, 200);
    }
}