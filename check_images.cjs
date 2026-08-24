const fs = require('fs');
const https = require('https');

function checkUrl(url) {
  return new Promise((resolve) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    };
    https.get(url, options, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, status: 0, error: err.message });
    });
  });
}

async function main() {
  const files = ['src/data/sellers.ts', 'src/data/products.ts'];
  const allUrls = new Set();
  
  for (const file of files) {
    if (fs.existsSync(file)) {
      const code = fs.readFileSync(file, 'utf8');
      const regex = /https:\/\/[^'"]+/g;
      let match;
      while ((match = regex.exec(code)) !== null) {
        allUrls.add(match[0]);
      }
    }
  }
  
  const urls = Array.from(allUrls);
  console.log(`Found ${urls.length} unique URLs. Checking...`);
  
  const results = [];
  for (let i = 0; i < urls.length; i += 5) {
    const batch = urls.slice(i, i + 5);
    const batchResults = await Promise.all(batch.map(checkUrl));
    results.push(...batchResults);
  }
  
  const broken = results.filter(r => r.status >= 400 || r.status === 0);
  if (broken.length === 0) {
    console.log("All images are OK!");
  } else {
    console.log("Broken images:");
    console.log(JSON.stringify(broken, null, 2));
  }
}

main();
