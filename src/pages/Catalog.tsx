import { useState, useMemo, useEffect } from 'react';
import { Link, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

import { PRODUCTS, CATEGORIES } from '../data/products';

export function Catalog() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  // 2. States for Filters and Sorting
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [onlyVerified, setOnlyVerified] = useState<boolean>(false);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [onlyPromo, setOnlyPromo] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('recommandes');
  
  // Handle location state
  useEffect(() => {
    if (location.state) {
      if (location.state.category) {
        setSelectedCategories([location.state.category]);
        setOnlyPromo(false);
      } else if (location.state.isPromo) {
        setOnlyPromo(true);
        setSelectedCategories([]);
      }
    }
  }, [location.state]);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  
  const { addToCart } = useCart();
  const { toggleFavorite } = useFavorites();

  // 3. Derived State: Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        (p.description && p.description.toLowerCase().includes(q)) ||
        p.seller.toLowerCase().includes(q)
      );
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Filter by promo
    if (onlyPromo) {
      result = result.filter(p => p.isPromo);
    }

    // Filter by price
    const min = minPrice ? parseInt(minPrice, 10) : 0;
    const max = maxPrice ? parseInt(maxPrice, 10) : Infinity;
    if (min > 0) result = result.filter(p => p.price >= min);
    if (max < Infinity) result = result.filter(p => p.price <= max);

    // Filter by verified status
    if (onlyVerified) {
      result = result.filter(p => p.isVerified);
    }

    // Filter by rating
    if (minRating !== null) {
      result = result.filter(p => p.rating >= minRating);
    }

    // Sort
    if (sortBy === 'prix-croissant') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'prix-decroissant') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'nouveautes') {
      result.sort((a, b) => new Date(b.dateAdded || 0).getTime() - new Date(a.dateAdded || 0).getTime());
    }

    return result;
  }, [selectedCategories, minPrice, maxPrice, onlyVerified, minRating, sortBy, onlyPromo, searchQuery]);

  // Reset pagination when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [selectedCategories, minPrice, maxPrice, onlyVerified, minRating, sortBy, onlyPromo, searchQuery]);

  // Paginated products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Event handlers
  const handleCategoryToggle = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setMinPrice('');
    setMaxPrice('');
    setOnlyVerified(false);
    setMinRating(null);
    setOnlyPromo(false);
    // Remove search params from URL
    if (searchQuery) {
      navigate('/catalogue', { replace: true });
    }
  };

  const handleAddToCart = (e: React.MouseEvent, product: typeof PRODUCTS[0]) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleFavorite = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(productId);
  };

  const sortLabels: Record<string, string> = {
    'recommandes': 'Recommandés',
    'prix-croissant': 'Prix croissant',
    'prix-decroissant': 'Prix décroissant',
    'nouveautes': 'Nouveautés'
  };

  return (
    <div className="flex flex-col w-full relative">

      {/* Page Header */}
      <div className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/30 pb-6">
          <div className="flex flex-col gap-2">
            <h1 className="font-display-lg-mobile md:font-display-lg text-on-surface tracking-tight">
              {searchQuery ? `Résultats pour "${searchQuery}"` : 'Tout le catalogue'}
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl">
              {searchQuery 
                ? `Découvrez les produits et vendeurs correspondant à votre recherche.` 
                : `Découvrez des milliers de produits locaux et authentiques, vérifiés pour votre sécurité.`}
            </p>
          </div>
          {/* Sorting & Actions */}
          <div className="flex items-center gap-4 self-stretch md:self-auto">
            <div className="relative w-full md:w-auto">
              <button 
                className="w-full flex items-center justify-between gap-2 px-4 py-2 bg-surface rounded-lg border border-outline-variant text-body-sm font-label-bold text-on-surface-variant hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                onClick={() => setIsSortOpen(!isSortOpen)}
              >
                <span>Trier par: {sortLabels[sortBy]}</span>
                <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
              </button>
              <div className={`absolute top-full right-0 mt-2 w-48 bg-surface-container-lowest border border-outline-variant rounded-lg shadow-xl transition-all duration-200 z-20 overflow-hidden ${isSortOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                {Object.entries(sortLabels).map(([key, label]) => (
                  <button 
                    key={key}
                    onClick={() => { setSortBy(key); setIsSortOpen(false); }}
                    className={`w-full text-left px-4 py-3 text-body-sm transition-colors border-b border-outline-variant/10 last:border-0 ${sortBy === key ? 'text-primary bg-primary/5 font-bold' : 'text-on-surface hover:bg-surface-container-low'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <button 
              className="md:hidden flex items-center justify-center p-2 bg-surface-container-low rounded-lg text-on-surface-variant border border-outline-variant hover:text-primary transition-colors focus:ring-2 focus:ring-primary/50" 
              onClick={() => setIsMobileFilterOpen(true)}
            >
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pb-24">
        <div className="flex flex-col lg:flex-row gap-8 items-start relative">
          
          {/* Filters Sidebar */}
          <aside className={`${isMobileFilterOpen ? 'fixed inset-0 z-50 bg-surface h-screen overflow-y-auto p-6' : 'hidden'} md:flex flex-col w-full lg:w-64 shrink-0 lg:sticky lg:top-36 bg-surface-container-lowest rounded-xl md:p-6 md:shadow-sm border border-outline-variant/30`}>
            {isMobileFilterOpen && (
               <div className="flex justify-between items-center w-full mb-6 pb-4 border-b border-outline-variant/30 lg:hidden">
                 <span className="font-headline-md text-on-surface">Filtres</span>
                 <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 -mr-2 text-on-surface-variant hover:text-error rounded-full bg-surface-container"><span className="material-symbols-outlined">close</span></button>
               </div>
            )}
            
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline-md text-on-surface text-[18px]">Filtres</h2>
              <button onClick={clearAllFilters} className="text-body-sm font-label-bold text-on-surface-variant hover:text-primary transition-colors">Effacer</button>
            </div>
            
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-on-surface mb-3 uppercase tracking-wide">Catégories</h3>
              <div className="flex flex-col gap-3">
                {CATEGORIES.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-5 h-5 border border-outline rounded bg-surface group-hover:border-primary transition-colors">
                      <input 
                        type="checkbox" 
                        className="peer sr-only" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => handleCategoryToggle(cat)}
                      />
                      <span className="material-symbols-outlined text-[16px] text-on-primary absolute opacity-0 peer-checked:opacity-100 transition-opacity peer-checked:bg-primary rounded-[3px] inset-[1px] flex items-center justify-center">check</span>
                    </div>
                    <span className={`text-body-sm transition-colors ${selectedCategories.includes(cat) ? 'text-primary font-bold' : 'text-on-surface group-hover:text-primary'}`}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-on-surface mb-3 uppercase tracking-wide">Prix (FCFA)</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-body-sm font-medium">Min</span>
                    <input 
                      type="number" 
                      placeholder="0" 
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg py-2 pl-10 pr-2 focus:ring-2 focus:ring-primary focus:border-primary text-body-sm transition-all" 
                    />
                  </div>
                  <span className="text-on-surface-variant">-</span>
                  <div className="flex-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-body-sm font-medium">Max</span>
                    <input 
                      type="number" 
                      placeholder="100000" 
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg py-2 pl-11 pr-2 focus:ring-2 focus:ring-primary focus:border-primary text-body-sm transition-all" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Status */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-on-surface mb-3 uppercase tracking-wide">Confiance</h3>
              <label className="flex items-center gap-3 cursor-pointer group p-3 bg-surface-container-low/50 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors">
                <div className="relative flex items-center justify-center w-5 h-5 border border-outline rounded bg-surface group-hover:border-primary transition-colors shrink-0">
                  <input 
                    type="checkbox" 
                    className="peer sr-only" 
                    checked={onlyVerified}
                    onChange={(e) => setOnlyVerified(e.target.checked)}
                  />
                  <span className="material-symbols-outlined text-[16px] text-on-primary absolute opacity-0 peer-checked:opacity-100 transition-opacity peer-checked:bg-primary rounded-[3px] inset-[1px] flex items-center justify-center">check</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-body-sm font-bold text-on-surface">Vendeurs Vérifiés</span>
                  <span className="text-body-sm text-on-surface-variant text-[11px] leading-snug mt-0.5">Uniquement les marchands approuvés par Elevate.</span>
                </div>
              </label>
            </div>

            {/* Rating */}
            <div>
              <h3 className="text-sm font-bold text-on-surface mb-3 uppercase tracking-wide">Avis minimum</h3>
              <div className="flex flex-col gap-3">
                {[4, 5].map((rating) => (
                  <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-outline bg-surface group-hover:border-primary transition-colors shrink-0">
                      <input 
                        type="radio" 
                        name="rating" 
                        className="peer sr-only" 
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                      />
                      <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="flex flex-wrap items-center text-tertiary-container gap-0.5 mt-1">
                      {Array(5).fill(0).map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: i < rating ? "'FILL' 1" : "" }}>
                          star
                        </span>
                      ))}
                      {rating < 5 && <span className="text-body-sm text-on-surface ml-1 whitespace-nowrap">&amp; plus</span>}
                    </div>
                  </label>
                ))}
                {minRating !== null && (
                  <button onClick={() => setMinRating(null)} className="text-[12px] text-on-surface-variant text-left hover:text-error mt-1 ml-8">Annuler le filtre d'avis</button>
                )}
              </div>
            </div>
            
            {isMobileFilterOpen && (
               <button 
                 onClick={() => setIsMobileFilterOpen(false)}
                 className="mt-8 w-full bg-primary text-white py-3 rounded-xl font-bold"
               >
                 Voir les {filteredProducts.length} résultats
               </button>
            )}
          </aside>

          {/* Main Product Grid */}
          <div className="flex-1 w-full">
            {/* Active Filters Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-6 min-h-[32px]">
              {selectedCategories.map(cat => (
                <div key={cat} className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-full border border-outline-variant/50 text-body-sm text-on-surface group">
                  {cat}
                  <button onClick={() => handleCategoryToggle(cat)} className="flex items-center justify-center text-on-surface-variant group-hover:text-error transition-colors"><span className="material-symbols-outlined text-[16px]">close</span></button>
                </div>
              ))}
              
              {onlyVerified && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-tertiary-container/10 text-on-tertiary-container rounded-full border border-tertiary-container/30 text-body-sm group font-medium">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-container">verified</span>
                  Vérifiés uniquement
                  <button onClick={() => setOnlyVerified(false)} className="flex items-center justify-center text-tertiary-container/70 group-hover:text-error transition-colors"><span className="material-symbols-outlined text-[16px]">close</span></button>
                </div>
              )}

              {onlyPromo && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-error/10 text-error rounded-full border border-error/30 text-body-sm group font-medium">
                  <span className="material-symbols-outlined text-[14px] text-error">local_offer</span>
                  Promotions uniquement
                  <button onClick={() => setOnlyPromo(false)} className="flex items-center justify-center text-error/70 group-hover:text-error transition-colors"><span className="material-symbols-outlined text-[16px]">close</span></button>
                </div>
              )}

              {(minPrice || maxPrice) && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-full border border-outline-variant/50 text-body-sm text-on-surface group">
                  Prix: {minPrice || '0'} - {maxPrice || 'Max'}
                  <button onClick={() => {setMinPrice(''); setMaxPrice('');}} className="flex items-center justify-center text-on-surface-variant group-hover:text-error transition-colors"><span className="material-symbols-outlined text-[16px]">close</span></button>
                </div>
              )}

              {minRating && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-full border border-outline-variant/50 text-body-sm text-on-surface group">
                  {minRating} étoiles & plus
                  <button onClick={() => setMinRating(null)} className="flex items-center justify-center text-on-surface-variant group-hover:text-error transition-colors"><span className="material-symbols-outlined text-[16px]">close</span></button>
                </div>
              )}

              {(selectedCategories.length > 0 || onlyVerified || minPrice || maxPrice || minRating || onlyPromo) && (
                <button onClick={clearAllFilters} className="text-body-sm text-primary font-medium hover:underline ml-2">Effacer tout</button>
              )}
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="text-body-sm text-on-surface-variant font-medium">{filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}</span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 bg-surface-container-lowest rounded-2xl border border-dashed border-outline-variant">
                <span className="material-symbols-outlined text-[48px] text-outline-variant mb-4">search_off</span>
                <h3 className="font-headline-md text-on-surface mb-2">Aucun produit trouvé</h3>
                <p className="text-on-surface-variant text-center max-w-md">Nous n'avons trouvé aucun produit correspondant à vos critères de recherche. Essayez d'élargir vos filtres.</p>
                <button onClick={clearAllFilters} className="mt-6 px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-fixed-dim transition-colors">
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {paginatedProducts.map((product) => (
                  <article key={product.id} className="group flex flex-col bg-surface-container-lowest rounded-[20px] md:rounded-[24px] border border-outline-variant/30 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative">
                    <button 
                      onClick={(e) => handleToggleFavorite(e, product.id)}
                      className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-surface/80 backdrop-blur-sm rounded-full text-on-surface-variant hover:text-error hover:bg-surface transition-colors shadow-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-1 md:group-hover:translate-y-0 duration-300"
                    >
                      <span className="material-symbols-outlined text-[18px]">favorite</span>
                    </button>
                    <Link to={`/produit/${product.id}`} className="relative w-full aspect-square overflow-hidden bg-surface-container-low block">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={product.name} src={product.image}/>
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {product.isPromo && <span className="px-2 py-0.5 bg-error text-white text-[9px] font-bold rounded-full shadow-sm tracking-wide">- PROMO</span>}
                        {product.isNew && <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[9px] font-bold rounded-full shadow-sm tracking-wide">NOUVEAU</span>}
                      </div>
                    </Link>
                    <div className="p-3 md:p-4 flex flex-col flex-1">
                      <div className="flex items-center gap-1 mb-1">
                        <Link to={`/boutique/${product.seller.toLowerCase().replace(/\s+/g, '-')}`} className="text-[11px] md:text-body-sm text-on-surface-variant hover:text-primary truncate transition-colors line-clamp-1">{product.seller}</Link>
                        {product.isVerified && <span className="material-symbols-outlined text-[12px] md:text-[14px] text-tertiary-container shrink-0" style={{fontVariationSettings: "'FILL' 1"}} title="Vendeur Vérifié">verified</span>}
                      </div>
                      <Link to={`/produit/${product.id}`}>
                        <h3 className="font-title-sm md:font-title-lg text-on-surface text-[13px] md:text-[15px] leading-tight mb-3 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h3>
                      </Link>
                      <div className="mt-auto pt-3 border-t border-outline-variant/20 flex items-end justify-between">
                        <div className="flex flex-col">
                          {product.oldPrice && <span className="text-body-sm text-on-surface-variant line-through text-[9px] md:text-[11px]">{product.oldPrice.toLocaleString('fr-FR')} FCFA</span>}
                          <span className={`font-price-display text-[14px] md:text-[16px] ${product.isPromo ? 'text-error' : 'text-on-surface'}`}>
                            {product.price.toLocaleString('fr-FR')} <span className="text-[9px] md:text-[11px] font-normal">FCFA</span>
                          </span>
                        </div>
                        <button 
                          onClick={(e) => handleAddToCart(e, product)}
                          className="w-8 h-8 md:w-10 md:h-10 shrink-0 flex items-center justify-center bg-surface-container-high text-on-surface rounded-lg md:rounded-xl hover:bg-primary hover:text-white transition-colors shadow-sm hover:shadow-md hover:scale-105"
                        >
                          <span className="material-symbols-outlined text-[16px] md:text-[20px]">shopping_bag</span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center mt-12 gap-2">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button 
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-label-bold transition-colors ${
                      currentPage === page 
                        ? 'bg-primary text-on-primary shadow-sm' 
                        : 'border border-outline-variant text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
