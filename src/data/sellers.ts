export interface SellerProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
}

export interface Seller {
  slug: string;
  name: string;
  description: string;
  avatar: string;
  banner: string;
  location: string;
  rating: number;
  reviews: number;
  memberSince: string;
  isVerified: boolean;
  isSuperSeller: boolean;
  categories: string[];
  tabs: string[];
  products: SellerProduct[];
}

export const SELLERS: Seller[] = [
  {
    slug: 'artisanat-benin',
    name: 'Artisanat Benin',
    description: "Une coopérative d'artisans passionnés basée à Cotonou. Nous créons des pièces uniques qui mettent en valeur le savoir-faire traditionnel béninois, du tressage de paniers à la poterie en passant par le travail du cuir. Chaque achat soutient directement nos artisans locaux et leurs familles.",
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80&fit=crop&crop=faces',
    banner: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=1200&q=80&fit=crop',
    location: 'Cotonou, Littoral',
    rating: 4.8,
    reviews: 124,
    memberSince: 'Mars 2022',
    isVerified: true,
    isSuperSeller: true,
    categories: ['Artisanat', 'Décoration', 'Fait Main'],
    tabs: ['Boutique', 'À Propos', 'Avis', 'Politiques'],
    products: [
      { id: 1, name: 'Panier Tressé Artisanal "Cotonou"', price: 15000, image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Baskets_in_Haikou_03.jpg', rating: 4.9, reviews: 34 },
      { id: 101, name: 'Tissu Bogolan Authentique', price: 15000, image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Traditional_mud_cloth.jpg', rating: 4.8, reviews: 24, isNew: true },
      { id: 102, name: 'Jarre en Terre Cuite Sculptée', price: 22500, image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80&fit=crop', rating: 5.0, reviews: 12 },
      { id: 103, name: 'Bracelet en Laiton Massif', price: 8000, image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80&fit=crop', rating: 4.9, reviews: 45 },
      { id: 104, name: 'Sac en Cuir Tressé - Fait Main', price: 35000, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80&fit=crop', rating: 4.8, reviews: 12, isNew: true },
      { id: 105, name: 'Éventail Traditionnel Tressé', price: 3000, image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Baskets_in_Haikou_03.jpg', rating: 4.6, reviews: 30 }
    ]
  },
  {
    slug: 'tech-store',
    name: 'Tech Store',
    description: "Votre destination de confiance pour l'électronique de pointe à Abidjan. Nous proposons des smartphones, accessoires et gadgets high-tech avec garantie. Service après-vente assuré et livraison rapide sur tout le territoire ivoirien.",
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop&crop=faces',
    banner: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80&fit=crop',
    location: 'Abidjan, Cocody',
    rating: 4.6,
    reviews: 342,
    memberSince: 'Août 2021',
    isVerified: true,
    isSuperSeller: false,
    categories: ['Électronique', 'Smartphones', 'Accessoires'],
    tabs: ['Boutique', 'Promotions', 'Avis', 'SAV'],
    products: [
      { id: 2, name: 'Smartphone Y23 Pro 128GB', price: 102000, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80&fit=crop', rating: 4.5, reviews: 58 },
      { id: 202, name: 'Écouteurs sans fil TWS Premium', price: 18000, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80&fit=crop', rating: 4.3, reviews: 35, isNew: true },
      { id: 203, name: 'Coque de protection premium', price: 5000, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80&fit=crop', rating: 4.7, reviews: 92 },
      { id: 204, name: 'Chargeur rapide USB-C 65W', price: 12000, image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80&fit=crop', rating: 4.6, reviews: 41, isNew: true }
    ]
  },
  {
    slug: 'natura-beauty',
    name: 'Natura Beauty',
    description: "La beauté au naturel avec des ingrédients d'Afrique. Nous formulons des produits cosmétiques respectueux de votre peau et de l'environnement. Spécialistes du beurre de karité, de l'huile de baobab et du savon noir.",
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop&crop=faces',
    banner: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80&fit=crop',
    location: 'Ouagadougou, Kadiogo',
    rating: 4.9,
    reviews: 512,
    memberSince: 'Février 2023',
    isVerified: true,
    isSuperSeller: true,
    categories: ['Beauté', 'Cosmétiques', 'Soins Bio'],
    tabs: ['Boutique', 'Nouveautés', 'Conseils', 'Avis'],
    products: [
      { id: 3, name: 'Beurre de Karité Bio Pur 500g', price: 4500, image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/M%C3%A9lange_du_Beurre_de_karit%C3%A9_et_huiles_essentielles_dans_une_boite_pour_massage_02.jpg', rating: 4.9, reviews: 210 },
      { id: 302, name: 'Huile de Coco Vierge Bio 250ml', price: 3500, image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80&fit=crop', rating: 4.8, reviews: 95, isNew: true },
      { id: 303, name: 'Savon Noir Africain Traditionnel', price: 2000, image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=800&q=80&fit=crop', rating: 4.7, reviews: 180 },
      { id: 304, name: 'Crème Hydratante au Moringa', price: 6000, image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/M%C3%A9lange_du_Beurre_de_karit%C3%A9_et_huiles_essentielles_dans_une_boite_pour_massage_02.jpg', rating: 4.6, reviews: 67 },
      { id: 305, name: 'Gommage Corps au Café & Karité', price: 5500, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80&fit=crop', rating: 4.8, reviews: 48, isNew: true }
    ]
  },
  {
    slug: 'maison-couture',
    name: 'Maison de Couture',
    description: "L'élégance à l'africaine. Notre atelier de Dakar conçoit des vêtements modernes intégrant des textiles traditionnels (Wax, Bogolan, Faso Dan Fani). Des coupes impeccables pour hommes et femmes, idéales pour le travail ou les cérémonies.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop&crop=faces',
    banner: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80&fit=crop',
    location: 'Dakar, Plateau',
    rating: 4.7,
    reviews: 89,
    memberSince: 'Novembre 2022',
    isVerified: true,
    isSuperSeller: false,
    categories: ['Mode', 'Vêtements', 'Sur Mesure'],
    tabs: ['Collection', 'Robes', 'Hommes', 'Avis'],
    products: [
      { id: 4, name: 'Robe Bogolan Coupe Droite', price: 25000, image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Traditional_mud_cloth.jpg', rating: 4.7, reviews: 32 },
      { id: 402, name: 'Ensemble Wax Moderne Femme', price: 35000, image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Kitenge.jpg', rating: 4.9, reviews: 18, isNew: true },
      { id: 403, name: 'Chemise Kente Homme Slim', price: 18000, image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=800&q=80&fit=crop', rating: 4.5, reviews: 27 },
      { id: 404, name: 'Sac à Main Wax & Cuir', price: 22000, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80&fit=crop', rating: 4.8, reviews: 15, isNew: true }
    ]
  },
  {
    slug: 'epice-plateau',
    name: 'Épices du Plateau',
    description: "Les meilleures épices et condiments naturels d'Afrique de l'Ouest, récoltés et transformés avec soin. Sans additifs ni conservateurs, pour redonner le vrai goût à vos plats familiaux.",
    avatar: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80&fit=crop&crop=faces',
    banner: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&q=80&fit=crop',
    location: 'Lomé, Togo',
    rating: 4.9,
    reviews: 215,
    memberSince: 'Janvier 2023',
    isVerified: true,
    isSuperSeller: true,
    categories: ['Alimentation', 'Épices', 'Produits Locaux'],
    tabs: ['Boutique', 'Épices', 'Huiles', 'Avis'],
    products: [
      { id: 501, name: 'Piment Espelette du Bénin 100g', price: 2500, image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/France-Piment_d%27Espelette-2005-08-05.jpg', rating: 4.8, reviews: 56 },
      { id: 502, name: 'Farine de Manioc Bio 1kg', price: 1500, image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Tepung_casava.jpg', rating: 4.5, reviews: 38, isNew: true },
      { id: 503, name: 'Miel Sauvage de Forêt 500ml', price: 8000, image: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Runny_hunny.jpg', rating: 4.9, reviews: 72 },
      { id: 504, name: 'Huile de Palme Rouge Artisanale 1L', price: 3000, image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Palm_oil.jpg', rating: 4.6, reviews: 45 }
    ]
  },
  {
    slug: 'menuiserie-koudou',
    name: 'Menuiserie Koudou',
    description: "Mobilier design en bois massif exotique (Iroko, Teck, Acajou). Artisanat d'art pour habiller vos intérieurs avec des pièces durables et robustes, finies à la perfection.",
    avatar: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&q=80&fit=crop&crop=faces',
    banner: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1200&q=80&fit=crop',
    location: 'Bouaké, Côte d\'Ivoire',
    rating: 4.4,
    reviews: 42,
    memberSince: 'Septembre 2023',
    isVerified: false,
    isSuperSeller: false,
    categories: ['Maison', 'Mobilier', 'Décoration'],
    tabs: ['Meubles', 'Déco', 'Sur Mesure', 'Avis'],
    products: [
      { id: 601, name: 'Table Basse en Bois d\'Iroko', price: 65000, image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80&fit=crop', rating: 4.5, reviews: 14 },
      { id: 602, name: 'Tabouret Sculpté Traditionnel', price: 15000, image: 'https://images.unsplash.com/photo-1506898667547-42e22a46e125?w=800&q=80&fit=crop', rating: 4.8, reviews: 22, isNew: true },
      { id: 603, name: 'Miroir Cadre Teck Massif', price: 28000, image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80&fit=crop', rating: 4.4, reviews: 8 }
    ]
  },
  {
    slug: 'atelier-oumar',
    name: 'Atelier Oumar',
    description: "Maroquinerie fine et création d'accessoires en cuir premium. Chaque pièce est soigneusement travaillée à la main dans notre atelier de Bamako, alliant solidité et esthétique contemporaine.",
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=80&fit=crop&crop=faces',
    banner: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=1200&q=80&fit=crop',
    location: 'Bamako, Mali',
    rating: 4.8,
    reviews: 176,
    memberSince: 'Mai 2021',
    isVerified: true,
    isSuperSeller: true,
    categories: ['Mode', 'Accessoires', 'Cuir'],
    tabs: ['Sacs', 'Ceintures', 'Petite Maroquinerie', 'Avis'],
    products: [
      { id: 701, name: 'Sacoche en Cuir de Chameau', price: 42000, image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=800&q=80&fit=crop', rating: 4.9, reviews: 88 },
      { id: 702, name: 'Ceinture Tressée Cuir Véritable', price: 12000, image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80&fit=crop', rating: 4.6, reviews: 45 },
      { id: 703, name: 'Portefeuille Minimaliste', price: 15000, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80&fit=crop', rating: 4.7, reviews: 31, isNew: true },
      { id: 704, name: 'Porte-clés Cuir Personnalisable', price: 5000, image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=800&q=80&fit=crop', rating: 4.8, reviews: 12 }
    ]
  }
];
