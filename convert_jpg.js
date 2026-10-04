const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, 'images');

async function convertToJpg() {
  const files = fs.readdirSync(imgDir);
  for (const file of files) {
    if (file.match(/\.webp$/i)) {
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      const inPath = path.join(imgDir, file);
      const outPath = path.join(imgDir, base + '.jpg');
      
      console.log(`Converting ${file} to JPG...`);
      await sharp(inPath)
        .jpeg({ quality: 90 })
        .toFile(outPath);
    }
  }
  console.log('Done!');
}

convertToJpg().catch(console.error);
