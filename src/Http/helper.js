import { NextResponse } from "next/server";  
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
// const crypto = require('crypto');
// require('dotenv').config();


const algorithm = 'aes-256-cbc';  
const secretKey = process.env.SECRET_KEY || "12hfyutrferhji876tyhgfrtuioldsde";  
const iv = crypto.randomBytes(16);  

export function encryptText(text) {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return {
      iv: iv.toString('hex'),
      data: encrypted.toString('hex')
  };
}


export const fetcher = (url) => fetch(url).then((res) => res.json());


export function decryptText(encrypted) {
 
  const decipher = crypto.createDecipheriv(
      algorithm,
      Buffer.from(secretKey),
      Buffer.from(encrypted.iv, 'hex')  
  );
  const decrypted = Buffer.concat([
      decipher.update(Buffer.from(encrypted.data, 'hex')),  
      decipher.final()
  ]);
  return decrypted.toString();  
}

export const baseUrl = process.env.BASE_URL || "http://localhost:3000/";
export const websiteUrl = process.env.SELLORA_WEB_URL ||  "https://sellora.com/"; 

// product image Path
export const main_thumb_img_path = "uploads/product/main_image/thumb/"
export const main_medium_img_path = "uploads/product/main_image/medium/"
export const main_large_img_path = "uploads/product/main_image/large/"

export const product_thumb_img_path1 = "uploads/product/img1/thumb/"
export const product_medium_img_path1 = "uploads/product/img1/medium/"
export const product_large_img_path1 = "uploads/product/img1/large/"

export const product_thumb_img_path2 = "uploads/product/img2/thumb/"
export const product_medium_img_path2 = "uploads/product/img2/medium/"
export const product_large_img_path2 = "uploads/product/img2/large/"

export const product_thumb_img_path3 = "uploads/product/img3/thumb/"
export const product_medium_img_path3 = "uploads/product/img3/medium/"
export const product_large_img_path3 = "uploads/product/img3/large/"

export const product_thumb_img_path4 = "uploads/product/img4/thumb/"
export const product_medium_img_path4 = "uploads/product/img4/medium/"
export const product_large_img_path4 = "uploads/product/img4/large/"

export const product_thumb_img_path5 = "uploads/product/img5/thumb/"
export const product_medium_img_path5 = "uploads/product/img5/medium/"
export const product_large_img_path5 = "uploads/product/img5/large/"

export const product_thumb_img_path6 = "uploads/product/img6/thumb/"
export const product_medium_img_path6 = "uploads/product/img6/medium/"
export const product_large_img_path6 = "uploads/product/img6/large/"

export const product_thumb_img_path7 = "uploads/product/img7/thumb/"
export const product_medium_img_path7 = "uploads/product/img7/medium/"
export const product_large_img_path7 = "uploads/product/img7/large/"

//  variant image path 
export const variant_thumb_img_path1 = "uploads/variant/img1/thumb/"
export const variant_medium_img_path1 = "uploads/variant/img1/medium/"
export const variant_large_img_path1 = "uploads/variant/img1/large/"

export const variant_thumb_img_path2 = "uploads/variant/img2/thumb/"
export const variant_medium_img_path2 = "uploads/variant/img2/medium/"
export const variant_large_img_path2 = "uploads/variant/img2/large/"

export const variant_thumb_img_path3 = "uploads/variant/img3/thumb/"
export const variant_medium_img_path3 = "uploads/variant/img3/medium/"
export const variant_large_img_path3 = "uploads/variant/img3/large/"

export const variant_thumb_img_path4 = "uploads/variant/img4/thumb/"
export const variant_medium_img_path4 = "uploads/variant/img4/medium/"
export const variant_large_img_path4 = "uploads/variant/img4/large/"

export const variant_thumb_img_path5 = "uploads/variant/img5/thumb/"
export const variant_medium_img_path5 = "uploads/variant/img5/medium/"
export const variant_large_img_path5 = "uploads/variant/img5/large/"

export const variant_thumb_img_path6 = "uploads/variant/img6/thumb/"
export const variant_medium_img_path6 = "uploads/variant/img6/medium/"
export const variant_large_img_path6 = "uploads/variant/img6/large/"

export const variant_thumb_img_path7 = "uploads/variant/img7/thumb/"
export const variant_medium_img_path7 = "uploads/variant/img7/medium/"
export const variant_large_img_path7 = "uploads/variant/img7/large/"



export const isEmpty = (value) => !value || value.trim() === '';

