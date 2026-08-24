const fs = require('fs');

const replacements = {
  // Artisanat Benin avatar (to make it unique and ensure it works)
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop&crop=faces': 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80&fit=crop&crop=faces',
  
  // Tech Store - écouteurs (was 404)
  'https://images.unsplash.com/photo-1572569533902-13f6396e9526?w=800&q=80&fit=crop': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80&fit=crop',
  
  // Natura Beauty - banner (was 404)
  'https://images.unsplash.com/photo-1608248593842-8021c6a85816?w=1200&q=80&fit=crop': 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80&fit=crop',
  
  // Natura Beauty - gommage (was 404)
  'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=800&q=80&fit=crop': 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80&fit=crop',
  
  // Maison de Couture - banner (was 404)
  'https://images.unsplash.com/photo-1558769132-cb1fac084092?w=1200&q=80&fit=crop': 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80&fit=crop',
  
  // Maison de Couture - avatar (change so it's not same as Artisanat Benin)
  // Wait, I replaced Artisanat Benin, so Maison de Couture can keep 1507003211169...
  
  // Menuiserie Koudou - miroir (was 404)
  'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?w=800&q=80&fit=crop': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80&fit=crop',
  
  // Atelier Oumar - banner (was 404)
  'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=80&fit=crop': 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=1200&q=80&fit=crop'
};

const file = 'src/data/sellers.ts';
let code = fs.readFileSync(file, 'utf8');

for (const [oldUrl, newUrl] of Object.entries(replacements)) {
  code = code.replace(oldUrl, newUrl);
}

fs.writeFileSync(file, code, 'utf8');
console.log('Fixed broken images in sellers.ts');
