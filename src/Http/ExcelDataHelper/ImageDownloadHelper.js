const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');

const downloadAndResizeMultiple = async (imgUrl, sizesAndFolders) => {
  const rootDir = process.cwd(); // project root
  const publicDir = path.join(rootDir, 'public');
  const tempDir = path.join(publicDir, 'temp');

  const extension = path.extname(new URL(imgUrl).pathname).toLowerCase();
  const acceptedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

  if (!acceptedExtensions.includes(extension)) {
    console.error('Unsupported image format. Must be jpg, png, jpeg, or webp.');
    return null;
  }

  const outputFileName = `${Date.now()}${extension}`;
  const tempImagePath = path.join(tempDir, outputFileName);

  try {
    await fs.ensureDir(tempDir);

    const response = await axios({
      url: imgUrl,
      method: 'GET',
      responseType: 'stream',
    });

    const writer = fs.createWriteStream(tempImagePath);
    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    // console.log('Image downloaded to public/temp.');

    for (const item of sizesAndFolders) {
      const { width, height, outputFolder } = item;
      const outputPath = path.join(publicDir, outputFolder);

      await fs.ensureDir(outputPath);

      await sharp(tempImagePath)
        .resize({ width })
        .toFile(path.join(outputPath, outputFileName)); 
      // console.log(`Saved resized image to public/${outputFolder}/${outputFileName}`);
    }
  } catch (err) {
    console.error('Error:', err);
  } finally { 
    await new Promise((resolve) => setTimeout(resolve, 100));
    try {
        await safelyRemoveTempFile(tempImagePath); 
      // console.log('Temp image removed.');
    } catch (e) {
      console.error('Failed to remove temp image:', e);
    }
  }

  return outputFileName;
};


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function safelyRemoveTempFile(filePath, retries = 5, delayMs = 300) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await fs.remove(filePath);
      console.log('Temp image removed.');
      return;
    } catch (e) {
      if (attempt === retries) {
        console.error('Failed to remove temp image after retries:', e);
        return;
      }
      console.warn(`Retry ${attempt} to remove temp image...`);
      await sleep(delayMs);
    }
  }
}


module.exports = { downloadAndResizeMultiple };


