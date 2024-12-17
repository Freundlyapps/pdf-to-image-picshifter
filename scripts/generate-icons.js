import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const sizes = [
  { width: 32, height: 32, name: 'logo.png' },
  { width: 16, height: 16, name: 'favicon-16x16.png' },
  { width: 32, height: 32, name: 'favicon-32x32.png' },
  { width: 180, height: 180, name: 'apple-touch-icon.png' },
  { width: 192, height: 192, name: 'android-chrome-192x192.png' },
  { width: 512, height: 512, name: 'android-chrome-512x512.png' }
];

async function ensureDir(filePath) {
  await mkdir(dirname(filePath), { recursive: true });
}

async function generateIcons() {
  const inputPath = 'C:/Users/sdxxx/Downloads/picshifter_logo.png';
  
  for (const size of sizes) {
    const outputPath = join(projectRoot, 'public', size.name);
    await ensureDir(outputPath);
    
    try {
      await sharp(inputPath)
        .resize(size.width, size.height)
        .toFile(outputPath);
      console.log(`Generated ${size.name}`);
    } catch (error) {
      console.error(`Error generating ${size.name}:`, error);
    }
  }

  // Generate favicon.ico separately since it requires different handling
  try {
    await sharp(inputPath)
      .resize(16, 16)
      .toFormat('png')
      .toFile(join(projectRoot, 'public', 'favicon.ico'));
    console.log('Generated favicon.ico');
  } catch (error) {
    console.error('Error generating favicon.ico:', error);
  }
}

generateIcons().catch(console.error);
