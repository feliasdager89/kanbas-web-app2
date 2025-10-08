const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Path to the public folder
const publicFolder = path.join(__dirname, 'public');
const imagesFolder = path.join(publicFolder, 'images');

// Desired dimensions (same as react_logo.png)
const WIDTH = 192;
const HEIGHT = 192;

// Ensure the images folder exists
if (!fs.existsSync(imagesFolder)) {
  console.error('Images folder does not exist:', imagesFolder);
  process.exit(1);
}

// Resize all images in the folder
fs.readdir(imagesFolder, (err, files) => {
  if (err) {
    console.error('Error reading images folder:', err);
    process.exit(1);
  }

  files.forEach((file) => {
    const filePath = path.join(imagesFolder, file);

    // Check if the file is an image
    if (['.png', '.jpg', '.jpeg', '.gif'].includes(path.extname(file).toLowerCase())) {
      const outputFilePath = path.join(imagesFolder, `resized-${file}`);

      sharp(filePath)
        .resize(WIDTH, HEIGHT)
        .toFile(outputFilePath)
        .then(() => {
          console.log(`Resized ${file} -> ${outputFilePath}`);
        })
        .catch((err) => {
          console.error(`Error resizing ${file}:`, err);
        });
    }
  });
});