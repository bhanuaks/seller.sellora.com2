 
 
 import * as XLSX from 'xlsx';
 import { saveAs } from 'file-saver';
 import ExcelJS from 'exceljs';
import { detailsInField, exportProductField, fillExampleField, productFieldDataTypes } from './ExcelDataHelper/productFieldData';
import { exportVariantField, variantDetailsInField, variantFieldDataTypes, variantFillExampleField } from './ExcelDataHelper/variantFixedData';
import { thiredFormDetailsInField, thiredFormField, thiredFormFieldDataTypes, thiredFormfillExampleField } from './ExcelDataHelper/thiredFormData';
import { thresholdDataField, thresholdDetailsInField, thresholdExampleField, thresholdFieldDataTypes } from './ExcelDataHelper/thresholdData';
import { baseUrl, slugify } from './helper';
import { headerOptionValues } from './ExcelDataHelper/excelHeaderValue';
import { singleExampleRowData } from './ExcelDataHelper/oneRowExampleExcelHelper';
// import { detailsInField, exportProductField, exportVariantField, fillExampleField, productFieldDataTypes, thiredFormDetailsInField, thiredFormField, thiredFormFieldDataTypes, thiredFormfillExampleField, variantDetailsInField, variantFieldDataTypes, variantFillExampleField } from './ExcelDataHelper';


 export const exportToDataInExel = (data, fileName = 'data.xlsx')=>{


    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1'); 
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' }); 
    saveAs(blob, fileName); 
    
 }

 

 export const exportExcelWithData = async (data, fileName = 'products.xlsx') => {
   if (!data || data.length === 0) {
     alert('No data to export');
     return;
   }
 
   const workbook = new ExcelJS.Workbook();
   const worksheet = workbook.addWorksheet('Sheet1');
 
   // Extract headers
   const zeroIndexData =  data[0];
   const headers = Object.keys(zeroIndexData);
 
   // Add headers to sheet
   const headerRow = worksheet.addRow(headers);
 
   // Bold header and background color
   headerRow.eachCell((cell) => {
     cell.font = { bold: true };
     cell.fill = {
       type: 'pattern',
       pattern: 'solid',
       fgColor: { argb: 'FFFFE599' }  
     };
   });
 
 
    

   const selectOptionField = [];

   headers.forEach((keyName)=>{
      if(zeroIndexData[keyName] &&  typeof zeroIndexData[keyName] == "object"){ 
         selectOptionField.push(keyName)
      }
   })

   for (let row = 2; row <= 100; row++) {
      selectOptionField.forEach((selectCell)=>{
         const fieldIndex = headers.indexOf(selectCell) + 1;  
         let  options = zeroIndexData[selectCell] || []; 
       

      //   console.log({options});
         const cell = worksheet.getCell(row, fieldIndex);
         cell.dataValidation = {
           type: 'list',
           allowBlank: true,
           formulae: [`"${options.join(',')}"`],
           showErrorMessage: true,
           errorStyle: 'error',
           errorTitle: 'Invalid Choice',
           error: 'Please select a value from the dropdown.',
         };
      })
     
    }

   // Generate and download Excel file
   const buffer = await workbook.xlsx.writeBuffer();
   const blob = new Blob([buffer], {
     type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
   });
   saveAs(blob, fileName);
 };



 
 

 export const exportExcelSheet = async (dynamicVariant, dynamicField, categoryValue, fileName) => {

  // Fetch the existing Excel file
  const response = await fetch(`${baseUrl}example_excel/example-excel.xlsx`);
  const arrayBuffer = await response.arrayBuffer();
 
  // Load it using ExcelJS
    const tempWorkbook = new ExcelJS.Workbook();
    await tempWorkbook.xlsx.load(arrayBuffer);
    const sourceWorksheet = tempWorkbook.getWorksheet("Attribute Values");
    const sourceWorksheet2 = tempWorkbook.getWorksheet("Instructions");


  const workbook = new ExcelJS.Workbook();

  
  if (sourceWorksheet2) {  
    // ===================copy Instructions data=================
    const newSheet2 = workbook.addWorksheet("Instructions"); 
    // =================Copy column widths================
    sourceWorksheet2.columns.forEach((col, idx) => {
      newSheet2.getColumn(idx + 1).width = col.width;
    });

    // Copy each row
    sourceWorksheet2.eachRow({ includeEmpty: true }, (row, rowNumber) => {
      const newRow = newSheet2.getRow(rowNumber);
      newRow.height = row.height;

      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        const newCell = newRow.getCell(colNumber);
        newCell.value = cell.value;  
        // Deep copy of style
        newCell.style = JSON.parse(JSON.stringify(cell.style || {}));
      });

      newRow.commit();
    });

    // Copy merged cells
    if (sourceWorksheet2.model && sourceWorksheet2.model.merges) {
      for (const mergeRange of sourceWorksheet2.model.merges) {
        newSheet2.mergeCells(mergeRange);
      }
    } 
    // console.warn('"Instructions"  found.');
  } else {
    console.warn('❌ Sheet "Instructions" not found.');
  }
  // add second template sheet
  const worksheet = workbook.addWorksheet("Template Sheet");


