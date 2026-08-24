import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

export function Home() {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest -mt-[128px] pt-[160px] pb-24 lg:pt-[200px] lg:pb-32">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface shadow-sm border border-outline-variant/30 text-primary font-label-bold uppercase tracking-widest text-[10px]">
              <span className="material-symbols-outlined text-[14px]">shield_lock</span>
              Paiement 100% Sécurisé
            </div>
            
            <h1 className="font-display-lg text-on-surface text-4xl sm:text-5xl lg:text-[64px] leading-[1.1] font-extrabold tracking-tight">
              Le commerce de <br/>
              <span className="text-primary relative inline-block">
                confiance
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-secondary/40" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 100 20">
                  <path d="M0,10 Q50,20 100,10 L100,20 L0,20 Z"></path>
                </svg>
              </span><br/>
              en Afrique de l'Ouest
            </h1>
            
            <p className="font-body-lg text-on-surface-variant text-lg lg:text-xl max-w-lg leading-relaxed">
              Achetez localement, payez en toute sécurité via Mobile Money. La plateforme oàÂ¹ l'authenticité rencontre l'innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 w-full sm:w-auto">
              <Link to="/catalogue" className="w-full sm:w-auto justify-center bg-primary hover:bg-primary-fixed-dim text-white px-8 py-4 rounded-xl font-title-lg text-[16px] font-bold shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group">
                Commencer vos achats
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              
              <div className="flex items-center gap-4 bg-surface p-3 rounded-2xl shadow-sm border border-outline-variant/20 hidden sm:flex">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-surface object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop&crop=face" alt="merchant"/>
                  <img className="w-10 h-10 rounded-full border-2 border-surface object-cover shadow-sm" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80&fit=crop&crop=face" alt="customer"/>
                  <img className="w-10 h-10 rounded-full border-2 border-surface object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80&fit=crop&crop=face" alt="artisan"/>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-bold text-[13px] font-bold text-on-surface leading-tight">+10k Utilisateurs</span>
                  <span className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-yellow-400 text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span> 4.9/5 TrustPilot
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image Hero */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/4] rounded-[40px] overflow-hidden shadow-2xl border-8 border-surface">
              <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80&fit=crop" alt="African Market" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-surface rounded-2xl p-4 shadow-xl border border-outline-variant/20 flex items-center gap-4 animate-[bounce_3s_infinite]">
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">local_shipping</span>
              </div>
              <div>
                <h4 className="font-label-bold font-bold text-on-surface">Livraison Rapide</h4>
                <p className="text-xs text-on-surface-variant">Partout en Afrique</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="relative z-20 -mt-12 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest p-6 md:p-8 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 border border-outline-variant/30 flex flex-col gap-5 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
            </div>
            <div>
              <h3 className="font-title-lg text-on-surface mb-2 font-bold">Paiement en Séquestre</h3>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">Vos fonds sont protégés jusqu'à ce que vous confirmiez la réception de votre commande. Zéro risque.</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 md:p-8 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 border border-outline-variant/30 flex flex-col gap-5 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>account_balance_wallet</span>
            </div>
            <div>
              <h3 className="font-title-lg text-on-surface mb-2 font-bold">Mobile Money & Carte</h3>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">Payez avec MTN, Moov, Wave ou par carte bancaire. Des transactions fluides et adaptées à vos habitudes.</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 md:p-8 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 border border-outline-variant/30 flex flex-col gap-5 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>how_to_reg</span>
            </div>
            <div>
              <h3 className="font-title-lg text-on-surface mb-2 font-bold">Vendeurs Vérifiés KYC</h3>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">Chaque marchand est identifié et certifié par notre équipe pour vous garantir des produits authentiques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-headline-md text-on-surface mb-2">Explorez par Catégorie</h2>
            <p className="font-body-sm text-on-surface-variant">Trouvez exactement ce que vous cherchez parmi nos vendeurs certifiés.</p>
          </div>
          <a className="hidden md:flex items-center gap-1 font-label-bold text-primary hover:text-surface-tint transition-colors uppercase tracking-wide text-sm" href="#">
            Voir tout <span className="material-symbols-outlined text-sm">chevron_right</span>
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Link to="/catalogue" className="group flex flex-col items-center p-6 rounded-3xl bg-surface shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/20 text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary group-hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>checkroom</span>
            </div>
            <span className="font-title-lg text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Mode</span>
          </Link>
          <Link to="/catalogue" className="group flex flex-col items-center p-6 rounded-3xl bg-surface shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/20 text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary group-hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>devices</span>
            </div>
            <span className="font-title-lg text-sm font-bold text-on-surface group-hover:text-secondary transition-colors">àâ€°lectronique</span>
          </Link>
          <Link to="/catalogue" className="group flex flex-col items-center p-6 rounded-3xl bg-surface shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/20 text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-tertiary/10 shadow-sm flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary group-hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>chair</span>
            </div>
            <span className="font-title-lg text-sm font-bold text-on-surface group-hover:text-tertiary transition-colors">Maison</span>
          </Link>
          <Link to="/catalogue" className="group flex flex-col items-center p-6 rounded-3xl bg-surface shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/20 text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 shadow-sm flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>face_retouching_natural</span>
            </div>
            <span className="font-title-lg text-sm font-bold text-on-surface group-hover:text-rose-500 transition-colors">Beautéé</span>
          </Link>
          <Link to="/catalogue" className="group flex flex-col items-center p-6 rounded-3xl bg-surface shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/20 text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 shadow-sm flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>local_dining</span>
            </div>
            <span className="font-title-lg text-sm font-bold text-on-surface group-hover:text-amber-500 transition-colors">Alimentation</span>
          </Link>
          <Link to="/catalogue" className="group flex flex-col items-center p-6 rounded-3xl bg-surface shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/20 text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 shadow-sm flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>palette</span>
            </div>
            <span className="font-title-lg text-sm font-bold text-on-surface group-hover:text-indigo-500 transition-colors">Artisanat</span>
          </Link>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-12 bg-surface-container-lowest max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-2 h-8 bg-secondary rounded-full"></div>
          <h2 className="font-headline-md text-on-surface">Sélection du Jour</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-10 lg:gap-x-6 lg:gap-y-12">
          {/* Product 1 */}
          <Link to="/produit/1" className="group flex flex-col bg-surface p-2 sm:p-3 rounded-[20px] sm:rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
            <div className="relative w-full aspect-square rounded-[14px] overflow-hidden mb-2 sm:mb-3 bg-surface-container">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Baskets_in_Haikou_03.jpg" alt="Basket"/>
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/90 backdrop-blur-sm text-blue-600 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-bold text-[9px] sm:text-[10px] tracking-wide flex items-center gap-1 shadow-sm border border-white/50">
                <span className="material-symbols-outlined text-[10px] sm:text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> Vérifié
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleFavorite(1);
                }}
                className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-error shadow-sm transition-colors opacity-100 sm:opacity-0 group-hover:opacity-100 transform sm:translate-y-2 group-hover:translate-y-0 duration-300">
                <span className={`material-symbols-outlined translate-y-[1px] text-[16px] sm:text-[18px] ${isFavorite(1) ? 'text-error' : ''}`} style={isFavorite(1) ? {fontVariationSettings: "'FILL' 1"} : {}}>favorite</span>
              </button>
            </div>
            <div className="px-1 sm:px-2 flex flex-col flex-grow">
              <h3 className="font-title-sm text-[12px] sm:text-[15px] leading-snug text-on-surface font-semibold line-clamp-2 mb-1 sm:mb-1.5 group-hover:text-primary transition-colors">Panier Tressé Artisanal "Cotonou"</h3>
              <p className="text-[10px] sm:text-[13px] text-on-surface-variant mb-2 sm:mb-3 flex items-center gap-1.5 line-clamp-1">
                <span className="material-symbols-outlined text-[12px] sm:text-[14px]">storefront</span> <span className="truncate">Artisanat Benin</span>
              </p>
              <div className="mt-auto flex items-end justify-between gap-1">
                <span className="font-price-display text-[14px] sm:text-[17px] font-bold text-on-surface tracking-tight whitespace-nowrap">15 000 FCFA</span>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart({
                      id: 1,
                      name: 'Panier Tressé Artisanal "Cotonou"',
                      seller: 'Artisanat Benin',
                      sellerSlug: 'artisanat-benin',
                      price: 15000,
                      image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Baskets_in_Haikou_03.jpg',
                      isVerified: true,
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

          {/* Product 2 */}
          <Link to="/produit/2" className="group flex flex-col bg-surface p-2 sm:p-3 rounded-[20px] sm:rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
            <div className="relative w-full aspect-square rounded-[14px] overflow-hidden mb-2 sm:mb-3 bg-surface-container">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80&fit=crop" alt="Phone"/>
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-error text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-bold text-[9px] sm:text-[10px] tracking-wide shadow-sm">
                -15% PROMO
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleFavorite(2);
                }}
                className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-error shadow-sm transition-colors opacity-100 sm:opacity-0 group-hover:opacity-100 transform sm:translate-y-2 group-hover:translate-y-0 duration-300">
                <span className={`material-symbols-outlined translate-y-[1px] text-[16px] sm:text-[18px] ${isFavorite(2) ? 'text-error' : ''}`} style={isFavorite(2) ? {fontVariationSettings: "'FILL' 1"} : {}}>favorite</span>
              </button>
            </div>
            <div className="px-1 sm:px-2 flex flex-col flex-grow">
              <h3 className="font-title-sm text-[12px] sm:text-[15px] leading-snug text-on-surface font-semibold line-clamp-2 mb-1 sm:mb-1.5 group-hover:text-primary transition-colors">Smartphone Y23 Pro 128GB</h3>
              <p className="text-[10px] sm:text-[13px] text-on-surface-variant mb-2 sm:mb-3 flex items-center gap-1.5 line-clamp-1">
                <span className="material-symbols-outlined text-[12px] sm:text-[14px]">storefront</span> <span className="truncate">Tech Store</span>
              </p>
              <div className="mt-auto flex items-end justify-between gap-1">
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[11px] text-on-surface-variant line-through mb-0 sm:mb-0.5">120 000 FCFA</span>
                  <span className="font-price-display text-[14px] sm:text-[17px] font-bold text-error tracking-tight whitespace-nowrap">102 000 FCFA</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart({
                      id: 2,
                      name: 'Smartphone Y23 Pro 128GB',
                      seller: 'Tech Store',
                      sellerSlug: 'tech-store',
                      price: 102000,
                      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80&fit=crop',
                      isVerified: false,
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

          {/* Product 3 */}
          <Link to="/produit/3" className="group flex flex-col bg-surface p-2 sm:p-3 rounded-[20px] sm:rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
            <div className="relative w-full aspect-square rounded-[14px] overflow-hidden mb-2 sm:mb-3 bg-surface-container">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://upload.wikimedia.org/wikipedia/commons/7/74/M%C3%A9lange_du_Beurre_de_karit%C3%A9_et_huiles_essentielles_dans_une_boite_pour_massage_02.jpg" alt="Cream"/>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleFavorite(3);
                }}
                className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-error shadow-sm transition-colors opacity-100 sm:opacity-0 group-hover:opacity-100 transform sm:translate-y-2 group-hover:translate-y-0 duration-300">
                <span className={`material-symbols-outlined translate-y-[1px] text-[16px] sm:text-[18px] ${isFavorite(3) ? 'text-error' : ''}`} style={isFavorite(3) ? {fontVariationSettings: "'FILL' 1"} : {}}>favorite</span>
              </button>
            </div>
            <div className="px-1 sm:px-2 flex flex-col flex-grow">
              <h3 className="font-title-sm text-[12px] sm:text-[15px] leading-snug text-on-surface font-semibold line-clamp-2 mb-1 sm:mb-1.5 group-hover:text-primary transition-colors">Beurre de Karité Bio Pur 500g</h3>
              <p className="text-[10px] sm:text-[13px] text-on-surface-variant mb-2 sm:mb-3 flex items-center gap-1.5 line-clamp-1">
                <span className="material-symbols-outlined text-[12px] sm:text-[14px]">storefront</span> <span className="truncate">Natura Beautéy</span>
              </p>
              <div className="mt-auto flex items-end justify-between gap-1">
                <span className="font-price-display text-[14px] sm:text-[17px] font-bold text-on-surface tracking-tight whitespace-nowrap">4 500 FCFA</span>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart({
                      id: 3,
                      name: 'Beurre de Karité Bio Pur 500g',
                      seller: 'Natura Beautéy',
                      sellerSlug: 'natura-Beautéy',
                      price: 4500,
                      image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/M%C3%A9lange_du_Beurre_de_karit%C3%A9_et_huiles_essentielles_dans_une_boite_pour_massage_02.jpg',
                      isVerified: false,
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

          {/* Product 4 */}
          <Link to="/produit/4" className="group flex flex-col bg-surface p-2 sm:p-3 rounded-[20px] sm:rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
            <div className="relative w-full aspect-square rounded-[14px] overflow-hidden mb-2 sm:mb-3 bg-surface-container">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Kitenge.jpg" alt="Dress"/>
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/90 backdrop-blur-sm text-blue-600 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-bold text-[9px] sm:text-[10px] tracking-wide flex items-center gap-1 shadow-sm border border-white/50">
                <span className="material-symbols-outlined text-[10px] sm:text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> Vérifié
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleFavorite(4);
                }}
                className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-error shadow-sm transition-colors opacity-100 sm:opacity-0 group-hover:opacity-100 transform sm:translate-y-2 group-hover:translate-y-0 duration-300">
                <span className={`material-symbols-outlined translate-y-[1px] text-[16px] sm:text-[18px] ${isFavorite(4) ? 'text-error' : ''}`} style={isFavorite(4) ? {fontVariationSettings: "'FILL' 1"} : {}}>favorite</span>
              </button>
            </div>
            <div className="px-1 sm:px-2 flex flex-col flex-grow">
              <h3 className="font-title-sm text-[12px] sm:text-[15px] leading-snug text-on-surface font-semibold line-clamp-2 mb-1 sm:mb-1.5 group-hover:text-primary transition-colors">Robe Bogolan Coupe Droite</h3>
              <p className="text-[10px] sm:text-[13px] text-on-surface-variant mb-2 sm:mb-3 flex items-center gap-1.5 line-clamp-1">
                <span className="material-symbols-outlined text-[12px] sm:text-[14px]">storefront</span> <span className="truncate">Maison de Couture</span>
              </p>
              <div className="mt-auto flex items-end justify-between gap-1">
                <span className="font-price-display text-[14px] sm:text-[17px] font-bold text-on-surface tracking-tight whitespace-nowrap">25 000 FCFA</span>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart({
                      id: 4,
                      name: 'Robe Bogolan Coupe Droite',
                      seller: 'Maison de Couture',
                      sellerSlug: 'maison-couture',
                      price: 25000,
                      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Kitenge.jpg',
                      isVerified: true,
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
        </div>
      </section>

      {/* CTA Seller Banner */}
      <section className="py-20 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0B1120] text-white flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-xl md:pr-12 text-center md:text-left mb-6 sm:mb-8 md:mb-0">
            <h2 className="font-display-lg text-[32px] leading-[1.1] sm:text-4xl md:text-5xl lg:text-5xl mb-4 sm:mb-6 font-bold tracking-tight">
              Propulsez votre <span className="text-primary relative inline-block">entreprise.
                <svg className="absolute w-full h-3 sm:h-4 -bottom-1 left-0 text-secondary/40" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 100 20">
                  <path d="M0,10 Q50,20 100,10 L100,20 L0,20 Z"></path>
                </svg>
              </span>
            </h2>
            <p className="font-body-lg text-white/80 text-[15px] sm:text-lg mb-6 sm:mb-10 leading-relaxed">
              Rejoignez des milliers de marchands qui font grandir leur chiffre d'affaires sur Elevate Market. Inscription gratuite, outils de gestion puissants, paiements instantanés.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link to="/devenir-vendeur" className="bg-primary hover:bg-primary-fixed-dim text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-title-lg text-[15px] sm:text-[16px] shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all whitespace-nowrap text-center font-bold">
                Devenir Vendeur
              </Link>
              <button className="bg-white/5 backdrop-blur-md border-2 border-white/20 text-white hover:bg-white hover:text-[#0B1120] px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-title-lg text-[15px] sm:text-[16px] transition-all hover:-translate-y-0.5 hover:border-white whitespace-nowrap flex items-center justify-center gap-2 font-bold shadow-lg">
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">chat_bubble</span> Parler à un conseiller
              </button>
            </div>
          </div>
          <div className="relative z-10 w-full max-w-xs md:max-w-sm hidden sm:block">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 border-4 border-white/10">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop" alt="Dashboard"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
