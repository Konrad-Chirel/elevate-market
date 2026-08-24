const fs=require('fs');
let c=fs.readFileSync('src/pages/OrderTracking.tsx','utf8');
c=c.replace(/\\`/g,'`');
fs.writeFileSync('src/pages/OrderTracking.tsx',c,'utf8');
