import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import path from 'node:path';

const SRC_DIR = path.resolve('project/uploads');
const OUT_DIR = path.resolve('src/assets/images');

mkdirSync(OUT_DIR, { recursive: true });

const jobs = [
  // Hero background photo — full-bleed, needs to stay reasonably wide.
  { file: 'hero-hotel.png', out: 'hero-hotel.webp', width: 1600, quality: 78 },
  // Modal service photos — displayed at up to ~440px wide (16:9), 2x for retina.
  { file: 'Foto-Gym.png', out: 'gym.webp', width: 960, quality: 80 },
  { file: 'Foto-Restaurante.png', out: 'restaurant.webp', width: 960, quality: 80 },
  { file: 'Foto-Openbar.png', out: 'openbar.webp', width: 960, quality: 80 },
  { file: 'Foto-Beachclub.png', out: 'beachclub.webp', width: 960, quality: 80 },
  { file: 'Foto-Spa.png', out: 'spa.webp', width: 960, quality: 80 },
  { file: 'Foto-Casino.png', out: 'casino.webp', width: 960, quality: 80 },
  // Logo — displayed at max 160px wide, transparent PNG. 2x-3x for retina.
  { file: 'logo.png', out: 'logo.webp', width: 400, quality: 90 },
];

for (const job of jobs) {
  const inputPath = path.join(SRC_DIR, job.file);
  const outputPath = path.join(OUT_DIR, job.out);
  await sharp(inputPath)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(outputPath);
  console.log(`${job.file} -> ${job.out}`);
}

console.log('Done.');
