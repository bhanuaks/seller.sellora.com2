// app/api/upload-products/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import * as XLSX from 'xlsx';
import { IncomingForm } from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  await dbConnect();

  const files = await new Promise((resolve, reject) => {
    const form = new IncomingForm({ uploadDir: '/tmp', keepExtensions: true });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve(files);
    });
  });

  const file = files.file[0];
  const workbook = XLSX.readFile(file.filepath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, { range: 2 }); // Skip first 2 rows

  let inserted = 0, errors = [];

  for (let [index, row] of rows.entries()) {
    try {
      // Validation
      if (!row['Brand Name'] || !row['Product Name'] || !row['Product Description']) {
        errors.push({ row: index + 3, message: 'Required fields missing' });
        continue;
      }

      const product = {
        brandName: row['Brand Name'],
        productName: row['Product Name'],
        productDescription: row['Product Description'],
        keyFeatures: row['Key Features'] || '',
        searchKeywords: row['Search Keywords'] ? row['Search Keywords'].split(',').map(s => s.trim()) : [],
        targetGender: row['Target Gender'] || 'Unisex',
        ageRangeDescription: row['Age Range Description'] || '',
        color: row['Color'] || '',
        size: row['Size'] || '',
      };

      console.log({product});
    //   await product.save();
      inserted++;
    } catch (err) {
      errors.push({ row: index + 3, message: err.message });
    }
  }

  return NextResponse.json({ inserted, errors });
}
