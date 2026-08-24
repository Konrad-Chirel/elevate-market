import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { cartItems, updateQty, removeItem, totalArticles } = useCart();

  const activeItems = cartItems.filter(item => !item.outOfStock);
  const subtotal = activeItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = activeItems.length > 0 ? 2500 : 0;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col w-full px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto pb-20 pt-8">
      
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
          <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
            <span className="material-symbols-outlined text-[48px]">shopping_cart</span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-headline-md text-headline-md text-on-surface">Votre panier est vide</h2>
            <p className="text-body-md text-on-surface-variant max-w-md mx-auto">Parcourez notre catalogue pour découvrir des produits locaux authentiques.</p>
          </div>
          <Link to="/catalogue" className="mt-4 px-8 py-3 bg-primary text-on-primary font-label-bold rounded-full hover:bg-primary/90 transition-colors">
            Continuer mes achats
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Main Cart Area */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-6">
            <div className="flex items-end justify-between border-b border-outline-variant/30 pb-4">
              <h1 className="font-headline-lg text-headline-lg text-on-surface">Mon Panier</h1>
              <span className="text-title-md text-on-surface-variant font-medium">{totalArticles} Articles</span>
            </div>
            
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className={`flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-surface shadow-sm hover:shadow-md transition-shadow ${item.outOfStock ? 'opacity-60' : ''}`}>
                  <Link to={`/produit/${item.id}`} className="shrink-0">
                    <img className={`w-full sm:w-24 h-24 object-cover rounded-lg ${item.outOfStock ? 'grayscale' : ''}`} alt={item.name} src={item.image} />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between gap-2">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Link to={`/produit/${item.id}`}><h3 className="text-title-md font-bold text-on-surface hover:text-primary transition-colors leading-tight">{item.name}</h3></Link>
                          {item.isVerified && (
                            <span className="px-2 py-0.5 bg-tertiary-container text-on-tertiary-container rounded text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 shrink-0"><span className="material-symbols-outlined text-[10px]">verified</span>Vérifié</span>
                          )}
                        </div>
                        
                        {item.outOfStock ? (
                           <p className="text-body-sm text-error mt-1">Rupture de stock momentanée</p>
                        ) : (
                           <p className="text-body-sm text-on-surface-variant mt-1">Vendu par: <Link to={`/boutique/${item.sellerSlug}`} className="text-primary hover:underline cursor-pointer">{item.seller}</Link></p>
                        )}
                      </div>
                      <button onClick={() => removeItem(item.id)} aria-label="Retirer" className="text-on-surface-variant hover:text-error transition-colors shrink-0 p-1">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>

                    {!item.outOfStock ? (
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center bg-surface-container-low rounded-full px-1 py-1">
                          <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-surface-variant text-on-surface transition-colors">
                            <span className="material-symbols-outlined text-[16px]">remove</span>
                          </button>
                          <span className="w-8 text-center text-label-bold text-on-surface font-medium">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-surface-variant text-on-surface transition-colors">
                            <span className="material-symbols-outlined text-[16px]">add</span>
                          </button>
                        </div>
                        <span className="text-title-md font-bold text-on-surface">{item.price * item.qty} FCFA</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-end mt-2">
                        <button className="text-body-sm font-label-bold text-primary hover:text-primary-fixed-variant transition-colors underline">M'avertir du retour en stock</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          {activeItems.length > 0 && (
            <div className="w-full lg:w-[360px] shrink-0">
              <div className="bg-surface-container rounded-2xl p-6 shadow-sm border border-outline-variant/20 sticky top-28">
                <h2 className="text-title-lg font-bold text-on-surface mb-6">Résumé de la commande</h2>
                
                <div className="space-y-3 mb-6 text-body-md text-on-surface-variant">
                  <div className="flex justify-between items-center">
                    <span>Sous-total ({totalArticles} articles)</span>
                    <span className="font-medium text-on-surface">{subtotal} FCFA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Frais de livraison estimés</span>
                    <span className="font-medium text-on-surface">{shipping} FCFA</span>
                  </div>
                  <div className="w-full h-px bg-outline-variant/30 my-4"></div>
                  <div className="flex justify-between items-end">
                    <span className="text-title-md font-bold text-on-surface">Total</span>
                    <span className="text-[22px] font-bold text-primary leading-none">{total} FCFA</span>
                  </div>
                  <p className="text-right text-[9px] text-on-surface-variant uppercase tracking-wider pt-1">Taxes incluses</p>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <div className="relative">
                    <input type="text" placeholder="Code promo" className="w-full h-11 bg-surface rounded-lg px-4 pr-24 text-body-sm text-on-surface border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
                    <button className="absolute right-1 top-1 h-9 px-3 bg-secondary-container text-on-secondary-container font-label-bold text-sm rounded-md hover:opacity-90 transition-opacity">Appliquer</button>
                  </div>
                </div>

                <Link to="/paiement" className="w-full h-12 bg-primary text-on-primary text-title-md font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 transform duration-200">
                  Passer à la caisse
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>

                {/* Mobile Money Highlight */}
                <div className="mt-6 bg-gradient-to-br from-primary via-primary to-primary-fixed-dim text-on-primary rounded-xl p-5 relative overflow-hidden group shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors"></div>
                  <div className="relative z-10 flex flex-col items-center text-center gap-2">
                    <div className="flex gap-2 mb-1">
                      <div className="w-8 h-8 rounded-full bg-yellow-400 shadow-sm flex items-center justify-center font-bold text-[8px] text-black ring-1 ring-white/30">MTN</div>
                      <div className="w-8 h-8 rounded-full bg-blue-600 shadow-sm flex items-center justify-center font-bold text-[8px] text-white ring-1 ring-white/30">MOOV</div>
                      <div className="w-8 h-8 rounded-full bg-blue-400 shadow-sm flex items-center justify-center font-bold text-[8px] text-white ring-1 ring-white/30">WAVE</div>
                    </div>
                    <h4 className="text-[11px] uppercase tracking-wide font-bold">Paiement Mobile Rapide</h4>
                    <p className="text-[11px] opacity-90 leading-snug">Réglez en un clic avec votre compte Mobile Money. Sécurisé et sans frais.</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-1.5 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  <span className="text-[11px] font-medium">Paiement 100% Sécurisé</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