export function formatString(input) {
  return input
    .toLowerCase()            
    .replace(/[\s-]+/g, '_');  
}

// export function testEmail(email){
//   const valid =  !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
// }

// export function testMobile(mobile) { 
//     const isValid = /^[0-9]{10}$/.test(mobile);
//     return isValid;
//   }

export function isValidEmail(email) {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  return regex.test(email);
}

export function getPricingLabel(price) {
  return price.toLocaleString("en-US", { style: "currency", currency: "USD" });
}


  export function sendSMSFunction(templeteId, message){

    return true
  }

  // export const dynamincOtp =(from, to)=>{
  //       let otp= Math.floor(from + Math.random() * to);
  //       if(Number(to) <= Number(otp)){
  //         dynamincOtp(from, to)
  //       }
  //       return otp;
  //   }

export const dynamincOtp = (from, to) => {
  return Math.floor(100000 + Math.random() * 900000);
};

    export const responseFun=(status = false, data = null, status_code = 500)=> {
        return NextResponse.json(
          { status, data },
          { status: status_code }
        )
    }


    export const decodeJwt = (token) => {
        try {
          // Decode the JWT without verifying the signature
          const decoded = jwt.decode(token);
          return decoded;
        } catch (error) {
          console.error('Error decoding JWT:', error);
          return null;
        }
      };
   
export const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export function slugify(text) {
  return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') 
      .replace(/[^\w\-]+/g, '') 
      .replace(/\-\-+/g, '-');  
}

export function slugToTitle(slug) {
  return slug
    .replace(/-/g, ' ')             
    .replace(/\b\w/g, char => char.toUpperCase()); 
}
export const dateConvertInDateTime = (dateString) => {
  const date = new Date(dateString);

  const options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date); 
  return formattedDate;
};


export const dateFormat=(requestDateFormate) =>{

  const fullDate = new Date(requestDateFormate);
  const date = fullDate.getDate()
  const month = fullDate.getMonth();
  const year = fullDate.getFullYear();

  return `${date}/${month.toString().padStart(2,"0")}/${year}`
}


export function convertTo12Hour(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  return `${String(hours12).padStart(2, "0")}:${minutes} ${period}`;
}


export function getVariantAttribute(value){
  const currArray = {
    'colorId':'Color', 
    'sizeId':'Size',
    'itemBreadthId':'Breadth',
    'itemHeightId':'Height',
    'itemLengthId':'Length',
    'itemWeightId':'Weight',
    'packageBreadthId':'Package Breadth',
    'packageHeightId':'Package Height',
    'packageLengthId':'Package Length',
    'packageWeightId':'Package Weight',
  };
  return currArray[value];
}



