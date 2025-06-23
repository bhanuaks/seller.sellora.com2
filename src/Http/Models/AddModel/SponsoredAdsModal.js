const { Schema, default: mongoose } = require("mongoose");

const SponsoredAdsSchema = new Schema({
    seller_id:{
        type:mongoose.Types.ObjectId,
        ref:"Seller",
        require:true, 
    }, 
    adsType:{
        type:String,
        require:true,
        enum:["Display", "Sponsored"]
    },
    adFormat:{
        type:String, 
        enum:["Image", "Video"]
    },

    campaignType:{
        type:String,
        require:true,
        enum:["Manual", "Smart"]
    },

     campaignName:{
        type:String,
        require:true, 
    },

   

     defaultBid:{
        type:Number, 
        default:0
    }, 

      budgetManually:{
        type:String, 
    },
     dailyBudget:{
        type:Number, 
        require:true
    },

     startDate:{
        type:Date, 
        require:true
    },

     endDate:{
        type:Date, 
        require:true
    },

    // Smart Campaign fields

     expectedROI:{
        type:Number, 
        require:true
    },

    budgetLimit:{
         type:Number, 
        require:true
    },

    fileUrl:{
        type:String, 
    },

    previewType:{
        type:String, 
    },
    
    adProduct:{
        type:Object, 
    },

    Status:{
         type:String, 
         enum:["Active", "Inactive", "Archive"],
         default:"Active",
        require:true
    },
    spendAmount:{
        type:Number,
        require:true,
        default:0
    },
    remainingAmount:{
        type:Number,
        require:true,
        default:0
    }
   
 
}, {timestamps:true})


export const SponsoredAdsModal = mongoose.models.SponsoredAds || mongoose.model("SponsoredAds", SponsoredAdsSchema);



const adsSearchKeywordSchema =  new Schema({
    ads_id:{
        type:mongoose.Types.ObjectId,
        ref:"SponsoredAds",
        require:true
    },
    seller_id:{
        type:mongoose.Types.ObjectId,
        ref:"Seller",
        require:true, 
    }, 

    keywordName:{
        type:String,
        require:[true, "keyword is required"],
    },

    bid:{
        type:Number,
        require:[true, "Bid is required"],
    },

     SuggBid:{
        type:Number, 
    },

    MatchType:{
        type:String,
        require:[true, "Match Type can not be null"],
        enum:["Phrase", "Exact"]
    },

      clicks:{
        type:Number,
        default:0 
    }
    
    
}, {timestamps:true})


export const adsKeywordModal = mongoose.models.SponsoredAdsKeyWord || mongoose.model("SponsoredAdsKeyWord", adsSearchKeywordSchema);



const excludeKeywordSchema =  new Schema({
    ads_id:{
        type:mongoose.Types.ObjectId,
        ref:"SponsoredAds",
        require:true
    },
    seller_id:{
        type:mongoose.Types.ObjectId,
        ref:"Seller",
        require:true, 
    }, 

    keywordName:{
        type:String,
        require:[true, "keyword is required"],
    }, 
    
}, {timestamps:true})


export const ExcludeKeywordModal = mongoose.models.ExcludeKeyword || mongoose.model("ExcludeKeyword", excludeKeywordSchema);