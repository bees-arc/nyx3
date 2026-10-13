const sharp = require('sharp');
const path = require('path');

async function createExactBackground() {
  const inputPath = 'C:/Users/LTP-112/.gemini/antigravity-ide/brain/04bd9669-6af7-414a-83a9-29420b3a0fc2/.user_uploaded/media_1791925985179.png';
  const outputPath = path.join(__dirname, '../public/images/liquid/nyx_hero_bg_exact.png');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const cleanBuffer = Buffer.from(data);

  // 1. Inpaint pebbles on the left (x between 80 and 520, y between 60 and 500)
  // Replace with the dark background from the far left (x < 70)
  for (let y = 0; y < height; y++) {
    for (let x = 70; x < 520; x++) {
      const idx = (y * width + x) * channels;
      // sample from x = 30
      const sampleX = Math.round(30 * (1 - (x - 70) / 450) + 530 * ((x - 70) / 450));
      const sampleY = y;
      const sIdx = (sampleY * width + Math.min(width - 1, sampleX)) * channels;
      
      // Interpolate between far left dark and right blue
      const t = (x - 70) / 450;
      cleanBuffer[idx] = Math.round(cleanBuffer[(y * width + 20) * channels] * (1 - t) + cleanBuffer[(y * width + 550) * channels] * t);
      cleanBuffer[idx + 1] = Math.round(cleanBuffer[(y * width + 20) * channels + 1] * (1 - t) + cleanBuffer[(y * width + 550) * channels + 1] * t);
      cleanBuffer[idx + 2] = Math.round(cleanBuffer[(y * width + 20) * channels + 2] * (1 - t) + cleanBuffer[(y * width + 550) * channels + 2] * t);
    }
  }

  // 2. Remove text on the right (x > 500)
  for (let y = 0; y < height; y++) {
    for (let x = 500; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = cleanBuffer[idx];
      const g = cleanBuffer[idx + 1];
      const b = cleanBuffer[idx + 2];

      if (r > 140 && g > 140) {
        const sampleX = Math.min(width - 1, x + 35);
        const sIdx = (y * width + sampleX) * channels;
        cleanBuffer[idx] = cleanBuffer[sIdx];
        cleanBuffer[idx + 1] = cleanBuffer[sIdx + 1];
        cleanBuffer[idx + 2] = cleanBuffer[sIdx + 2];
      }
    }
  }

  // 3. Smooth optical blur to create a pristine lighting gradient
  await sharp(cleanBuffer, {
    raw: { width, height, channels: 4 }
  })
    .resize(32, 18, { fit: 'fill', kernel: 'lanczos3' })
    .blur(5)
    .resize(width, height, { fit: 'fill', kernel: 'lanczos3' })
    .blur(25)
    .png({ quality: 100 })
    .toFile(outputPath);

  console.log('Created clean exact background image at:', outputPath);
}

createExactBackground().catch(console.error);
