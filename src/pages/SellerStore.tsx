import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { SELLERS } from '../data/sellers';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

export function SellerStore() {
  const { id } = useParams<{ id: string }>();
  const seller = SELLERS.find(s => s.slug === id);
  const [activeTab, setActiveTab] = useState('Boutique');
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!seller) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <span className="material-symbols-outlined text-[64px] text-on-surface-variant/50 mb-4">sentiment_dissatisfied</span>
        <h1 className="font-display-md text-on-surface mb-2">Boutique introuvable</h1>
        <p className="font-body-lg text-on-surface-variant mb-8 max-w-md">La boutique que vous recherchez n'existe pas ou n'est plus disponible sur Elevate.</p>
        <Link to="/vendeurs" className="h-12 px-6 bg-primary text-on-primary font-label-bold uppercase rounded-xl flex items-center justify-center hover:bg-primary/90 transition-colors shadow-sm">
          Découvrir nos vendeurs
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Seller Banner */}
      <div className="w-full h-[200px] md:h-[320px] relative bg-surface-variant overflow-hidden">
        <img src={seller.banner} alt={`Bannière de ${seller.name}`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full relative -mt-16 md:-mt-24 z-10">
        <div className="bg-surface rounded-2xl md:rounded-[32px] p-6 md:p-10 shadow-lg border border-outline-variant/20 mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            <div className="w-24 h-24 md:w-40 md:h-40 shrink-0 rounded-2xl border-4 border-surface overflow-hidden bg-surface-variant shadow-md">
              <img src={seller.avatar} alt={seller.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 flex flex-col pt-2">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="font-display-sm md:font-display-md text-on-surface m-0">{seller.name}</h1>
                    {seller.isVerified && (
                      <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}} title="Vendeur Vérifié">verified</span>
                    )}
                  </div>
                  <p className="font-body-md text-on-surface-variant flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">location_on</span> {seller.location}
                  </p>
                </div>
                
                <div className="flex gap-3 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none h-11 px-6 bg-primary text-on-primary font-label-bold uppercase rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    Contacter
                  </button>
                  <button className="w-11 h-11 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-surface-container-highest transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">share</span>
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-tertiary-container text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="font-label-bold text-on-surface">{seller.rating}</span>
                  <span className="text-on-surface-variant font-body-sm">({seller.reviews} avis)</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-outline-variant hidden sm:block"></div>
                <div className="font-body-sm text-on-surface-variant flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">store</span> 
                  Membre depuis {seller.memberSince}
                </div>
                {seller.isSuperSeller && (
                  <>
                    <div className="w-1 h-1 rounded-full bg-outline-variant hidden sm:block"></div>
                    <div className="font-label-bold text-secondary text-[12px] uppercase px-2.5 py-1 bg-secondary/10 rounded-md">
                      Super Vendeur
                    </div>
                  </>
                )}
              </div>
              
              <p className="font-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                {seller.description}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-outline-variant/30 mb-8 overflow-x-auto scrollbar-hide">
          {seller.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-label-bold uppercase tracking-wide whitespace-nowrap transition-colors relative ${
                activeTab === tab 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-t-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'Avis' ? (
            <div className="bg-surface-container-lowest rounded-[24px] p-6 md:p-8 shadow-sm border border-outline-variant/20">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-8">
                <div className="text-center">
                  <div className="text-[48px] font-display-lg font-bold text-on-surface leading-none">{seller.rating}</div>
                  <div className="flex text-tertiary justify-center mt-2 mb-1">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star_half</span>
                  </div>
                  <div className="text-body-sm text-on-surface-variant">Basé sur {seller.reviews} avis</div>
                </div>
                <div className="w-full md:w-[2px] h-[2px] md:h-20 bg-outline-variant/30"></div>
                <div className="flex-1">
                  <h3 className="font-display-sm text-[20px] text-on-surface mb-2">Avis récents</h3>
                  <p className="text-body-sm text-on-surface-variant">Découvrez ce que nos clients disent des produits de {seller.name}.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface p-6 rounded-xl shadow-sm border border-outline-variant/20 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">M</div>
                      <div>
                        <h4 className="font-bold text-sm">Marie D.</h4>
                        <span className="text-[10px] text-on-surface-variant">Il y a 2 semaines</span>
                      </div>
                    </div>
                    <div className="flex text-tertiary text-sm">
                      <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    </div>
                  </div>
                  <p className="text-body-sm text-on-surface-variant italic">"Qualité exceptionnelle ! Les articles sont magnifiques et conformes aux photos. Livraison rapide et soignée. Je recommande vivement !"</p>
                </div>
                <div className="bg-surface p-6 rounded-xl shadow-sm border border-outline-variant/20 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold">J</div>
                      <div>
                        <h4 className="font-bold text-sm">Jean-Marc T.</h4>
                        <span className="text-[10px] text-on-surface-variant">Il y a 1 mois</span>
                      </div>
                    </div>
                    <div className="flex text-tertiary text-sm">
                      <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                    </div>
                  </div>
                  <p className="text-body-sm text-on-surface-variant italic">"Très satisfait de mon achat. Un vrai savoir-faire, le vendeur est à l'écoute. Parfait pour offrir."</p>
                </div>
              </div>
            </div>
          ) : ['À Propos', 'SAV', 'Conseils', 'Politiques'].includes(activeTab) ? (
            <div className="bg-surface-container-lowest rounded-[24px] p-8 md:p-12 text-center border border-outline-variant/20 shadow-sm flex flex-col items-center justify-center min-h-[300px]">
              <span className="material-symbols-outlined text-[48px] text-primary/40 mb-4">article</span>
              <h3 className="font-display-sm text-[24px] text-on-surface mb-2">{activeTab}</h3>
              <p className="text-body-lg text-on-surface-variant max-w-lg">
                Le contenu de la section "{activeTab}" de la boutique {seller.name} sera bientôt disponible. 
              </p>
            </div>
          ) : (() => {
            let displayedProducts = seller.products;
            if (activeTab === 'Nouveautés') {
              displayedProducts = seller.products.filter(p => p.isNew);
            } else if (activeTab === 'Promotions') {
              displayedProducts = seller.products.filter(p => p.price < 20000); // Demo filter
            } else if (!['Boutique', 'Collection', 'Meubles', 'Sacs', 'Tous les produits'].includes(activeTab)) {
              // For other category tabs (like "Robes", "Déco"), show a subset of products to simulate filtering
              displayedProducts = seller.products.slice(0, Math.max(1, Math.floor(seller.products.length / 2)));
            }

            if (displayedProducts.length === 0) {
              return (
                <div className="bg-surface-container-lowest rounded-[24px] p-8 md:p-12 text-center border border-outline-variant/20 shadow-sm flex flex-col items-center justify-center min-h-[300px]">
                  <span className="material-symbols-outlined text-[48px] text-on-surface-variant/40 mb-4">inventory_2</span>
                  <h3 className="font-display-sm text-[24px] text-on-surface mb-2">Aucun produit</h3>
                  <p className="text-body-lg text-on-surface-variant max-w-lg">
                    Il n'y a pas encore d'articles disponibles dans la catégorie "{activeTab}".
                  </p>
                </div>
              );
            }

            return (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {displayedProducts.map((product) => (
                  <Link key={product.id} to={`/produit/${product.id}`} className="group bg-surface rounded-2xl md:rounded-[24px] p-2 md:p-3 shadow-sm hover:shadow-xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-300 flex flex-col">
                    <div className="w-full aspect-square relative rounded-xl md:rounded-[14px] overflow-hidden mb-3 bg-surface-container-low">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      {product.isNew && (
                        <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-secondary text-on-secondary px-2 py-0.5 md:py-1 rounded-full font-label-bold text-[9px] md:text-[10px] uppercase shadow-sm">
                          Nouveau
                        </div>
                      )}
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleFavorite(product.id);
                        }}
                        className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-8 h-8 md:w-9 md:h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:text-error shadow-sm transition-all md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 text-on-surface">
                        <span className={`material-symbols-outlined text-[18px] ${isFavorite(product.id) ? 'text-error' : ''}`} style={isFavorite(product.id) ? {fontVariationSettings: "'FILL' 1"} : {}}>favorite</span>
                      </button>
                    </div>
                    <div className="px-1 md:px-2 flex flex-col flex-1">
                      <h3 className="font-title-sm text-on-surface mb-1 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h3>
                      <div className="flex items-center gap-1 mb-2 md:mb-3">
                        <span className="material-symbols-outlined text-tertiary-container text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="font-label-bold text-on-surface text-[12px] md:text-[14px]">{product.rating}</span>
                        <span className="text-on-surface-variant text-[11px] md:text-[12px]">({product.reviews})</span>
                      </div>
                      <div className="mt-auto flex items-end justify-between">
                        <span className="font-price-display font-bold text-on-surface tracking-tight text-[15px] md:text-[17px]">{product.price.toLocaleString('fr-FR')} FCFA</span>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addToCart({
                              id: product.id,
                              name: product.name,
                              seller: seller.name,
                              sellerSlug: seller.slug,
                              price: product.price,
                              image: product.image,
                              isVerified: seller.isVerified,
                              outOfStock: false
                            });
                          }}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-primary hover:text-white transition-colors active:scale-95 shadow-sm"
                        >
                          <span className="material-symbols-outlined text-[18px] md:text-[20px]">shopping_bag</span>
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