export const createFormData =(data)=>{
  const formData = new FormData();
    Object.entries(data).forEach(([key, value])=>{
      if(value instanceof File){
        formData.append(key, value);
      }else if(typeof value =="object" && value != ""){
        formData.append(key, JSON.stringify(value))
      }else{
        formData.append(key, value);
      }
    })
    return formData
 }



 export const monthNames = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];
 export function dateValidateConverter(date){
  const currentDate = new Date(date);
  // const todayDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate() }`; 
  const formatedDate = `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
  return formatedDate;
}

export function variantArrayFormat(variantList){
  const uniquKeys = [];
  variantList.forEach((variant) => {
    if(!variant.customAttributes){
      return []
    }
      Object.keys(variant.customAttributes).forEach((variantItem)=>{ 
        if(!uniquKeys.includes(variantItem) && variant.customAttributes[variantItem] != ""){
          uniquKeys.push(variantItem)
        } 
      })
  })

  const attributeArr = {}; 
  if (uniquKeys.length > 0) {
    uniquKeys.forEach((keyName) => {
      variantList.forEach((variant) => {
        // const variantValue = variant.customAttributes[keyName]; 
        const newValue = variant.customAttributes[keyName]; 
        const variantValue = {
                    _id : variant._id,
                    productId : variant.product_id,
                    varientId : variant._id,
                    name:  keyName,
                    value:newValue,
                    withImage: variant.withImage,
                    image_1: variant.image_1,
                    image_2: variant.image_2,
                    image_3: variant.image_3,
                    image_4: variant.image_4,
                    businessSalePrice:variant.businessSalePrice,
                    consumerSalePrice:variant.consumerSalePrice,
                    currency:variant.currency,
                    fulfillmentBy:variant.fulfillmentBy,
                    msrp:variant.msrp,
                    shippingProvider:variant.shippingProvider,
                    sku:variant.sku,
                    stock:variant.stock,
                    taxCode:variant.taxCode,
                    taxRate:variant.taxRate
                }; 

                if (!attributeArr[keyName]) {
                  attributeArr[keyName] = [];
                } 
                const filterOldAddedData = attributeArr[keyName].some((dataItem) => dataItem.value === newValue); 
                if (!filterOldAddedData) {
                  attributeArr[keyName].push(variantValue);
                }
      });
    });
  }

 
  return attributeArr

} 

export function currencyCode(currencyCode){
  if(currencyCode=='USD'){
     return "$";
  }
  return "$";
}



export function getOffPrecentage(oldPrice, currentPrice){ 
  const onePercentage = oldPrice/100; 
  const offAmount = oldPrice-currentPrice;
  const offperCentage = offAmount/onePercentage;
  return offperCentage;
}

export function getPrecentageAmount(amount, percentage){ 
  const onePercentage = amount/100; 
  const offAmount = onePercentage*percentage; 
  return offAmount;
}

export function getStatus(status){
  const statusString = {
    '0': 'Deactived',
    '1': 'Actived',
    '2': 'Draft',
    '3': 'Archived',
    '4': 'Deleted',
  };

  return statusString[status];
}

export function capitalizeLetter(string) {
  if (!string) return ""; 
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getSizeName(size) {
  const sizeString = {
      'M': 'Medium',
      'L': 'Large',
      'S': 'Small',
      'XL': 'Extra Large',
      'XS': 'Extra Small',
      'XXL': 'Double Extra Large',
  };

  return sizeString[size] || 'Unknown Size';  
}

export function showNotification(message){

  let containerElement = document.querySelector('.popup-container');

  if (!containerElement) {
    containerElement = document.createElement('div');
    containerElement.classList.add('popup-container');
    document.body.append(containerElement);
  } 

  let popupElement = document.createElement('div');
  popupElement.classList.add('popup'); let textElement = document.createElement('div');
  textElement.classList.add('popup-text');
  textElement.innerHTML = message;

  popupElement.appendChild(textElement);
  containerElement.appendChild(popupElement);

  setTimeout(() => {
    popupElement.remove();
  }, 3000);
}

 

export function getBasePrice(amountIncludingGST, tax){
 

const basePrice = amountIncludingGST / (1 + tax / 100);
return basePrice
}

export function discountPrice(priceAmount, discount, discountType="percentage"){

  if(discountType == "percentage"){
    const discountAmount = (priceAmount/100) *discount;
    return (priceAmount - discountAmount)
  }else{
    return (priceAmount - discount) 
  }

}


export function impactPriceAndPercentage(currentPrice, views, clicks) {
  if (!views || views === 0) {
    return {
      impactPrice: currentPrice,
      impactPercentage: 0,
    };
  }

  const ctr = clicks / views; // Click-through rate
  let dropPercentage = 0;
  if (ctr >= 2) {
    dropPercentage = 0; // Good CTR, no drop
  } else if (ctr > 1 && ctr < 2) {
    dropPercentage = 15; // Moderate CTR, moderate drop
  } else if (ctr <= 1) {
    dropPercentage = 20; // Poor CTR, high drop
  }
  const dropPrice = ( currentPrice * ( dropPercentage / 100 ) ) ; 
  const impactPrice =  currentPrice - dropPrice;
  const impactPercentage =  ( ( (currentPrice - impactPrice) / currentPrice) * 100)
    

  return {
    impactPrice,
    impactPercentage,
  };
}


// export function calculateListingQuality(product) {
//   let score = 0;
//      const issues = [];
//   // 1. Title Quality (Max: 10)
//   if (product.product_name?.length >= 20){
//     score += 10;
//   } else if (product.product_name?.length >= 10){
//      score += 7;
//     }
//     else if (product.product_name) {
//       score += 3;
//     }

//   // 2. Description Quality (Max: 15)
//   if (product.product_description?.length > 200) score += 15;
//   else if (product.product_description?.length > 100) score += 10;
//   else if (product.product_description?.length > 50) score += 5;

//   // 3. Images (Max: 15)
//   const baseImages = [
//     product.main_image,
//     product.image_1,
//     product.image_2,
//     product.image_3,
//     product.image_4,
//     product.image_5,
//     product.image_6,
//     product.image_7,
//   ].filter(Boolean).length;

//   const variantImages = product.variant
//     ? [
//         product.variant.image_1,
//         product.variant.image_2,
//         product.variant.image_3,
//         product.variant.image_4,
//         product.variant.image_5,
//         product.variant.image_6,
//         product.variant.image_7,
//       ].filter(Boolean).length
//     : 0;

//   const totalImages = baseImages + variantImages;

//   if (totalImages >= 7) score += 15;
//   else if (totalImages >= 4) score += 10;
//   else if (totalImages >= 2) score += 6;
//   else if (totalImages === 1) score += 3;

//   // 4. Category & Subcategory (Max: 5)
//   if (product.category_id) score += 3;
//   if (product.subcategory_id || product.childcategory_id) score += 2;

//   // 5. Variant & Stock (Max: 10)
//   if (product.variant) {
//     score += 5;
//     if (product.variant.stock && Number(product.variant.stock) > 0) score += 5;

//     // 6. Pricing (Max: 5)
//     if (product.variant.consumerSalePrice && Number(product.variant.consumerSalePrice) > 0) {
//       score += 5;
//     }
//   }

//   // 7. Compliance fields (Old compliance + new compliance) (Max: 10)
//   let complianceScore = 0;

//   if (product.safety_warning && product.safety_warning.trim().toLowerCase() !== "n/a" && product.safety_warning.trim().toLowerCase() !== "not applicable") complianceScore++;
//   if (product.country_of_origin) complianceScore++;
//   if (product.manufacturer_details) complianceScore++;
//   if (product.packer_details) complianceScore++;
//   if (product.importer_details) complianceScore++;

//   if (product.compliance) {
//     complianceScore += 5;
//   }

//   if (complianceScore > 10) complianceScore = 10;

//   score += complianceScore;

//   const MAX_POSSIBLE_SCORE = 70; // 10 + 15 + 15 + 5 + 10 + 5 + 10

//   const percentage = Math.round((score / MAX_POSSIBLE_SCORE) * 100);

//   let quality = "Poor";
//   if (percentage >= 80) quality = "Excellent";
//   else if (percentage >= 50) quality = "Good";
//   else if (percentage >= 30) quality = "Average";

//   return {
//     score: percentage,
//     quality,
//   };
// }


// Section	Max Points
// Title	10
// Description	15
// Images	15
// Category & Subcategory	5
// Variant & Stock	15
// Pricing	10
// Compliance	30
// TOTAL	100

export function calculateListingQuality(product) {
  let totalScore = 0;
  const issues = [];
  const sectionScores = {
    Title: 0,
    Description: 0,
    Images: 0,
    Category: 0,
    VariantAndStock: 0,
    Pricing: 0,
    Compliance: 0,
    search_keywords:0,
    key_feature:0
  };

  // --------------------------
  // 1. Title (max 10)
  // --------------------------
  if (product.product_name) {
    const titleLength = product.product_name.length;
    if (titleLength > 100) {
      sectionScores.Title = 0;
      issues.push({
        section: "Product Name",
        message: "Product name is too long. It should be 100 characters or fewer.",
        score: 0,
        sign: false
      });
    } else if (titleLength < 10) {
      sectionScores.Title = 3;
      issues.push({
        section: "Product Name",
        message: "Product name is too short. It should be at least 10 characters.",
        score: 3,
        sign: false
      });
    } else if (titleLength < 20) {
      sectionScores.Title = 7;
      issues.push({
        section: "Product Name",
        message: "Product name is acceptable but could be longer (20+ characters preferred).",
        score: 7,
        sign: true
      });
    } else {
      sectionScores.Title = 10;
      issues.push({
        section: "Product Name",
        message: "Product name is optimal length.",
        score: 10,
        sign: true
      });
    }
  } else {
    sectionScores.Title = 0;
    issues.push({
      section: "Product Name",
      message: "Product name is missing.",
      score: 0,
      sign: false
    });
  }

  // --------------------------
  // 2. Description (max 15)
  // --------------------------
  if (product.product_description) {
    const descWordCount = product.product_description
      .split(/\s+/)
      .filter(Boolean).length;

    if (descWordCount < 60) {
      let partialScore = 0;
      let message = `Description is too short. It should be at least 60 words. Currently: ${descWordCount} words.`;

      if (descWordCount > 30) {
        partialScore = 10;
      } else if (descWordCount > 0) {
        partialScore = 5;
      }
      sectionScores.Description = partialScore;
      issues.push({
        section: "Description",
        message,
        score: partialScore,
        sign: false
      });
    } else {
      sectionScores.Description = 15;
      issues.push({
        section: "Description",
        message: "Description length is good.",
        score: 15,
        sign: true
      });
    }
  } else {
    sectionScores.Description = 0;
    issues.push({
      section: "Description",
      message: "Description is missing.",
      score: 0,
      sign: false
    });
  }

  // --------------------------
  // 3. Images (max 15)
  // --------------------------
  const baseImages = [
    product.main_image,
    product.image_1,
    product.image_2,
    product.image_3,
    product.image_4,
    product.image_5,
    product.image_6,
    product.image_7
  ].filter(Boolean).length;

  const variantImages = product.variant
    ? [
        product.variant.image_1,
        product.variant.image_2,
        product.variant.image_3,
        product.variant.image_4,
        product.variant.image_5,
        product.variant.image_6,
        product.variant.image_7
      ].filter(Boolean).length
    : 0;

  const totalImages = baseImages + variantImages;

  let imageScore = 0;
  let imageMessage = "";

  if (totalImages === 0) {
    imageScore = 0;
    imageMessage = "No images provided for the product.";
  } else if (totalImages === 1) {
    imageScore = 3;
    imageMessage = "Only one image provided. Consider adding more.";
  } else if (totalImages < 4) {
    imageScore = 6;
    imageMessage = "Less than 4 images provided. Consider adding more.";
  } else if (totalImages < 7) {
    imageScore = 10;
    imageMessage = "Good number of images, but adding more (7+) would be excellent.";
  } else {
    imageScore = 15;
    imageMessage = "Excellent image count.";
  }

  sectionScores.Images = imageScore;
  issues.push({
    section: "Images",
    message: imageMessage,
    score: imageScore,
    sign: imageScore >= 10
  });

  // --------------------------
  // 4. Category & Subcategory (max 5)
  // --------------------------
  let catScore = 0;
  if (product.category_id) {
    catScore += 3;
    issues.push({
      section: "Category",
      message: "Category is present.",
      score: 3,
      sign: true
    });
  } else {
    issues.push({
      section: "Category",
      message: "Product category is missing.",
      score: 0,
      sign: false
    });
  }

  if (product.subcategory_id || product.childcategory_id) {
    catScore += 2;
    issues.push({
      section: "Category",
      message: "Subcategory or child category is present.",
      score: 2,
      sign: true
    });
  } else {
    issues.push({
      section: "Category",
      message: "Subcategory or child category is missing.",
      score: 0,
      sign: false
    });
  }
  sectionScores.Category = catScore;

  // --------------------------
  // 5. Variant & Stock (max 15)
  // --------------------------
  if (product.variant) {
    let variantScore = 7;
    let message = "Variant data exists.";

    if (product.variant.stock && Number(product.variant.stock) > 0) {
      variantScore += 8;
      message = "Variant and stock info is good.";
    } else {
      message = "Variant exists but stock is zero or missing.";
    }

    sectionScores.VariantAndStock = Math.min(variantScore, 15);
    issues.push({
      section: "Variant and Stock",
      message,
      score: Math.min(variantScore, 15),
      sign: variantScore >= 15
    });
  } else {
    sectionScores.VariantAndStock = 0;
    issues.push({
      section: "Variant and Stock",
      message: "No variant data found.",
      score: 0,
      sign: false
    });
  }

  // --------------------------
  // 6. Pricing (max 10)
  // --------------------------
  if(product.search_keywords){
     sectionScores.search_keywords = 5;
       issues.push({
      section: "Search Keywords",
      message: "Search Keywords is provided",
      score: 5,
      sign: true
    });
  }else{
    sectionScores.search_keywords = 0;
       issues.push({
      section: "Search Keywords",
      message: "Search Keywords is not provided",
      score: 0,
      sign: false
    }); 
  }

  if(product.key_feature && product.key_feature.length > 0){
     sectionScores.key_feature = 5;
       issues.push({
      section: "Key Feature",
      message: "Key Feature is provided",
      score: 5,
      sign: true
    });
  }else{
    sectionScores.key_feature = 0;
       issues.push({
      section: "Key Feature",
      message: "Key Feature is not provided",
      score: 0,
      sign: false
    }); 
  }


  // if (product.variant && product.variant.consumerSalePrice && Number(product.variant.consumerSalePrice) > 0) {
  //   sectionScores.Pricing = 10;
  //   issues.push({
  //     section: "Pricing",
  //     message: "Pricing is provided.",
  //     score: 10,
  //     sign: true
  //   });
  // } else {
  //   sectionScores.Pricing = 0;
  //   issues.push({
  //     section: "Pricing",
  //     message: "Consumer sale price is missing.",
  //     score: 0,
  //     sign: false
  //   });
  // }

  // --------------------------
  // 7. Compliance (max 30)
  // --------------------------
  let complianceScore = 0;

  const complianceChecks = [
    { field: product.safety_warning, name: "Safety warning" },
    { field: product.country_of_origin, name: "Country of origin" },
    { field: product.manufacturer_details, name: "Manufacturer details" },
    { field: product.packer_details, name: "Packer details" },
    { field: product.importer_details, name: "Importer details" }
  ];

  complianceChecks.forEach(check => {
    if (check.field && check.field.trim() && check.field.toLowerCase() !== "n/a" && check.field.toLowerCase() !== "not applicable") {
      complianceScore += 5;
      issues.push({
        section: check.name,
        message: `${check.name} is provided.`,
        score: 5,
        sign: true
      });
    } else {
      issues.push({
        section: check.name,
        message: `${check.name} is missing.`,
        score: 0,
        sign: false
      });
    }
  });

  if (product.compliance) {
    complianceScore += 5;
    issues.push({
      section: "Compliance",
      message: "Compliance object is provided.",
      score: 5,
      sign: true
    });
  } else {
    issues.push({
      section: "Compliance",
      message: "Compliance is missing.",
      score: 0,
      sign: false
    });
  }

  complianceScore = Math.min(complianceScore, 30);
  sectionScores.Compliance = complianceScore;

  // --------------------------
  // Total calculation
  // --------------------------
  totalScore = Object.values(sectionScores).reduce((a, b) => a + b, 0);
  const percentage = Math.round((totalScore / 100) * 100);

  let quality = "Poor";
  if (percentage >= 80) quality = "Excellent";
  else if (percentage >= 50) quality = "Good";
  else if (percentage >= 30) quality = "Average";

  return {
    score: percentage,
    quality,
    sectionScores,
    issues
  };
}





export function calculatePotentialSale(views, sellingPrice, conversionRate = 0.05) {
  const estimatedUnitsSold = ((views+1)* 5) * conversionRate;
  const potentialSale = estimatedUnitsSold * sellingPrice;
  return Number(potentialSale.toFixed(2));
}








export function formatNumber(num) {
  if (num === null || num === undefined) return "0";

  if (num >= 1e9) {
    return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}





export function checkDiscountApplyTime(startDateParam, closeDateParam, startTimeParam, closeTimeParam){
      const now = new Date();
if(!startDateParam || !closeDateParam || !startTimeParam || !closeTimeParam){
  return false
}
  // Strip time part from current date
  const todayStr = now.toISOString().split("T")[0];
  const today = new Date(todayStr);
 
    const startDate = new Date(startDateParam);
    const closeDate = new Date(closeDateParam);
    // get current time in minuts
    const currentTimeMinutes = now.getHours() * 60 + now.getMinutes();

    const [startHour, startMinute] = startTimeParam.split(":").map(Number);
    const [closeHour, closeMinute] = closeTimeParam.split(":").map(Number);

    const startTimeMinutes = startHour * 60 + startMinute;
    const closeTimeMinutes = closeHour * 60 + closeMinute;

      if (startDate <= today && closeDate >= today) {
            let applyDiscount = false; 
            if(isToday(startDate) && isToday(closeDate)) {
                      // Single-day event
                  if (currentTimeMinutes >= startTimeMinutes && currentTimeMinutes <= closeTimeMinutes) {
                        applyDiscount = true;
                      }
              } else if (isToday(startDate)) {
                      // First day of the event
                      if (currentTimeMinutes >= startTimeMinutes) {
                        applyDiscount = true;
                      }
              } else if (isToday(closeDate)) {
                      // Last day of the event
                      if (currentTimeMinutes <= closeTimeMinutes) {
                        applyDiscount = true;
                      }
              } else {
                      // Any full day in between
                      applyDiscount = true;
                }

           return applyDiscount;
          }else{
            return false;
          }
 

  }


  export function acosFun(totalSales, totalSpendAmount){
    let acos = 0;
    if(totalSales && totalSales > 0){
      acos = (totalSpendAmount / totalSales) * 100;
      return `${acos.toFixed(2)}%`;
    } 

    return "-";
  }

  export function roiFun(totalSpendAmount, totalSales){
    let roi = 0;
    if(totalSales && totalSales > 0){
      roi = (totalSpendAmount / totalSales);
      return `${roi.toFixed(2)}`;
    } 

    return "-";
  }