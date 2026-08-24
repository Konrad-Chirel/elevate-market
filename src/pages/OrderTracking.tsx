import { Link } from 'react-router-dom';

export function OrderTracking() {
  return (
    <div className="flex flex-col w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pb-24 pt-[40px] min-h-screen">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-headline-md text-[28px] sm:text-[36px] font-bold text-on-surface mb-2 leading-tight">Suivi de commande</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>Commande <span className="font-bold text-on-surface">#ELV-8492-X</span></span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            <span>Passée le 12 Octobre 2024</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-full bg-surface-container-low text-on-surface font-label-bold text-[11px] sm:text-label-bold uppercase tracking-wider hover:bg-surface-container transition-colors shadow-sm whitespace-nowrap text-center">
            Télécharger la facture
          </button>
          <button className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-full bg-secondary text-on-secondary font-label-bold text-[11px] sm:text-label-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all relative overflow-hidden group whitespace-nowrap text-center">
            <span className="relative z-10">Signaler un problème</span>
            <div className="absolute inset-0 bg-secondary-container opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Status & Map */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Progress Status Card */}
          <div className="bg-surface-container rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <h2 className="font-headline-md text-[20px] sm:text-headline-md text-on-surface">État de la livraison</h2>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-label-bold text-label-bold uppercase flex items-center gap-2 self-start sm:self-auto">
                <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                En transit
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full pt-4 pb-8 overflow-x-auto no-scrollbar">
              <div className="min-w-[500px] relative">
                <div className="absolute top-5 left-0 w-full h-1 bg-outline-variant/30 rounded-full"></div>
                {/* Active Track */}
                <div className="absolute top-5 left-0 w-[66%] h-1 bg-primary rounded-full transition-all duration-1000 ease-in-out"></div>
                <div className="relative flex justify-between w-full">
                  {/* Step 1 - Completed */}
                  <div className="flex flex-col items-center group">
                    <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md mb-3 z-10">
                      <span className="material-symbols-outlined text-[20px]">check</span>
                    </div>
                    <span className="font-label-bold text-[10px] sm:text-label-bold text-on-surface uppercase text-center w-20 sm:w-24 leading-tight">Validée</span>
                    <span className="text-[10px] sm:text-[11px] text-on-surface-variant mt-1">12 Oct, 09:41</span>
                  </div>
                  {/* Step 2 - Completed */}
                  <div className="flex flex-col items-center group">
                    <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md mb-3 z-10">
                      <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                    </div>
                    <span className="font-label-bold text-[10px] sm:text-label-bold text-on-surface uppercase text-center w-20 sm:w-24 leading-tight">En préparation</span>
                    <span className="text-[10px] sm:text-[11px] text-on-surface-variant mt-1">13 Oct, 14:20</span>
                  </div>
                  {/* Step 3 - Current */}
                  <div className="flex flex-col items-center group">
                    <div className="w-10 h-10 rounded-full bg-surface border-2 border-primary text-primary flex items-center justify-center shadow-lg mb-3 z-10 relative">
                      <span className="absolute -inset-2 bg-primary/20 rounded-full animate-ping"></span>
                      <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                    </div>
                    <span className="font-label-bold text-[10px] sm:text-label-bold text-primary uppercase text-center w-24 sm:w-28 leading-tight">En cours de livraison</span>
                    <span className="text-[10px] sm:text-[11px] text-primary mt-1">Auj, 08:15</span>
                  </div>
                  {/* Step 4 - Pending */}
                  <div className="flex flex-col items-center group">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center mb-3 z-10">
                      <span className="material-symbols-outlined text-[20px]">home</span>
                    </div>
                    <span className="font-label-bold text-[10px] sm:text-label-bold text-on-surface-variant uppercase text-center w-20 sm:w-24 leading-tight">Livrée</span>
                    <span className="text-[10px] sm:text-[11px] text-on-surface-variant opacity-50 mt-1">Est. 15 Oct</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Estimate */}
            <div className="mt-4 p-4 rounded-xl bg-primary-fixed/30 border border-primary/20 flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <h3 className="font-title-lg text-title-lg text-on-surface">Livraison estimée : <span className="text-primary font-bold">Mardi 15 Octobre</span></h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Votre colis est actuellement en route vers le centre de distribution de Cotonou.</p>
              </div>
            </div>
          </div>

          {/* Map View */}
          <div className="bg-surface-container rounded-3xl overflow-hidden shadow-sm h-[400px] relative group">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUyghki2lmVCS0B_n__GOkF7d030JS2XM-YvxKr1SUrmyZa7I2ePhOtEB_leEu3rKfPz41nGigE_DR5RrNgy4jNhZF1HQ2YVqcHMuEXqviPWw1CCb0LIt0F3hgMg84c2PPQ9UMuqxlTrsM3z0RF34j44aj6jvSEKoe6yp4rBnEI1CH-012howd2cRnpGKqLqYiBTBW2YBZnq_zvKjXYv6pZ1goymqtECynNjbLVojIwmDZvMTSZyyj')"}}
            ></div>
            {/* Overlay Card */}
            <div className="absolute top-6 left-6 bg-surface/95 backdrop-blur-md rounded-2xl p-5 shadow-lg max-w-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="font-label-bold text-label-bold text-on-surface uppercase">Dernière mise à jour</span>
                <span className="text-body-sm text-on-surface-variant">Il y a 2 heures</span>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1">
                  <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_0_4px_rgba(144,77,0,0.2)]"></div>
                  <div className="w-0.5 h-12 bg-outline-variant/50 mx-auto my-1"></div>
                  <div className="w-3 h-3 rounded-full border-2 border-outline-variant"></div>
                </div>
                <div>
                  <div className="mb-4">
                    <p className="font-title-lg text-title-lg text-on-surface">Cotonou, Littoral</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Départ du centre de tri</p>
                  </div>
                  <div>
                    <p className="font-title-lg text-title-lg text-on-surface-variant">Porto-Novo</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Destination finale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Details & Vendor */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Escrow Notice */}
          <div className="bg-tertiary-container text-on-tertiary-container rounded-2xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10">
              <span className="material-symbols-outlined text-[120px]">lock</span>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-secondary">security</span>
                <h3 className="font-title-lg text-title-lg font-bold">Paiement Sécurisé</h3>
              </div>
              <p className="font-body-sm text-body-sm mb-4">
                Vos fonds sont actuellement conservés en toute sécurité. Ils ne seront débloqués pour le vendeur qu'une fois que vous aurez confirmé la réception de la commande.
              </p>
              <button className="w-full py-3 rounded-xl bg-on-tertiary-container text-tertiary-container font-label-bold text-label-bold uppercase tracking-wider hover:bg-tertiary transition-colors shadow-sm">
                Confirmer la réception
              </button>
              <p className="text-[10px] text-center mt-3 opacity-70">
                La confirmation automatique aura lieu le 18 Octobre si aucune action n'est entreprise.
              </p>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-surface rounded-2xl p-6 shadow-sm border border-outline-variant/20">
            <h3 className="font-title-lg text-title-lg text-on-surface mb-6">Détails de la commande</h3>
            <div className="flex flex-col gap-4">
              {/* Item */}
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" alt="Tissu Bogolan Authentique" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Traditional_mud_cloth.jpg" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-body-sm text-body-sm text-on-surface font-bold truncate">Tissu Bogolan Authentique</h4>
                  <p className="text-body-sm text-on-surface-variant">Qté: 2 • Taille: Standard</p>
                </div>
                <div className="font-price-display text-price-display text-on-surface shrink-0">
                  24.000F
                </div>
              </div>
              <div className="w-full h-px bg-outline-variant/30"></div>
              {/* Totals */}
              <div className="space-y-2 mt-2">
                <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                  <span>Sous-total</span>
                  <span>24.000 FCFA</span>
                </div>
                <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                  <span>Livraison</span>
                  <span>1.500 FCFA</span>
                </div>
                <div className="flex justify-between font-title-lg text-title-lg text-on-surface font-bold mt-2 pt-2 border-t border-outline-variant/30">
                  <span>Total Payé</span>
                  <span className="text-primary">25.500 FCFA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vendor Info */}
          <div className="bg-surface rounded-2xl p-6 shadow-sm border border-outline-variant/20">
            <h3 className="font-title-lg text-title-lg text-on-surface mb-4">Contact Vendeur</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden shrink-0 ring-2 ring-primary/20">
                <img className="w-full h-full object-cover" alt="Atelier de Mariam" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&fit=crop&crop=face" />
              </div>
              <div>
                <h4 className="font-body-lg text-body-lg text-on-surface font-bold">Atelier de Mariam</h4>
                <div className="flex items-center gap-1 text-tertiary">
                  <span className="material-symbols-outlined text-[16px]">star</span>
                  <span className="font-label-bold text-label-bold">4.9 (128 avis)</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-secondary text-secondary font-label-bold text-label-bold uppercase tracking-wider hover:bg-secondary/5 transition-colors">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Contacter le vendeur
              </button>
              <Link to="/boutique/artisanat-benin" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-container text-on-surface font-label-bold text-label-bold uppercase tracking-wider hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-[20px]">storefront</span>
                Visiter la boutique
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
