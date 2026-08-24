const fs = require('fs');
let content = fs.readFileSync('src/data/sellers.ts', 'utf8');

// Fix broken characters
content = content.replace(/Ǹ/g, 'é');
content = content.replace(/%ventail/g, 'Éventail');
content = content.replace(/%couteurs/g, 'Écouteurs');
content = content.replace(/ForǦt/g, 'Forêt');
content = content.replace(/BǸnin/g, 'Bénin');
content = content.replace(/Crme/g, 'Crème');
content = content.replace(/Sac  Main/g, 'Sac à Main');
content = content.replace(/%couteurs/g, 'Écouteurs');
content = content.replace(/%ventail/g, 'Éventail');

// Replace the broken image for earbuds
// The original one was 'https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=800&q=80&fit=crop'
// I'll replace it with a valid earbud image: https://images.unsplash.com/photo-1572569533902-13f6396e9526?w=800&q=80&fit=crop
content = content.replace(
  'https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=800&q=80&fit=crop',
  'https://images.unsplash.com/photo-1572569533902-13f6396e9526?w=800&q=80&fit=crop'
);

fs.writeFileSync('src/data/sellers.ts', content, 'utf8');
console.log('Fixed sellers.ts');
