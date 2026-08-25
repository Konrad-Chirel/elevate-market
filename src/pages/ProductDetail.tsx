import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { PRODUCTS } from '../data/products';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const product = PRODUCTS.find(p => p.id === Number(id));
  
  const thumbnails = product?.images?.length ? product.images : (product ? [product.image] : []);
  const [mainImage, setMainImage] = useState(thumbnails[0] || "");
  const [qty, setQty] = useState(1);

  // Update mainImage if product changes (e.g., navigating from one product to another)
  useEffect(() => {
    if (product) {
      setMainImage(product.images?.[0] || product.image);
      setQty(1);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[50vh]">
        <span className="material-symbols-outlined text-[64px] text-on-surface-variant mb-4">search_off</span>
        <h1 className="text-headline-md text-on-surface mb-2">Produit introuvable</h1>
        <p className="text-body-md text-on-surface-variant mb-6">Le produit que vous recherchez n'existe pas ou n'est plus disponible.</p>
        <Link to="/catalogue" className="px-6 py-3 bg-primary text-on-primary rounded-full font-label-bold hover:bg-primary/90 transition-colors">
          Retour au catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="max-w-container-max w-full mx-auto px-margin-mobile lg:px-margin-desktop py-4 flex items-center gap-2 text-body-sm text-on-surface-variant overflow-x-auto whitespace-nowrap no-scrollbar">
        <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <Link to="/catalogue" className="hover:text-primary transition-colors">Catalogue</Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-on-surface font-semibold truncate">{product.name}</span>
      </div>

      <div className="max-w-container-max w-full mx-auto px-margin-mobile lg:px-margin-desktop pt-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-gutter lg:gap-12">
          
          {/* Product Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* Main Image */}
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-surface-container shadow-md group relative">
              <img src={mainImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {product.isPromo && (
                <div className="absolute top-4 left-4 bg-error text-white px-3 py-1 rounded-full text-label-bold flex items-center gap-1 shadow-sm">
                  -15% PROMO
                </div>
              )}
              {product.isVerified && !product.isPromo && (
                <div className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-label-bold flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">star</span> Top Vente
                </div>
              )}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleFavorite(product.id);
                }}
                className="absolute top-4 right-4 bg-surface/80 backdrop-blur-sm w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:text-error transition-colors shadow-sm">
                <span className={`material-symbols-outlined translate-y-[1px] ${isFavorite(product.id) ? 'text-error' : ''}`} style={isFavorite(product.id) ? {fontVariationSettings: "'FILL' 1"} : {}}>favorite</span>
              </button>
            </div>
            
            {/* Thumbnails */}
            {thumbnails.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {thumbnails.map((thumb, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setMainImage(thumb)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors bg-surface-container relative ${mainImage === thumb ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}
                  >
                    <img src={thumb} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2 lg:pt-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Artisanat Local</span>
              <div className="flex items-center text-tertiary-fixed-dim">
                {[1, 2, 3, 4].map(i => (
                  <span key={i} className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                ))}
                <span className="material-symbols-outlined text-[16px]">star_half</span>
              </div>
              <span className="text-body-sm text-on-surface-variant ml-1">{product.rating || 4.5} ({product.reviews || 0} avis)</span>
            </div>
            
            <h1 className="font-headline-md text-[24px] lg:text-[28px] leading-tight text-on-surface mb-4">{product.name}</h1>
            
            <div className={`font-price-display text-[28px] lg:text-[32px] mb-6 flex flex-wrap items-baseline gap-2 ${product.isPromo ? 'text-error' : 'text-primary'}`}>
              {product.price.toLocaleString('fr-FR')} <span className="text-body-lg text-on-surface-variant font-medium">FCFA</span>
              {product.oldPrice && (
                <span className="text-[18px] lg:text-title-md text-on-surface-variant line-through ml-1 lg:ml-2">{product.oldPrice.toLocaleString('fr-FR')} FCFA</span>
              )}
            </div>
            
            {/* Trust Box */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex items-start gap-4 mb-8 shadow-sm">
              <div className="bg-primary text-on-primary rounded-xl p-2.5 flex-shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[24px]" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
              </div>
              <div>
                <h4 className="font-title-lg text-[16px] text-on-surface font-bold mb-1">Paiement en séquestre</h4>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">Votre argent est protégé. Le vendeur n'est payé que lorsque vous confirmez la bonne réception du produit.</p>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h3 className="font-label-bold text-on-surface uppercase mb-3 border-b border-outline-variant/30 pb-2">Description du produit</h3>
              <p className="text-body-lg text-on-surface-variant mb-4 leading-relaxed whitespace-pre-line">
                {product.description || "Description non disponible pour ce produit."}
              </p>
              {product.features && product.features.length > 0 && (
                <ul className="space-y-2 text-body-sm text-on-surface-variant">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> {feature}</li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <div className="flex items-center bg-surface-container-low rounded-lg p-1 w-full sm:w-auto">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">remove</span></button>
                <input type="number" min="1" value={qty} readOnly className="w-10 h-10 text-center bg-transparent border-none text-[15px] text-on-surface font-semibold focus:ring-0 p-0" />
                <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">add</span></button>
              </div>
              <button 
                onClick={() => {
                  addToCart({
                    ...product,
                    isVerified: product.isVerified || false,
                    outOfStock: product.outOfStock || false,
                    qty: qty
                  });
                }}
                className="flex-1 bg-primary text-on-primary font-bold text-[13px] uppercase tracking-wider py-3 px-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                Ajouter au panier
              </button>
              <Link to="/paiement" className="flex-1 bg-surface border border-secondary text-secondary font-bold text-[13px] uppercase tracking-wider py-3 px-4 rounded-lg hover:bg-secondary/5 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                Acheter maintenant
              </Link>
            </div>
            
            {/* Mobile Money Logos */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-8">
              <span className="text-body-sm text-on-surface-variant w-full sm:w-auto text-center sm:text-left">Paiement sécurisé via :</span>
              <div className="flex gap-2 items-center justify-center">
                <span className="px-3 py-1 bg-[#ffcc00] text-black text-[10px] font-bold rounded shadow-sm">MTN MoMo</span>
                <span className="px-3 py-1 bg-[#005596] text-white text-[10px] font-bold rounded shadow-sm">MOOV Flooz</span>
                <span className="px-3 py-1 bg-[#1eb5fa] text-white text-[10px] font-bold rounded shadow-sm">WAVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seller Info Section */}
        <div className="mt-16 bg-surface-container-low rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={product.sellerAvatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fit=crop&crop=face"} alt={product.seller} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-title-lg text-on-surface font-bold">{product.seller}</h3>
                {product.isVerified && <span className="material-symbols-outlined text-[16px] text-blue-600" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>}
              </div>
              <p className="text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[14px]">location_on</span> {product.location || 'Abidjan, CI'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <Link to={`/boutique/${product.sellerSlug}`} className="flex-1 sm:flex-none text-center bg-white border border-outline-variant text-on-surface text-[13px] sm:text-sm font-label-bold px-3 sm:px-6 py-2.5 rounded-full hover:bg-surface-variant transition-colors shadow-sm whitespace-nowrap">
              Visiter la boutique
            </Link>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 bg-secondary text-white text-[13px] sm:text-sm font-label-bold px-3 sm:px-6 py-2.5 rounded-full hover:bg-secondary/90 transition-colors shadow-sm whitespace-nowrap">
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">chat</span>
              Contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