// add thired sheet Attribute Values
  if (sourceWorksheet) {
    const newSheet = workbook.addWorksheet("Attribute Values");

    // Copy column widths
    sourceWorksheet.columns.forEach((col, idx) => {
      newSheet.getColumn(idx + 1).width = col.width;
    });

    // Copy each row
    sourceWorksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
      const newRow = newSheet.getRow(rowNumber);
      newRow.height = row.height;

      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        const newCell = newRow.getCell(colNumber);
        newCell.value = cell.value;

        // Deep copy of style
        newCell.style = JSON.parse(JSON.stringify(cell.style || {}));
      });

      newRow.commit();
    });

    // Copy merged cells
    if (sourceWorksheet.model && sourceWorksheet.model.merges) {
      for (const mergeRange of sourceWorksheet.model.merges) {
        newSheet.mergeCells(mergeRange);
      }
    } 
  } else {
    console.warn('❌ Sheet "Attribute Values" not found.');
  }

  






  // Freeze the first 4 columns and first 2 rows
  worksheet.views = [
    {
      state: "frozen",
      xSplit: 0, // Freeze columns A-D
      ySplit: 5, // Freeze rows 1-2 (header)
    },
  ];
 
const selectVarData = [...dynamicVariant.variant];
const variants = dynamicVariant.variant;

if (variants.length > 0) {
  for (let i = 0; i < variants.length; i++) {
    for (let j = i + 1; j < variants.length; j++) {
      const optionOne = `${variants[i]} and ${variants[j]}`;
      selectVarData.push(optionOne);
    }
  }
}
  

  const headerOptionValue = {
    ...headerOptionValues,
    ...dynamicVariant.variantValueArr,
    ...dynamicField.dynamicFieldValueArr,
    ...categoryValue,
    "choose-variant":selectVarData.length > 0 ? selectVarData : ""
  }

  
  const productHeader = exportProductField;
  const variantHeader = dynamicVariant.variant.length ? dynamicVariant.variant.concat(exportVariantField):exportVariantField;
  const thiredFormFieldHeader = thiredFormField;
  const dynamicFieldRow = dynamicField.dynamicField; 
  const thresholdDataFieldRow = thresholdDataField; 

   
  if(selectVarData.length>0){
    variantHeader.unshift("Choose Variant") 
    variantHeader.unshift("Variant")
  } 
 const fullHeader = productHeader.concat(variantHeader, thiredFormFieldHeader, dynamicFieldRow, thresholdDataFieldRow);


// Add section names row (Row 1)
const sectionRow = worksheet.addRow([]); // Empty row for merging
sectionRow.height = 25;

let colIndex = 1;

