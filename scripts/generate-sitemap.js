// scripts/generate-sitemap.js (optional, for pre-generation)
import { exec } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateSitemaps() {
  console.log('🚀 Generating sitemaps...');
  
  // Build the site
  await new Promise((resolve, reject) => {
    exec('npm run build', (error, stdout, stderr) => {
      if (error) {
        console.error('Build error:', error);
        reject(error);
        return;
      }
      console.log(stdout);
      resolve();
    });
  });

  console.log('✅ Sitemaps generated!');
}

generateSitemaps().catch(console.error);