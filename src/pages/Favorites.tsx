import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export function Favorites() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();
  
  const favoriteProducts = PRODUCTS.filter(p => favorites.includes(p.id));

  return (
    <div className="flex flex-col w-full px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto pb-20 pt-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-headline-lg text-headline-lg text-on-surface">Mes Favoris</h1>
        <span className="text-title-md text-on-surface-variant font-medium">{favorites.length} Articles</span>
      </div>
      
      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
          <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
            <span className="material-symbols-outlined text-[48px]">favorite</span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-headline-md text-headline-md text-on-surface">Vous n'avez pas encore de favoris</h2>
            <p className="text-body-md text-on-surface-variant max-w-md mx-auto">Découvrez des produits locaux et ajoutez-les à vos favoris pour les retrouver plus tard.</p>
          </div>
          <Link to="/catalogue" className="mt-4 px-8 py-3 bg-primary text-on-primary font-label-bold rounded-full hover:bg-primary/90 transition-colors">
            Explorer le catalogue
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-10 lg:gap-x-6 lg:gap-y-12 w-full">
          {favoriteProducts.map((product) => (
            <Link key={product.id} to={`/produit/${product.id}`} className="group flex flex-col bg-surface p-2 sm:p-3 rounded-[20px] sm:rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
              <div className="relative w-full aspect-square rounded-[14px] overflow-hidden mb-2 sm:mb-3 bg-surface-container">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={product.image} alt={product.name}/>
                {product.isVerified && (
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/90 backdrop-blur-sm text-blue-600 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-bold text-[9px] sm:text-[10px] tracking-wide flex items-center gap-1 shadow-sm border border-white/50">
                    <span className="material-symbols-outlined text-[10px] sm:text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> Vérifié
                  </div>
                )}
                {product.isPromo && (
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-error text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-bold text-[9px] sm:text-[10px] tracking-wide shadow-sm">
                    -15% PROMO
                  </div>
                )}
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(product.id);
                  }}
                  className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-error shadow-sm transition-colors opacity-100 transform duration-300">
                  <span className={`material-symbols-outlined translate-y-[1px] text-[16px] sm:text-[18px] ${isFavorite(product.id) ? 'text-error' : ''}`} style={isFavorite(product.id) ? {fontVariationSettings: "'FILL' 1"} : {}}>favorite</span>
                </button>
              </div>
              <div className="px-1 sm:px-2 flex flex-col flex-grow">
                <h3 className="font-title-sm text-[12px] sm:text-[15px] leading-snug text-on-surface font-semibold line-clamp-2 mb-1 sm:mb-1.5 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-[10px] sm:text-[13px] text-on-surface-variant mb-2 sm:mb-3 flex items-center gap-1.5 line-clamp-1">
                  <span className="material-symbols-outlined text-[12px] sm:text-[14px]">storefront</span> <span className="truncate">{product.seller}</span>
                </p>
                <div className="mt-auto flex items-end justify-between gap-1">
                  <div className="flex flex-col">
                    {product.oldPrice && (
                      <span className="text-[9px] sm:text-[11px] text-on-surface-variant line-through mb-0 sm:mb-0.5">{product.oldPrice} FCFA</span>
                    )}
                    <span className={`font-price-display text-[14px] sm:text-[17px] font-bold tracking-tight whitespace-nowrap ${product.isPromo ? 'text-error' : 'text-on-surface'}`}>{product.price} FCFA</span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart({
                        id: product.id,
                        name: product.name,
                        seller: product.seller,
                        sellerSlug: product.sellerSlug,
                        price: product.price,
                        image: product.image,
                        isVerified: product.isVerified || false,
                        outOfStock: false
                      });
                    }}
                    className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[16px] sm:text-[20px]">shopping_bag</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
