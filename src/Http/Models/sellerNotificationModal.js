const { Schema, default: mongoose } = require("mongoose");


const sellernoficationSchema = new Schema({

     seller_id:{
            type:mongoose.Types.ObjectId,
            ref:"Seller"
        }, 

// ===============================================================================
       ListingCreation:{
        type:Boolean, 
        default:true
    },
    ListingCreationEmail:{
        type:String, 
         lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },

   // ================================================================================

     ComplianceRequirements:{
        type:Boolean, 
        default:true
    },
      ComplianceRequirementsEmail:{
        type:String, 
         lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },

       // ================================================================================
         ListingRecommendations:{
        type:Boolean, 
        default:true
    },
      ListingRecommendationsEmail:{
        type:String, 
         lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },

       // ================================================================================
         NewOrder:{
        type:Boolean, 
        default:true
    },
      NewOrderEmail:{
        type:String, 
         lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },
    
       // ================================================================================
         NewOrderCancellationRisk:{
        type:Boolean, 
        default:true
    },
       NewOrderCancellationRiskEmail:{
        type:String, 
         lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },

       // ================================================================================
         NewReturnRequest:{
        type:Boolean, 
        default:true
    },
       NewReturnRequestEmail:{
        type:String, 
         lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },

       // ================================================================================
         ReturnDelivered:{
        type:Boolean, 
        default:true
    },
      ReturnDeliveredEmail:{
        type:String, 
         lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },
       // ================================================================================
         RefundIssued:{
        type:Boolean, 
        default:true
    },
      RefundIssuedEmail:{
        type:String, 
         lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },
       // ================================================================================
         AdvertisementRecommendation:{
        type:Boolean, 
        default:true
    },

     AdvertisementRecommendationEmail:{
        type:String, 
         lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },
       // ================================================================================
         PriceRecommendation:{
        type:Boolean, 
        default:true
    },

        PriceRecommendationEmail:{
        type:String, 
         lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },
       // ================================================================================
         SelloraPromotions:{
        type:Boolean, 
        default:true
    },

    
        SelloraPromotionsEmail:{
        type:String, 
         lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },
       // ================================================================================
         ReportStatus:{
        type:Boolean, 
        default:true
    },

     ReportStatusEmail:{
        type:String, 
         lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },

       // ================================================================================
      

     EmergencyNotificationEmail:{
        type:String, 
         lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },
    

     EmergencyNotificationNumber:{
        type:String,  
    },
       

     country_s_name:String,
      mobile_code:String

}, { timestamps:true });



export const sellerNotificationSetting = mongoose.models.SellerNotificationSetting || mongoose.model("SellerNotificationSetting", sellernoficationSchema)