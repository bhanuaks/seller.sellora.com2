// app/api/seller/upload-excel-product/route.js
import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx'; 
// import Product from '@/models/Product'; // Adjust to your product model
import { connectDb } from '../../../../../lib/dbConnect';
import { formatString, isEmpty, main_large_img_path, main_medium_img_path, main_thumb_img_path, product_large_img_path1, product_large_img_path2, product_large_img_path3, product_large_img_path4, product_large_img_path5, product_large_img_path6, product_large_img_path7, product_medium_img_path1, product_medium_img_path2, product_medium_img_path3, product_medium_img_path4, product_medium_img_path5, product_medium_img_path6, product_medium_img_path7, product_thumb_img_path1, product_thumb_img_path2, product_thumb_img_path3, product_thumb_img_path4, product_thumb_img_path5, product_thumb_img_path6, product_thumb_img_path7, responseFun, slugify, variant_large_img_path1, variant_large_img_path2, variant_large_img_path3, variant_large_img_path4, variant_large_img_path5, variant_large_img_path6, variant_large_img_path7, variant_medium_img_path1, variant_medium_img_path2, variant_medium_img_path3, variant_medium_img_path4, variant_medium_img_path5, variant_medium_img_path6, variant_medium_img_path7, variant_thumb_img_path1, variant_thumb_img_path2, variant_thumb_img_path3, variant_thumb_img_path4, variant_thumb_img_path5, variant_thumb_img_path6, variant_thumb_img_path7 } from '@/Http/helper';
import { Category, productDynamicFieldModel } from '../../../../../lib/categoryModel';
import { subCategory } from '../../../../../lib/subcategoryModel';
import ChildCategory from '../../../../../lib/childcategoryModel';
import { getLoginSeller } from '../../getLoginUser/route';
import { brandModel, brandSellerModel } from '@/Http/Models/branModel';
import { downloadAndResizeMultiple } from '@/Http/ExcelDataHelper/ImageDownloadHelper';
import { productModel, productOtherDetailModel, productVariantModel, variantThresholdSchemaModal } from '@/Http/Models/productModel';
import { newSinNumber } from '../product/add-variant/route';
import { errorProductModal } from '@/Http/Models/ErroreModal/erroreModel';
import mongoose from 'mongoose';


const imageFields = ["Image_1", "Image_2", "Image_3", "Image_4", "Image_5", "Image_6", "Image_7"];
const outputPaths = [
  {
    thumb: product_thumb_img_path1,
    medium: product_medium_img_path1,
    large: product_large_img_path1
  },
  {
    thumb: product_thumb_img_path2,
    medium: product_medium_img_path2,
    large: product_large_img_path2
  },
  {
    thumb: product_thumb_img_path3,
    medium: product_medium_img_path3,
    large: product_large_img_path3
  },
  {
    thumb: product_thumb_img_path4,
    medium: product_medium_img_path4,
    large: product_large_img_path4
  }, 

    {
    thumb: product_thumb_img_path5,
    medium: product_medium_img_path5,
    large: product_large_img_path5
  }
  ,
    {
    thumb: product_thumb_img_path6,
    medium: product_medium_img_path6,
    large: product_large_img_path6
  } 
  ,
    {
    thumb: product_thumb_img_path7,
    medium: product_medium_img_path7,
    large: product_large_img_path7
  }
];



const variantImageFields = ["variant_image_1", "variant_image_2", "variant_image_3", "variant_image_4", "variant_image_5", "variant_image_6", "variant_image_7"];
const variantOutputPaths = [
  {
    thumb: variant_thumb_img_path1,
    medium: variant_medium_img_path1,
    large: variant_large_img_path1
  },
  
   {
    thumb: variant_thumb_img_path2,
    medium: variant_medium_img_path2,
    large: variant_large_img_path2
  },
   {
    thumb: variant_thumb_img_path3,
    medium: variant_medium_img_path3,
    large: variant_large_img_path3
  },
   {
    thumb: variant_thumb_img_path4,
    medium: variant_medium_img_path4,
    large: variant_large_img_path4
  },
   {
    thumb: variant_thumb_img_path5,
    medium: variant_medium_img_path5,
    large: variant_large_img_path5
  },
   {
    thumb: variant_thumb_img_path6,
    medium: variant_medium_img_path6,
    large: variant_large_img_path6
  },

    {
    thumb: variant_thumb_img_path7,
    medium: variant_medium_img_path7,
    large: variant_large_img_path7
  }

];


