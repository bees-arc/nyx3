const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processImage(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const outBuffer = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * channels;
    const dstIdx = i * 4;

    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];

    // Compute brightness / max channel
    const maxVal = Math.max(r, g, b);

    // Threshold black background artifacts (JPEG black is often 0-10)
    if (maxVal < 12) {
      outBuffer[dstIdx] = 0;
      outBuffer[dstIdx + 1] = 0;
      outBuffer[dstIdx + 2] = 0;
      outBuffer[dstIdx + 3] = 0;
    } else {
      // Calculate smooth alpha transition
      // Values between 12 and 60 ramp up smoothly, values above 60 have full or high opacity
      let alpha;
      if (maxVal < 60) {
        alpha = ((maxVal - 12) / 48) * (maxVal / 255);
      } else {
        alpha = Math.min(1.0, (maxVal / 255) * 1.35);
      }
      
      const alphaByte = Math.min(255, Math.max(0, Math.round(alpha * 255)));

      // Color unpremultiplication / preservation
      const factor = alphaByte > 0 ? (255 / Math.max(alphaByte, 40)) : 1;
      outBuffer[dstIdx] = Math.min(255, Math.round(r * factor));
      outBuffer[dstIdx + 1] = Math.min(255, Math.round(g * factor));
      outBuffer[dstIdx + 2] = Math.min(255, Math.round(b * factor));
      outBuffer[dstIdx + 3] = alphaByte;
    }
  }

  // Trim transparent edges so logo is perfectly bounded
  await sharp(outBuffer, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .trim()
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`Saved transparent logo to ${outputPath}`);
}

async function run() {
  const input1 = path.join(__dirname, '../public/images/liquid/nyx_logo_blue_hero.jpg');
  const output1 = path.join(__dirname, '../public/images/liquid/nyx_logo_blue_transparent.png');
  await processImage(input1, output1);

  const input2 = path.join(__dirname, '../public/images/WhatsApp Image 2026-10-13 at 11.58.16 PMf.jpeg');
  const output2 = path.join(__dirname, '../public/images/liquid/nyx_pebbles_transparent.png');
  await processImage(input2, output2);

  const input3 = path.join(__dirname, '../public/images/WhatsApp Image 2026-10-13 at 11.58.16 PM.jpeg');
  const output3 = path.join(__dirname, '../public/images/liquid/nyx_full_brand_transparent.png');
  await processImage(input3, output3);
}

run().catch(console.error);
