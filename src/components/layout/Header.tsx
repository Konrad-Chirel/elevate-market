import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';

export function Header() {
  const location = useLocation();
  const { totalArticles } = useCart();
  const { favorites } = useFavorites();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const currentCategory = location.pathname === '/catalogue' ? location.state?.category : null;
  const isPromoActive = location.pathname === '/catalogue' && location.state?.isPromo;

  const getLinkClass = (category: string) => {
    const isActive = currentCategory === category;
    return `text-body-sm transition-all duration-200 relative ${
      isActive 
        ? 'text-primary font-bold' 
        : 'text-on-surface-variant hover:text-on-surface'
    }`;
  };

  const getPromoClass = () => {
    return `text-body-sm transition-all duration-200 relative ${
      isPromoActive 
        ? 'text-secondary font-bold' 
        : 'text-on-surface-variant hover:text-secondary'
    }`;
  };

  const getMainNavClass = (path: string) => {
    // For Acheter, we consider it active if we are on home, catalogue, or product pages
    const isAcheterActive = path === '/catalogue' && (location.pathname === '/' || location.pathname.startsWith('/catalogue') || location.pathname.startsWith('/produit'));
    const isActive = isAcheterActive || location.pathname.startsWith(path);
    
    return `text-body-sm font-label-bold transition-colors ${
      isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
    }`;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop h-20 flex items-center gap-4 md:gap-6">
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>

        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
            <span className="material-symbols-outlined text-xl">trending_up</span>
          </div>
          <span className="font-headline-md text-lg md:text-xl font-bold text-on-surface tracking-wide">Elevate<span className="text-primary">.</span></span>
        </Link>
        <div className="hidden md:block flex-1 max-w-2xl relative mx-gutter">
          <input className="w-full h-11 bg-surface-container-low border-none rounded-full pl-12 pr-4 text-body-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Rechercher des produits, des vendeurs..." type="text"/>
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
        </div>
        <nav className="hidden xl:flex items-center gap-6">
          <Link to="/catalogue" className={getMainNavClass('/catalogue')}>Acheter</Link>
          <Link to="/devenir-vendeur" className={getMainNavClass('/devenir-vendeur')}>Vendre</Link>
          <Link to="/aide" className={getMainNavClass('/aide')}>Aide</Link>
        </nav>
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <button className="md:hidden w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
          <Link to="/suivi-commande" className="hidden sm:flex p-2 text-on-surface-variant hover:text-primary relative" title="Suivi de commande">
            <span className="material-symbols-outlined">local_shipping</span>
          </Link>
          <Link 
            to="/favoris"
            className={`hidden sm:flex p-2 relative transition-colors ${location.pathname.startsWith('/favoris') ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            <span className="material-symbols-outlined">favorite</span>
            {favorites.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-error text-[10px] text-white flex items-center justify-center rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>
          <Link 
            to="/panier" 
            className={`p-2 relative transition-colors ${location.pathname.startsWith('/panier') ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            {totalArticles > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-secondary text-[10px] text-white flex items-center justify-center rounded-full">
                {totalArticles}
              </span>
            )}
          </Link>
          <Link to="/connexion" className="hidden sm:flex items-center gap-2 pl-1 md:pl-2 bg-primary text-on-primary font-label-bold text-[12px] uppercase tracking-wider px-4 py-2 rounded-full hover:bg-primary/90 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[18px]">person</span>
            Connexion
          </Link>
        </div>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant/30 shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <Link to="/catalogue" onClick={() => setIsMobileMenuOpen(false)} className="text-body-lg font-bold text-on-surface flex items-center gap-3"><span className="material-symbols-outlined">shopping_bag</span> Acheter</Link>
          <Link to="/devenir-vendeur" onClick={() => setIsMobileMenuOpen(false)} className="text-body-lg font-bold text-on-surface flex items-center gap-3"><span className="material-symbols-outlined">storefront</span> Vendre</Link>
          <Link to="/aide" onClick={() => setIsMobileMenuOpen(false)} className="text-body-lg font-bold text-on-surface flex items-center gap-3"><span className="material-symbols-outlined">help</span> Aide</Link>
          <Link to="/suivi-commande" onClick={() => setIsMobileMenuOpen(false)} className="text-body-lg font-bold text-on-surface flex items-center gap-3 sm:hidden"><span className="material-symbols-outlined">local_shipping</span> Suivi de commande</Link>
          <Link to="/favoris" onClick={() => setIsMobileMenuOpen(false)} className="text-body-lg font-bold text-on-surface flex items-center gap-3 sm:hidden">
            <span className="material-symbols-outlined">favorite</span> Favoris {favorites.length > 0 && `(${favorites.length})`}
          </Link>
          <div className="h-[1px] w-full bg-outline-variant/30 my-2"></div>
          <Link to="/connexion" onClick={() => setIsMobileMenuOpen(false)} className="text-body-lg font-bold text-primary flex items-center gap-3"><span className="material-symbols-outlined">person</span> S'inscrire / Connexion</Link>
        </div>
      )}

      <div className="border-t border-outline-variant/30 bg-surface relative z-40">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop h-12 flex items-center gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link to="/catalogue" state={{ category: 'Mode' }} className={getLinkClass('Mode')}>
            Mode
            {currentCategory === 'Mode' && <span className="absolute -bottom-3.5 left-0 w-full h-[3px] bg-primary rounded-t-full"></span>}
          </Link>
          <Link to="/catalogue" state={{ category: 'Électronique' }} className={getLinkClass('Électronique')}>
            Électronique
            {currentCategory === 'Électronique' && <span className="absolute -bottom-3.5 left-0 w-full h-[3px] bg-primary rounded-t-full"></span>}
          </Link>
          <Link to="/catalogue" state={{ category: 'Maison' }} className={getLinkClass('Maison')}>
            Maison
            {currentCategory === 'Maison' && <span className="absolute -bottom-3.5 left-0 w-full h-[3px] bg-primary rounded-t-full"></span>}
          </Link>
          <Link to="/catalogue" state={{ category: 'Beauté' }} className={getLinkClass('Beauté')}>
            Beauté
            {currentCategory === 'Beauté' && <span className="absolute -bottom-3.5 left-0 w-full h-[3px] bg-primary rounded-t-full"></span>}
          </Link>
          <Link to="/catalogue" state={{ category: 'Alimentation' }} className={getLinkClass('Alimentation')}>
            Alimentation
            {currentCategory === 'Alimentation' && <span className="absolute -bottom-3.5 left-0 w-full h-[3px] bg-primary rounded-t-full"></span>}
          </Link>
          <Link to="/catalogue" state={{ category: 'Artisanat' }} className={getLinkClass('Artisanat')}>
            Artisanat
            {currentCategory === 'Artisanat' && <span className="absolute -bottom-3.5 left-0 w-full h-[3px] bg-primary rounded-t-full"></span>}
          </Link>
          <Link to="/catalogue" state={{ isPromo: true }} className={getPromoClass()}>
            Promotions
            {isPromoActive && <span className="absolute -bottom-3.5 left-0 w-full h-[3px] bg-secondary rounded-t-full"></span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