export async function POST(request) {
  try {
    await connectDb();
     let indexNumber = 4;

    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Read the file as buffer
    const buffer = await file.arrayBuffer();
    
    // Parse Excel file
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    
    // Get first sheet
    const sheetName = workbook.SheetNames[1];
    const sheet = workbook.Sheets[sheetName];
    
    // Convert to JSON  
     const JsonData = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        range: 1,
      });

    const header = JsonData[0]; 

    // combine data with header
    const data = XLSX.utils.sheet_to_json(sheet, {
        header: header,
        range: 6,
      });
   
    const insertDataArray = [];
     
    const seller = await getLoginSeller();
    const groups = {}
   
    await errorProductModal.deleteMany({seller_id: new mongoose.Types.ObjectId(seller._id)})
const allPromises = data.map(async (rowData)=>{
      let category_id = undefined;
      let subcategory_id = undefined;
      let childcategory_id = undefined;
      let brand_id = "6805d10fd5966a70d5d7efa0";

 
      
      let mainImage = null; 
      let errors = {};
      let keyFeature = [];
      let dynamicField = [];

      if(!rowData["Category"]){
        errors.Category = `Category is required`; 
      }
      // check brand 
      if(!rowData["Brand Name"]){
          errors.brand = `Brand is required.`; 
        }



        if(rowData["Child Category"]){
        const cateData = await ChildCategory.findOne({childCategoryName:rowData["Child Category"]}).select("_id subCategoryId category_id").lean();
         if(!cateData){
          errors.childCategory = `Invalid Child Category.`; 
        }
        childcategory_id = cateData?._id
        subcategory_id = cateData?.subCategoryId
        category_id = cateData?.category_id
        dynamicField  = await productDynamicFieldModel.find({category_id:cateData?.category_id});


      }else if(rowData["Sub Category"]){
        const categoryData = await subCategory.findOne({subCategoryName:rowData["Sub Category"]}).select("_id category_id").lean();
         if(!categoryData){
          errors.SubCategory = `Invalid Sub Category.`; 
        }
        subcategory_id = categoryData?._id
        category_id = categoryData?.category_id
        dynamicField  = await productDynamicFieldModel.find({category_id:categoryData?.category_id});
        
      }else if(rowData["Category"]){
        const categoryData = await Category.findOne({name:rowData["Category"]}).select("_id").lean();
        if(!categoryData){
          errors.Category = `Invalid Category.`; 
        }
        category_id = categoryData._id
        dynamicField  = await productDynamicFieldModel.find({category_id:categoryData?._id});
      }

     

      
      

      if(rowData["Brand Name"]){
        const sellerBrand = await brandSellerModel.findOne({name:rowData["Brand Name"]}).lean();
         if(!sellerBrand){
          errors.brandName = `Invalid brand name.`; 
        }else{
          if(sellerBrand.status != 1){
            errors.brandName = `${rowData["Brand Name"]} is not approved.`;
          }else{
            const brand = await brandModel.findOne({name:rowData["Brand Name"]}).lean(); 
            brand_id = brand._id
          }
        }
      }

      // image validation
       if(!rowData["Main Image"]){
          errors.main_image = `Main Image required`; 
        }

        if(!rowData["Image_1"]){
          errors.image_1 = `Image 1 required`; 
        }
        if(!rowData[`Key Features 1`]){
          errors.key_feature_1 = `Key Features 1 is required.`; 
        }

        if(!rowData[`Product Name`]){
          errors.product_name = `Product name is required.`; 
        }

        if(!rowData[`Product Description`]){
          errors.product_description = `Product Description is required.`; 
        }
        if(!rowData[`Search Keywords`]){
          errors.search_keywords = `Search Keywords is required.`; 
        }

         if(!rowData[`Manufacture Part Number`]){
          errors.manufacture_part_number = `Manufacture Part Number is required.`; 
        }



        if(rowData[`Product Length`] && !rowData[`Product Length Unit`]){
          errors.ProductLengthUnit = `Product Length Unit is required.`; 
        }

        if(rowData[`Product Width`] && !rowData[`Product Width Unit`]){
          errors.ProductWidthUnit = `Product Width Unit is required.`; 
        }

         if(rowData[`Product Height`] && !rowData[`Product Height Unit`]){
          errors.ProductHeightUnit = `Product Height Unit is required.`; 
        }

        if(rowData[`Product Weight`] && !rowData[`Product Weight Unit`]){
          errors.ProductWeightUnit = `Product Weight Unit is required.`; 
        }
        
         if(rowData[`Package Length`] && !rowData[`Package Length Unit`]){
          errors.ProductWeightUnit = `Package Length Unit is required.`; 
        }

         if(rowData[`Package Width`] && !rowData[`Package Width Unit`]){
          errors.PackageWidthUnit = `Package Width Unit is required.`; 
        }

         if(rowData[`Package Height`] && !rowData[`Package Height Unit`]){
          errors.PackageHeightUnit = `Package Height Unit is required.`; 
        }
         if(rowData[`Package Weight`] && !rowData[`Package Weight Unit`]){
          errors.PackageWeightUnit = `Package Weight Unit is required.`; 
        }




        const shippingProvider = ["Merchant"];
        const fulfillmentBy = ["Seller"];
        const heightOption = ["Centimetres", "Metres", "Inches", "Feet", "Yards"];
        const wightOption = ["Milligrams", "Grams", "Kilograms", "Ounces", "Pounds"];
        const variantList = {};
        if(rowData["Product Length Unit"] && !heightOption.includes(rowData["Product Length Unit"])){
          errors.ProductLengthUnit = `Product Length Unit enter valid value.`; 
        }

         if(rowData["Product Width Unit"] && !heightOption.includes(rowData["Product Width Unit"])){
          errors.ProductWidthUnit = `Product Width Unit enter valid value.`; 
        }

         if(rowData["Product Height Unit"] && !heightOption.includes(rowData["Product Height Unit"])){
            errors.ProductHeightUnit = `Product Height Unit enter valid value.`; 
          }

           if(rowData["Product Weight Unit"] && !wightOption.includes(rowData["Product Weight Unit"])){
              errors.ProductWeightUnit = `Product Weight Unit enter valid value.`; 
            }

            if(rowData["Package Length Unit"] && !heightOption.includes(rowData["Package Length Unit"])){
              errors.PackageLengthUnit = `Package Length Unit enter valid value.`; 
            }

             if(rowData["Package Width Unit"] && !heightOption.includes(rowData["Package Width Unit"])){
              errors.PackageWidthUnit = `Package Width Unit enter valid value.`; 
            }

              if(rowData["Package Height Unit"] && !heightOption.includes(rowData["Package Height Unit"])){
              errors.PackageHeightUnit = `Package Height Unit enter valid value.`; 
            }

             if(rowData["Package Weight Unit"] && !wightOption.includes(rowData["Package Weight Unit"])){
              errors.PackageWeightUnit = `Package Weight Unit enter valid value.`; 
            }
             
        
        if(!fulfillmentBy.includes(rowData["Fullfilment By"])){
          errors.fulfillmentBy = `fulfillmentBy enter correct value.`; 
        }

        if(!shippingProvider.includes(rowData["Shipping Provider"])){
          errors.shippingProvider = `shippingProvider enter correct value.`;
        }

      

         if (rowData[`Variant`] == "Yes" && !rowData[`Choose Variant`]) {
            errors.ChooseVariant = `Choose Variant is required`; 
          }
          if (rowData[`Choose Variant`]) {
            const selectedVariant = rowData[`Choose Variant`].split(" and ");
            
            selectedVariant.forEach((variantField)=>{ 
              if(!(rowData[variantField])){
                  errors[slugify(variantField)] = `${variantField} is required.`;
              } 
              variantList[variantField] = rowData[variantField]; 
            })
             
          }

 
           
        // variant field validation ========================
          if(!rowData[`Group Id`]){
            errors.GroupId = `Group Id is required.`; 
          }
          if(!rowData[`SKU`]){
            errors.SKU = `SKU is required.`; 
          }

          if(!rowData[`Listing Status`]){
            errors.ListingStatus = `Listing Status is required.`; 
          }

          if(rowData[`Listing Status`] && !['Active', "Draft"].includes(rowData[`Listing Status`])){
            errors.ListingStatus = `Listing Status enter correct value.`; 
          }

         if (!rowData[`MSRP`] || isNaN(rowData[`MSRP`])) {
            errors.MSRP = `Enter valid msrp.`; 
          }

           if (!rowData[`Consumer Sale Price`] || isNaN(rowData[`Consumer Sale Price`])) {
            errors.ConsumerSalePrice = `Enter valid consumer Sale Price.`; 
          }

           if (!rowData[`Business Sale Price`] || isNaN(rowData[`Business Sale Price`])) {
            errors.BusinessSalePrice = `Business Sale Price Sale Price.`; 
          }

          if (!rowData[`Stock`] || isNaN(rowData[`Stock`])) {
            errors.Stock = `Enter valid Stock.`; 
          }

           if (!rowData[`Currency`] &&  ["USD", "INR"].includes(rowData[`Currency`])) {
            errors.Currency = `Enter valid currency.`; 
          }

           if (!rowData[`Variant`] &&  ["Yes", "No"].includes(rowData[`Variant`])) {
            errors.variant = `Select valid value`; 
          }

            if (!rowData[`Variant Image`] ||  !["Yes", "No"].includes(rowData[`Variant Image`])) {
            errors.VariantImage = `Select valid variant image value.`; 
          }

          

           if (rowData[`Variant Image`] == "Yes" &&  !rowData[`variant_image_1`]) {
            errors.variant_image_1 = `variant image 1 is required.`; 
          }

           if (!rowData["Variant"]  ||  !["Yes", "No"].includes(rowData["Variant"])) {
              errors.variant = `Select variant Yes and No`; 
            }


          // compliance field validation
           if (!rowData[`Contains Liquid Contents`] ||  !["Yes", "No"].includes(rowData[`Contains Liquid Contents`]) ) {
            errors.ContainsLiquidContents = `Enter  valid Contains Liquid Contents value.`; 
          }

           if (!rowData[`Contains Liquid Contents`] == "Yes" && !rowData[`Liquid Volume`] ) {
            errors.LiquidVolume = `Liquid Volume required.`; 
          }

           if (!rowData[`Contains Liquid Contents`] == "Yes" && !rowData[`Liquid Volume Unit`] ) {
            errors.LiquidVolumeUnit = `Liquid Volume Unit.`; 
          }

           if (!rowData[`Is The Item Heat Sensitive`] || !["Yes", "No"].includes(rowData[`Is The Item Heat Sensitive`]) ) {
            errors.IsTheItemHeatSensitive = `Select valid Is The Item Heat Sensitive value.`; 
          }

           if (rowData[`Is The Item Heat Sensitive`] == "Yes" && !rowData[`Heat Sensitive Instructions`] ) {
            errors.HeatSensitiveInstructions = `Heat Sensitive Instructions is required.`; 
          }

          

           if (!rowData[`Is The Liquid Product Double Sealed`] || !["Yes", "No"].includes(rowData[`Is The Liquid Product Double Sealed`]) ) {
            errors.IsTheLiquidProductDoubleSealed = `select valid Is The Liquid Product Double Sealed value.`; 
          }
          
           if (rowData[`Is The Liquid Product Double Sealed`] == "Yes" && !rowData[`Product Double Sealed Instructions`] ) {
            errors.ProductDoubleSealedInstructions = `Product Double Sealed Instructions is required.`;   
          }

           if (!rowData[`Dangerous Goods Regulations`] ) {
            errors.DangerousGoodsRegulations = `Select valid Dangerous Goods Regulations value`; 
          }

           if (!rowData[`Safety Warning`] ) {
            errors.DangerousGoodsRegulations = `Safety Warning is required`; 
          }

          if (!rowData[`Has Written Warranty`] ) {
            errors.HasWrittenWarranty = `Has Written Warranty is required`; 
          }

           if (!rowData[`Product Is Or Contains This Battery Type`] || !["Yes", "No"].includes(rowData[`Product Is Or Contains This Battery Type`]) ) {
            errors.ProductisorContainsthisBatteryType = `Select valid Product is or Contains this Battery Type value`; 
          }

        

           if (rowData[`Product Is Or Contains This Battery Type`] == "Yes" &&  !["Yes", "No"].includes(rowData[`Are batteries included`]) ) {
            errors.Arebatteriesincluded = `Select valid Are batteries included value`; 
          }

           if (rowData[`Are batteries included`] == "Yes" && ! rowData[`Battery Cell Composition`]) {
            errors.BatteryCellComposition = `Select valid Battery Cell Composition value`; 
          }


          
         
 


       let global = [];
       if(Object.keys(errors).length <= 0){ 
        // upload image when error not found.
          for (let i = 0; i < imageFields.length; i++) {
              const field = imageFields[i];
              if (rowData[field]) {
                const imageUrl = rowData[field];
                const { thumb, medium, large } = outputPaths[i]; 

                const sizesAndFolders = [
                  { width: 400, height: 400, outputFolder: thumb, outputFileName: 'image_small.jpg' },
                  { width: 1100, height: 1100, outputFolder: medium, outputFileName: 'image_medium.jpg' },
                  { width: 1600, height: 1600, outputFolder: large, outputFileName: 'image_large.jpg' },
                ];

                const imageName = await downloadAndResizeMultiple(imageUrl, sizesAndFolders);
                global[`image_${i + 1}_name`] = imageName;  
              }
            }
      }
 

      
        if(Object.keys(errors).length <= 0 && rowData["Main Image"]){
             const imageUrl = rowData["Main Image"];
             const thumb = main_thumb_img_path;
             const medium = main_medium_img_path;
             const large = main_large_img_path;
              const sizesAndFolders = [
              { width: 400, height: 400, outputFolder: thumb, outputFileName: 'image_small.jpg' },
              { width: 1100, height: 1100, outputFolder: medium, outputFileName: 'image_medium.jpg' },
              { width: 1600, height: 1600, outputFolder: large, outputFileName: 'image_large.jpg' },
            ];
            mainImage = await downloadAndResizeMultiple(imageUrl, sizesAndFolders);

        }

 

        // Dynamic field
        let dynamicFieldInsertData = [];
        if(dynamicField.length){
          dynamicField.forEach((item)=>{

             if (!rowData[item.field_name] && item.required === "Yes") {
                    errors[`${item.field_name.toLowerCase().replace(/ /g, '_')}`] = `${item.field_name} is required.`;
                }  
              const data = {
                  field_name: item.field_name,
                  field_value: rowData[item.field_name]
              }
              dynamicFieldInsertData.push(data)
          })
        }

         
        for(let i = 1; i<=5 ; i++){
            if(rowData[`Key Features ${i}`]){
              keyFeature.push(rowData[`Key Features ${i}`]);
            }
        }
        

      const singleRowData = {

        seller_id : seller._id, 
        category_id : category_id,
        subcategory_id : subcategory_id,
        childcategory_id : childcategory_id, 
        brand_id : brand_id,
        groupId : rowData["Group Id"],

        product_name : rowData["Product Name"] || "",
        slug : rowData["Product Name"]?slugify(rowData["Product Name"]):"",
        product_description : rowData["Product Description"],
        key_feature : keyFeature || [],
        search_keywords : rowData["Search Keywords"],
        target_gender : rowData["Target Gender"],
        age_range : rowData["Age Range Description"],
        material : rowData["Material"],
        model_name : rowData["Model Name"],
        model_number : rowData["Model Number"],
        manufacture_part_number : rowData["ManufacturePart Number"],
        safety_warning : rowData["Safety Warning"],
        country_of_origin : rowData["Country Of Origin"],
        manufacturer_details : rowData["Manufacturer"],
        packer_details : rowData["Packer Contact Information"],
        importer_details : rowData["Importer Details"],

        main_image : mainImage || null,
        image_1 : global.image_1_name || null,
        image_2 : global.image_2_name || null,
        image_3 : global.image_3_name || null,
        image_4 : global.image_4_name || null,
        image_5 : global.image_5_name || null,
        image_6 : global.image_6_name || null,
        image_7 : global.image_7_name || null,
        listingStatus : 1,
        save_as_draft : "0", 
        shippingProvider : rowData["Shipping Provider"],
        fulfillmentBy : rowData["Fullfilment By"],
        taxCode : rowData["Tax Code"] || undefined,
        taxRate : rowData["Tax Rate"] || undefined,
        // currency : header["Product"],
        dynamicFields : dynamicFieldInsertData,


        // packageBreadth : header["Product"],
        product_length : rowData["Product Length"],
        product_length_unit : rowData["Product Length Unit"],
        product_width : rowData["Product Width"],
        product_width_unit : rowData["Product Width Unit"],
        product_weight : rowData["Product Weight"],
        product_weight_unit : rowData["Product Weight Unit"],
        packageLength : rowData["Package Length"],
        packageLengthUnit : rowData["Package Length Unit"],
        packageWidth : rowData["Package Width"],
        packageWidthUnit : rowData["Package Width Unit"],
        packageHeight : rowData["Package Height"],
        packageHeightUnit : rowData["Package Height Unit"],
        
        color : rowData["Product Color"],
        size : rowData["Product Zize"],
        style : rowData["Product Style"],
        pettern : rowData["Pattern"],
        unit_coun : rowData["Unit Count"],
        unit_count_type : rowData["Unit Count Type"],
        item_type_name : rowData["Item Type Name"],
        recommanded_use : rowData["Recommended Use"],

        packageWeight : rowData["Package Weight"],
        packageWeightUnit : rowData["Package Weight Unit"],
        productHeight : rowData["Product Height"],
        productHeightUnit : rowData["Product Height Unit"],
        numberOfItem : rowData["Number Of Item"], 
        variant: rowData["Variant"]
      }

      const groupId = rowData["Group Id"] ? formatString(rowData["Group Id"]): "";
      let productId = "";

      if(Object.keys(errors).length <= 0){ 
        // insert product when no error
          if(rowData["Group Id"] && Object.keys(groups).length > 0 && Object.keys(groups).includes(groupId) ){
              productId = groups[groupId]; 
            }else{
                // const existProductGroup = new productModel.findOne({groupId:rowData["Group Id"]});
                 
                const product = new productModel(singleRowData); 
                const responseData = await product.save();
                productId = product._id;
                groups[groupId] = product._id;
            }
      }
      
 

      const complianceData = {
        product_id                          :         productId,
        containsLiquidContents              :         rowData["Contains Liquid Contents"],
        liquidVolume                        :         rowData["Liquid Volume"],
        liquidVolumeUnit                    :         rowData["Liquid Volume Unit"],
        isTheItemHeaSensitive               :         rowData["Is The Item Heat Sensitive"],
        isTheItemHeaSensitiveInstructions   :         rowData["Heat Sensitive Instructions"],
        isTheLiquidProductDoubleSealed      :         rowData["Is The Liquid Product Double Sealed"],
        isTheLiquidProductDoubleSealedInstructions :  rowData["Product Double Sealed Instructions"],
        dangerousGoodsRegulations           :         rowData["Dangerous Goods Regulations"],
        safetyWarning                       :         rowData["Safety Warning"],
        hasWrittenWarranty                  :         rowData["Has Written Warranty"],
        ProductIsOrContainsAnElectronicComponent :    rowData["Product Is Or Contains An Electronic Component"],
        productIsOrContainsThisBatteryType  :         rowData["Product Is Or Contains This Battery Type"],
        areBatteriesIncluded                :         rowData["Are Batteries Included"],
        batteryCellComposition              :         rowData["Battery Cell Composition"]
      };

      if(Object.keys(errors).length <= 0){ 
        // save compliance data if not error found
      const complianceDataObj = new productOtherDetailModel(complianceData); 
      complianceDataObj.save();
      }

   

          let variantImg = [];
          if(Object.keys(errors).length <= 0){ 
            // upload image when error note found
              for (let i = 0; i < variantImageFields.length; i++) {
                  const field = variantImageFields[i];
                  if (rowData[field]) {
                    const imageUrl = rowData[field];
                    const { thumb, medium, large } = variantOutputPaths[i];

                    const sizesAndFolders = [
                      { width: 400, height: 400, outputFolder: thumb, outputFileName: 'image_small.jpg' },
                      { width: 1100, height: 1100, outputFolder: medium, outputFileName: 'image_medium.jpg' },
                      { width: 1600, height: 1600, outputFolder: large, outputFileName: 'image_large.jpg' },
                    ];

                    const imageName = await downloadAndResizeMultiple(imageUrl, sizesAndFolders);
                    variantImg[`image_${i + 1}_name`] = imageName;  
                  }
                }
          }

            const sinNumber = await newSinNumber();
            const variantMultipleData = {
            seller_id                     : seller._id,
            product_id                    : productId,
            sku                           : rowData["SKU"],
            sin                           : sinNumber,
            listingStatus                 : rowData["Listing Status"] == "Active"? 1 : 0,
            isProcessing                  : "Processing",
            msrp                          : rowData["MSRP"],
            consumerSalePrice             : rowData["Consumer Sale Price"],
            businessSalePrice             : rowData["Business Sale Price"],
            currency                      : rowData["Currency"], 
            stock                         : rowData["Stock"],
            customAttributes              : variantList,
            discount_type                 : rowData["Quantity Base Discount Type"],
            withImage                     : rowData["Variant Image"],
            image_1                       : variantImg.image_1_name || null,
            image_2                       : variantImg.image_2_name || null,
            image_3                       : variantImg.image_3_name || null,
            image_4                       : variantImg.image_4_name || null,
            image_5                       : variantImg.image_5_name || null,
            image_6                       : variantImg.image_6_name || null,
            image_7                       : variantImg.image_7_name || null,
            manual_product_id             : rowData["Product Id"],
            manual_product_id_type        : rowData["ProductId Type"],
            conditionType                 : rowData["Condition Type"],
            expireDate                    : rowData["Expire Date"], 
        }


        let variandId = null;
         if(Object.keys(errors).length <= 0){ 
          // insert variant when error not found
          const variantObj = new productVariantModel(variantMultipleData); 
          const variantresponse = await variantObj.save();
          variandId = variantObj._id
         }
 
          const thresholds = [1, 2, 3, 4, 5]; 
          const thresholdData = thresholds.map(level => {
          const unit = rowData[`Threshold Level ${level} Unit`];
          const discount = rowData[`Threshold Level ${level} Discount`];
          
          if (unit && discount) {
            return {
              seller_id   : seller._id,
              product_id  : productId,
              variant_id  : variandId,
              unit,
              discount
            };
          }

          return null;
        }).filter(Boolean); 

        if (Object.keys(errors).length <= 0 && thresholdData.length) {
          // insert threshold when error not found
          await variantThresholdSchemaModal.insertMany(thresholdData);
        }
 
      indexNumber++;
        if (Object.keys(errors).length > 0){ 

            const variantData = {
                  ...variantMultipleData,
                        image_1 : rowData["variant_image_1"] || "",
                        image_2 : rowData["variant_image_2"] || "",
                        image_3 : rowData["variant_image_3"] || "",
                        image_4 : rowData["variant_image_4"] || "",
                        image_5 : rowData["variant_image_5"] || "",
                        image_6 : rowData["variant_image_6"] || "",
                        image_7 : rowData["variant_image_7"] || "",
                }

              const productErrorData = {
                  ...singleRowData,
                        image_image : rowData["Main Image"] || "",
                        image_1 : rowData["Image_1"] || "",
                        image_2 : rowData["Image_1"] || "",
                        image_3 : rowData["Image_1"] || "",
                        image_4 : rowData["Image_1"] || "",
                        image_5 : rowData["Image_1"] || "",
                        image_6 : rowData["Image_1"] || "",
                        image_7 : rowData["Image_1"] || "",
                }

                const  errorData = {
                  ...productErrorData,
                  sn:indexNumber,
                  variantData:variantData,
                  complianceData:complianceData,
                  thresholdData:thresholdData,
                  errorsList:errors
                };

               
              // insert error data
                const errorproduct = await errorProductModal.create(errorData);
                
          }

      
          
    });
    const results = await Promise.all(allPromises);
    return responseFun(true, {message: 'Products imported successfully',},200);
 
     
  } catch (error) {
    console.error('Upload error:', error);
    return responseFun(false, {message: error.message},200);
  }
}