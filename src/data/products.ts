import { SELLERS } from './sellers';

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  description?: string;
  features?: string[];
  category: string;
  seller: string;
  sellerSlug: string;
  sellerAvatar: string;
  location: string;
  isVerified?: boolean;
  isPromo?: boolean;
  isNew?: boolean;
  dateAdded?: string;
  outOfStock: boolean;
}

export const PRODUCTS: Product[] = SELLERS.flatMap(seller => 
  seller.products.map(p => ({
    id: p.id,
    name: p.name,
    price: p.price,
    oldPrice: p.price > 10000 ? Math.round(p.price * 1.15) : undefined,
    originalPrice: p.price > 10000 ? Math.round(p.price * 1.15) : undefined,
    rating: p.rating,
    reviews: p.reviews,
    image: p.image,
    images: [p.image],
    description: "Découvrez ce produit exceptionnel. " + p.name + " est proposé par la boutique " + seller.name + ". Un choix idéal qui allie qualité, authenticité et durabilité. Soutenez l'économie locale avec Elevate Market.",
    features: [
      "Qualité premium garantie",
      "Direct vendeur certifié",
      "Paiement 100% sécurisé",
      "Livraison suivie"
    ],
    category: seller.categories[0],
    seller: seller.name,
    sellerSlug: seller.slug,
    sellerAvatar: seller.avatar,
    location: seller.location,
    isVerified: seller.isVerified,
    isPromo: p.price > 50000,
    isNew: p.isNew || false,
    dateAdded: '2026-08-01',
    outOfStock: false
  }))
);

export const FEATURED_PRODUCTS: Product[] = PRODUCTS.filter(p => p.id === 1 || p.id === 2 || p.id === 3 || p.id === 4);
if (FEATURED_PRODUCTS.length < 4) {
  FEATURED_PRODUCTS.push(...PRODUCTS.slice(0, 4 - FEATURED_PRODUCTS.length));
}

export const CATEGORIES = [
  'Mode',
  'Électronique',
  'Maison',
  'Beauté',
  'Alimentation',
  'Artisanat'
];
