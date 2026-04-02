import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, extname } from 'path';
import puppeteer from 'puppeteer';

const DIST_DIR = join(import.meta.dirname, '..', 'dist');
const PORT = 4567;

const ROUTES = ['/', '/plugins', '/tos', '/impressum', '/privacy', '/refunds'];

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);

      // SPA fallback: serve index.html for routes without file extensions
      if (!extname(filePath) || !existsSync(filePath)) {
        filePath = join(DIST_DIR, 'index.html');
      }

      try {
        const content = readFileSync(filePath);
        const ext = extname(filePath);
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(PORT, () => {
      console.log(`Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  const server = await startServer();

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of ROUTES) {
    console.log(`Pre-rendering ${route}...`);
    const page = await browser.newPage();

    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for React to render content
    await page.waitForSelector('.App', { timeout: 10000 });

    const html = await page.content();

    // Write to dist/{route}/index.html
    const outputDir = route === '/'
      ? DIST_DIR
      : join(DIST_DIR, route.slice(1));

    if (route !== '/') {
      mkdirSync(outputDir, { recursive: true });
    }

    writeFileSync(join(outputDir, 'index.html'), html);
    console.log(`  -> ${join(outputDir, 'index.html')}`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log('Pre-rendering complete!');
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