// Helper to merge and set title
const addSectionTitle = (title, length, color) => {
  const start = colIndex;
  const end = colIndex + length - 1;

  if (length > 0) {
    worksheet.mergeCells(1, start, 1, end);
    const cell = sectionRow.getCell(start);
    cell.value = title;
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: color },
    };
    cell.font = { bold: true };
    cell.alignment = {
      wrapText: true,
      horizontal: "center",
      vertical: "middle",
    };
    cell.border = {
    bottom: { style: 'thin', color: { argb: 'FF000000' } },
  };
  
  }

  colIndex += length;
};

// Add merged titles
addSectionTitle("Product Information", productHeader.length, "FFB6D7A8");
addSectionTitle("Image/Price/Inventory/Variation", variantHeader.length, "FFB6A9EF");
addSectionTitle("Compliance and Key attributes", thiredFormFieldHeader.length, "FFB6D7A8");
addSectionTitle("Other Attributes", dynamicFieldRow.length, "FFB6A9EF");
addSectionTitle("Add Threshold Levels", thresholdDataFieldRow.length, "FFFFC000");

 


 const row1 = worksheet.addRow(fullHeader);
  // Set custom colors for selected columns
  row1.height = 25;
  row1.eachCell((cell, colNumber) => {
   let color = "FFFFFFFF"; // default white background

  if (colNumber <= productHeader.length) {
    color = "FFB6D7A8"; 
  } else if (colNumber <= productHeader.length + variantHeader.length) {
    color = "FFB6A9EF"; 
  }else if (colNumber <= productHeader.length + variantHeader.length + thiredFormFieldHeader.length) {
    color = "FFB6D7A8"; 
  }else if (colNumber <= productHeader.length + variantHeader.length + thiredFormFieldHeader.length + dynamicFieldRow.length) {
    color = "FFB6A9EF"; 
  }else {
    color = "FFFFC000";  
  }

    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: color },
    };
    cell.font = { bold: true };
     cell.alignment = {
        wrapText: true,
        horizontal: "center", 
        vertical: "middle",  
      };
  });

  // Calculate row height based on the text length
  const calculateRowHeight = (data) => {
    let maxLength = 0;
    data.forEach((value) => {
      maxLength = Math.max(maxLength, value.length);
    });
    return Math.max(20, Math.ceil(maxLength / 10) * 2);  
  };
 
  const productFieldDataTypesRow = productFieldDataTypes;
  const varDataType = dynamicVariant.varDataType;
  const variantFieldDataTypesRow = variantFieldDataTypes; 
  const thiredFormFieldDataTypesRow = thiredFormFieldDataTypes;
  const dynamicFieldDataTypesRow = dynamicField.dynamicFieldDataType;  
  const thresholdFieldDataTypesRow = thresholdFieldDataTypes;

   if(selectVarData.length>0){
    varDataType.unshift("Select value from dropdown") 
    varDataType.unshift("Select value from dropdown") 
  } 

  const follDataTypeRow = productFieldDataTypesRow.concat(varDataType, variantFieldDataTypesRow, thiredFormFieldDataTypesRow, dynamicFieldDataTypesRow, thresholdFieldDataTypesRow);
   const row2 = worksheet.addRow(follDataTypeRow);
  row2.height = 40;  
  row2.eachCell((cell) => {
 
    // cell.fill = {
    //   type: "pattern",
    //   pattern: "solid",
    //   fgColor: { argb: "FFFFC000" },  
    // };
    cell.alignment = {
        wrapText: true,
        horizontal: "center", 
        vertical: "middle",  
      };
  });


  const fillExampleFieldRow = fillExampleField;
  const varExample = dynamicVariant.varExample;
  const variantFillExampleFieldRow = variantFillExampleField;
  const thiredFormfillExampleFieldRow = thiredFormfillExampleField;
  const dynamicFieldExampleFieldRow = dynamicField.dynamicFieldDetails;   
  const thresholdExampleFieldRow = thresholdExampleField;
   if(selectVarData.length>0){
    varExample.unshift("") 
    varExample.unshift("") 
  } 
  const exampleRowFull = fillExampleFieldRow.concat(varExample, variantFillExampleFieldRow, thiredFormfillExampleFieldRow, dynamicFieldExampleFieldRow, thresholdExampleFieldRow);
    const row3 = worksheet.addRow(exampleRowFull);
  row3.height = 40; 
  row3.eachCell((cell) => {

    if (cell.value === "Mandatory*") {
        cell.font = {
          color: { argb: "FFFF0000" }, // Red text
        };
      }
 
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFFFC110" },
    };
     cell.alignment = {
        wrapText: true,
        horizontal: "center", 
        vertical: "middle",  
      };
  });



  const detailsInFieldRow = detailsInField;
  const varDetails = dynamicVariant.varDetails;
  const variantDetailsInFieldRow = variantDetailsInField;
  const thiredFormDetailsInFieldRow = thiredFormDetailsInField;
  const dynamicFieldDetailsInFieldRow = dynamicField.dynamicFieldExample; 
  const thresholdDetailsInFieldRow = thresholdDetailsInField;
    if(selectVarData.length>0){
      varDetails.unshift("") 
        varDetails.unshift("Yes/No") 
      } 
  const fieldDetailsFullRow = detailsInFieldRow.concat(varDetails, variantDetailsInFieldRow, thiredFormDetailsInFieldRow, dynamicFieldDetailsInFieldRow, thresholdDetailsInFieldRow)
 const row4 = worksheet.addRow(fieldDetailsFullRow);
  row4.height = 100;  
  row4.eachCell((cell) => {
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF6E35" },
     
    };
    cell.font = {
    color: { argb: "FFFFFF" }
  };
   cell.alignment = {
        wrapText: true,
        horizontal: "center", 
        vertical: "middle",  
      };
  });

 

   const selectOptionField = [];
  const newsingleExampleRowData = singleExampleRowData;
   fullHeader.forEach((keyName)=>{
      if(headerOptionValue[slugify(keyName)] &&  typeof headerOptionValue[slugify(keyName)] == "object"){ 
         selectOptionField.push(keyName)
         newsingleExampleRowData[keyName] = headerOptionValue[slugify(keyName)][0]
        }
         
      })


      // ========================start add one row for example  ============================================
   const rowDataExample = [];
  fullHeader.forEach((heading)=>{
      rowDataExample.push(newsingleExampleRowData[heading] || "")
  })

  const dataRows = [
   rowDataExample
  ];

  dataRows.forEach((data, index) => {
    const row = worksheet.addRow(data);
    row.height = calculateRowHeight(data); // Auto height based on content
    row.eachCell((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: index % 2 === 0 ? "FFD9E1F2" : "FFF2F2F2", // alternate rows
        },
      };
        cell.alignment = {
        wrapText: true,
        horizontal: "center", 
        vertical: "middle",  
      };
    });
  });
      // ========================End add one row for example  ============================================
          
      
// ========================Start valiadtion of selection============================================ 
const totalRows = worksheet.rowCount > 6 ? worksheet.rowCount : 1000;
for (let row = 6; row <= totalRows; row++) {
  selectOptionField.forEach((selectCell) => {
    const fieldIndex = fullHeader.indexOf(selectCell) + 1;
    const options = headerOptionValue[slugify(selectCell)] || [];
    
    // Sanitize and trim options
    const sanitizedOptions = options
      .map(opt => opt.toString().replace(/"/g, '""').replace(/,/g, ''))
      .filter(opt => opt.length > 0);

    // Join and check total length
    const optionString = sanitizedOptions.join(','); 
   
    if (optionString.length < 255) {
      const cell = worksheet.getCell(row, fieldIndex);
      cell.dataValidation = {
        type: "list",
        allowBlank: true,
        formulae: [`"${optionString}"`],
        showErrorMessage: true,
        errorStyle: "error",
        errorTitle: "Invalid Choice",
        error: "Please select a value from the dropdown.",
      };
    }
  });
}
// ========================End valiadtion of selection============================================ 
  

  // Auto column width
  worksheet.columns.forEach((col) => {
    col.width = 25;
  });

  // Download file
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    
  });
  saveAs(blob, fileName);
};
