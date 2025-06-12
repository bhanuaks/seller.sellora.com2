const { Schema, default: mongoose } = require("mongoose");

 
 const errorProductSchema = new Schema({
      
      category_id:{
            type:mongoose.Types.ObjectId,
            ref:"Category", 
        },
    
        seller_id:{
            type:mongoose.Types.ObjectId,
            ref:"Sellor", 
        },
        subcategory_id:{
            type:mongoose.Types.ObjectId,
              ref:"subCategory",
              required: false,
              default: null,
        },
        childcategory_id:{
            type:mongoose.Types.ObjectId,
            ref:"ChildCategory",
            required: false,
            default: null,
        },
        brand_id:{
            type:mongoose.Types.ObjectId,
            ref:"Brand",
            required:[true, "Brand is required"]
        },
        product_name:{
            type:String,
            required:[true, "Product name is required"]
        },

         slug:{
        type:String
    },
    product_id:{
        type:String
    },
    product_id_type:String,
    product_description:String,
    key_feature:[{
        type:String
    }],
    search_keywords:String,
    target_gender:String,
    age_range:String,
    material:String,
    model_name:String,
    model_number:String,
    manufacture_part_number:String,
    safety_warning:String,
    country_of_origin:String,
    manufacturer_details:String,
    packer_details:String,
    importer_details:String,

    image_1:{
        type:String,
        default:null
    }, 
    image_2:{
        type:String,
        default:null
    }, 
    image_3:{
        type:String,
        default:null
    }, 
    image_4:{
        type:String,
        default:null
    }, 
    image_5:{
        type:String,
        default:null
    }, 
    image_6:{
        type:String,
        default:null
    }, 
    image_7:{
        type:String,
        default:null
    }, 
    main_image:{
        type:String,
        default:null
    },
    dynamicFields:{
        type:Array,
        default:[]
    },
    keyAttributes:{
        type:Array,
        default:[]
    },
    listingStatus:{
        type:String,  
    },

    currency:{
        type:String,
        default:"USD"
    },
    taxCode: {
        type:String, 
    },
    taxRate:{
        type:String, 
    },
    fulfillmentBy:{
        type:String, 
    },
    shippingProvider:{
        type:String, 
    },
    variant:{
        type:String, 
    },

    save_as_draft: {
        type:String, 
    }, 
    packageBreadth:String,  
    product_length:String,
    product_length_unit : String,
    product_width:String,
    product_width_unit :String,
    product_weight:String,
    product_weight_unit : String,
    packageLength:String,
    packageLengthUnit:String,
    packageWidth:String,
    packageWidthUnit:String,
    packageHeight:String,
    packageHeightUnit:String,
    color:String,
    size:String,
    style:String,
    pettern:String,
    unit_coun:String,
    unit_count_type:String,
    item_type_name:String,
    recommanded_use:String,
    packageWeight:String,
    packageWeightUnit:String,

    productHeight:String,
    productHeightUnit:String,
    numberOfItem:String, 
     
    variantData:Object,
    complianceData:Object, 
    thresholdData:Object,
    errorsList:Object,
    sn:String,



},{timestamps:true})

export const errorProductModal = mongoose.models.ErrorProduct || mongoose.model("ErrorProduct", errorProductSchema)