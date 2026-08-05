const { mkdirSync, accessSync } = require('node:fs');

mkdirSync('public', { recursive: true });
accessSync('public/index.html');
console.log('Build complete: public/ is ready for Cloudflare Pages.');
