import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<'momo' | 'card'>('momo');

  return (
    <div className="flex flex-col w-full px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-8 pt-12">
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        
        {/* Left Column - Forms */}
        <div className="flex-1 space-y-8">
          
          {/* 1. Informations de Livraison */}
          <div className="bg-surface rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">local_shipping</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">1. Informations de Livraison</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant">Prénom</label>
                <input type="text" defaultValue="Koffi" className="w-full h-11 bg-surface-container-low border-none rounded-lg px-4 text-body-sm focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant">Nom</label>
                <input type="text" defaultValue="Agbessi" className="w-full h-11 bg-surface-container-low border-none rounded-lg px-4 text-body-sm focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant">Adresse de livraison</label>
                <input type="text" defaultValue="Quartier Cotonou, Rue 123" className="w-full h-11 bg-surface-container-low border-none rounded-lg px-4 text-body-sm focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant">Ville</label>
                <input type="text" defaultValue="Cotonou" className="w-full h-11 bg-surface-container-low border-none rounded-lg px-4 text-body-sm focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant">Téléphone</label>
                <input type="tel" defaultValue="+229 90 00 00 00" className="w-full h-11 bg-surface-container-low border-none rounded-lg px-4 text-body-sm focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-surface-container rounded-lg flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary mt-1">info</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">La livraison standard prend généralement entre 2 et 4 jours ouvrables à Cotonou et ses environs.</p>
            </div>
          </div>
          
          {/* 2. Moyen de Paiement */}
          <div className="bg-surface rounded-xl shadow-md p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 relative z-10 gap-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[24px] sm:text-3xl shrink-0">account_balance_wallet</span>
                <h2 className="font-headline-md text-[20px] sm:text-headline-md text-on-surface">2. Paiement</h2>
              </div>
              <div className="flex gap-2 opacity-80 pl-9 sm:pl-0">
                <span className="font-bold text-[#ffcc00] text-[12px] sm:text-sm">MTN</span>
                <span className="font-bold text-[#005596] text-[12px] sm:text-sm">MOOV</span>
                <span className="font-bold text-[#1eb5fa] text-[12px] sm:text-sm">WAVE</span>
              </div>
            </div>
            
            <div className="space-y-4 relative z-10">
              <label 
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors gap-3 ${paymentMethod === 'momo' ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setPaymentMethod('momo')}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-6 h-6 shrink-0 rounded-full border-2 ${paymentMethod === 'momo' ? 'border-primary flex items-center justify-center' : 'border-outline'}`}>
                    {paymentMethod === 'momo' && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                  </div>
                  <span className="font-title-md sm:font-title-lg text-on-surface">Mobile Money</span>
                </div>
                <div className="flex gap-2 pl-9 sm:pl-0">
                  <div className="w-10 h-6 bg-[#ffcc00] rounded flex items-center justify-center text-[10px] font-bold text-black shadow-sm">MTN</div>
                  <div className="w-10 h-6 bg-[#005596] rounded flex items-center justify-center text-[10px] font-bold text-white shadow-sm">MOOV</div>
                  <div className="w-10 h-6 bg-[#1eb5fa] rounded flex items-center justify-center text-[10px] font-bold text-white shadow-sm">WAVE</div>
                </div>
              </label>
              
              <label 
                className={`flex items-center justify-between p-4 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors gap-3 ${paymentMethod === 'card' ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-6 h-6 shrink-0 rounded-full border-2 ${paymentMethod === 'card' ? 'border-primary flex items-center justify-center' : 'border-outline'}`}>
                    {paymentMethod === 'card' && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                  </div>
                  <span className="font-title-md sm:font-title-lg text-on-surface">Carte Bancaire</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant text-[24px]">credit_card</span>
              </label>
            </div>
            
            <div className="mt-8 p-5 bg-primary-container/10 rounded-xl flex gap-4 items-start relative z-10 border border-primary/20">
              <div className="p-2 bg-primary/20 rounded-full shrink-0">
                <span className="material-symbols-outlined text-primary">lock</span>
              </div>
              <div>
                <h3 className="font-title-lg text-title-lg text-on-surface mb-1">Paiement Sécurisé (Séquestre)</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Votre argent est protégé. Le vendeur n'est payé qu'après votre confirmation de livraison et satisfaction du produit.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Order Summary */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="bg-surface rounded-xl shadow-lg p-6 sticky top-28">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Récapitulatif</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Baskets_in_Haikou_03.jpg" alt="Panier Tressé Artisanal" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-body-lg text-body-lg text-on-surface truncate">Panier Tressé Artisanal</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Qté: 1</p>
                </div>
                <span className="font-price-display text-price-display text-on-surface">15 000 F</span>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/M%C3%A9lange_du_Beurre_de_karit%C3%A9_et_huiles_essentielles_dans_une_boite_pour_massage_02.jpg" alt="Beurre de Karité Pur" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-body-lg text-body-lg text-on-surface truncate">Beurre de Karité Pur</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Qté: 2</p>
                </div>
                <span className="font-price-display text-price-display text-on-surface">8 000 F</span>
              </div>
            </div>
            
            <div className="space-y-3 pt-6 border-t border-outline-variant/30">
              <div className="flex justify-between items-center">
                <span className="font-body-lg text-body-lg text-on-surface-variant">Sous-total</span>
                <span className="font-body-lg text-body-lg text-on-surface">23 000 F</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body-lg text-body-lg text-on-surface-variant">Livraison</span>
                <span className="font-body-lg text-body-lg text-on-surface">1 500 F</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-6 mt-6 border-t border-outline-variant/30 mb-8">
              <span className="font-title-lg text-title-lg text-on-surface">Total à payer</span>
              <span className="font-price-display text-price-display text-primary text-2xl">24 500 F</span>
            </div>
            
            <Link to="/suivi-commande" className="w-full h-14 bg-primary text-on-primary rounded-xl font-title-lg text-title-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-md hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
              <span className="material-symbols-outlined">lock</span>
              Payer 24 500 FCFA
            </Link>
            
            <p className="text-center font-label-bold text-label-bold text-on-surface-variant mt-4 opacity-70">
              Connexion cryptée SSL 256-bits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
