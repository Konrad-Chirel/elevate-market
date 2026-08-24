export function SellerDashboard() {
  return (
    <div className="flex flex-col w-full font-body-lg text-on-surface bg-background min-h-full">
      <div className="flex flex-col lg:flex-row w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop gap-gutter py-8">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-64 flex-shrink-0 mb-8 lg:mb-0">
          <div className="sticky top-28 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border-none flex flex-col h-[calc(100vh-140px)]">
            <div className="p-6 bg-surface-container-low flex flex-col items-center border-none">
              <div className="relative mb-4">
                <img className="w-20 h-20 rounded-full object-cover shadow-md ring-4 ring-surface-container-lowest" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fit=crop&crop=face" alt="Portrait"/>
                <div className="absolute bottom-0 right-0 bg-primary-container text-on-primary-container p-1 rounded-full shadow-sm flex items-center justify-center" title="Profil Vérifié (KYC)">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                </div>
              </div>
              <h2 className="font-title-lg text-title-lg text-on-surface text-center line-clamp-1">Boutique de Koffi</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[16px] text-tertiary">star</span>
                4.8 (124 avis)
              </p>
            </div>
            <nav className="flex-1 overflow-y-auto py-4 flex flex-col gap-1 px-3">
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container text-on-surface font-label-bold text-label-bold group transition-all" href="#">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">dashboard</span>
                Vue d'ensemble
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-bold text-label-bold group transition-all" href="#">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">inventory_2</span>
                Mes Produits
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-bold text-label-bold group transition-all justify-between" href="#">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">shopping_bag</span>
                  Commandes
                </div>
                <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded-full font-bold">5</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-bold text-label-bold group transition-all" href="#">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">account_balance_wallet</span>
                Finances
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-bold text-label-bold group transition-all justify-between" href="#">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined group-hover:scale-110 text-error transition-transform">gavel</span>
                  Litiges
                </div>
                <span className="bg-error-container text-on-error-container text-[10px] px-2 py-0.5 rounded-full font-bold">1</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-bold text-label-bold group transition-all mt-auto" href="#">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
                Paramètres
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col gap-8 min-w-0">
          {/* Header Section */}
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight">Bonjour, Koffi</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Voici le résumé de votre activité aujourd'hui.</p>
            </div>
            <div className="flex items-center gap-3 bg-surface-container-highest px-4 py-2 rounded-full shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="font-label-bold text-label-bold text-on-surface uppercase">Boutique en ligne</span>
            </div>
          </header>

          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Balance Card */}
            <div className="bg-surface-container-lowest rounded-xl shadow-md p-6 flex flex-col relative overflow-hidden group hover:shadow-lg transition-shadow border-none">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-on-surface-variant font-label-bold text-label-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                  Solde Disponible
                </div>
                <button className="text-on-surface-variant hover:text-primary transition-colors" title="Historique">
                  <span className="material-symbols-outlined text-[20px]">history</span>
                </button>
              </div>
              <div className="font-display-lg text-display-lg-mobile text-on-surface mb-1 truncate">
                150.000 <span className="text-on-surface-variant font-headline-md text-headline-md">FCFA</span>
              </div>
              <p className="text-body-sm font-body-sm text-surface-tint flex items-center gap-1 mb-6">
                <span className="material-symbols-outlined text-[16px]">trending_up</span> +12% cette semaine
              </p>
              <button className="mt-auto w-full bg-primary hover:bg-surface-tint text-on-primary font-label-bold text-label-bold py-3 rounded-lg shadow-sm transition-colors flex justify-center items-center gap-2">
                Demander un retrait
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>

            {/* KYC Status Card */}
            <div className="bg-surface-container-lowest rounded-xl shadow-md p-6 flex flex-col relative overflow-hidden group hover:shadow-lg transition-shadow border-none">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl group-hover:bg-primary-container/20 transition-colors"></div>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-bold text-label-bold uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-[18px]">shield</span>
                Statut du Compte
              </div>
              <div className="flex flex-col items-center justify-center flex-1 space-y-4">
                <div className="w-16 h-16 bg-primary-container/20 rounded-full flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-[32px] text-surface-tint">verified</span>
                  <span className="absolute top-0 right-0 w-4 h-4 bg-primary-fixed rounded-full border-2 border-surface-container-lowest"></span>
                </div>
                <div className="text-center">
                  <h3 className="font-headline-md text-title-lg text-on-surface">Vendeur Vérifié</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-[200px] mx-auto">Votre identité et documents (KYC) sont validés.</p>
                </div>
              </div>
            </div>

            {/* Quick Action Card (Orders) */}
            <div className="bg-surface-container-lowest rounded-xl shadow-md p-6 flex flex-col relative overflow-hidden group hover:shadow-lg transition-shadow border-none md:col-span-2 lg:col-span-1">
              <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-bold text-label-bold uppercase tracking-wider mb-4">
                <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                Aperçu Commandes
              </div>
              <div className="flex-1 flex flex-col justify-center gap-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-[20px]">fiber_new</span>
                    </div>
                    <span className="font-label-bold text-label-bold text-on-surface">Nouvelles</span>
                  </div>
                  <span className="font-title-lg text-title-lg text-on-surface font-bold">5</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                      <span className="material-symbols-outlined text-[20px]">inventory</span>
                    </div>
                    <span className="font-label-bold text-label-bold text-on-surface">En préparation</span>
                  </div>
                  <span className="font-title-lg text-title-lg text-on-surface font-bold">12</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-on-primary-container">
                      <span className="material-symbols-outlined text-[20px]">flight_takeoff</span>
                    </div>
                    <span className="font-label-bold text-label-bold text-on-surface">Expédiées</span>
                  </div>
                  <span className="font-title-lg text-title-lg text-on-surface font-bold">48</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Split Panel: Chart & Disputes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Section */}
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl shadow-md p-6 border-none">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-md text-title-lg text-on-surface">Ventes Récentes</h3>
                <select className="bg-surface-container-low text-on-surface font-body-sm text-body-sm border-none rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                  <option>7 derniers jours</option>
                  <option>30 derniers jours</option>
                  <option>Cette année</option>
                </select>
              </div>
              {/* Simple SVG Chart */}
              <div className="w-full h-64 relative bg-surface/50 rounded-lg p-4 flex flex-col justify-end border-none">
                <div className="absolute left-0 top-4 bottom-8 flex flex-col justify-between text-[10px] text-on-surface-variant font-label-bold px-2 w-12 text-right">
                  <span>100k</span>
                  <span>75k</span>
                  <span>50k</span>
                  <span>25k</span>
                </div>
                <div className="absolute left-14 right-4 top-4 bottom-8 flex flex-col justify-between z-0 pointer-events-none">
                  <div className="w-full h-px bg-outline-variant/20"></div>
                  <div className="w-full h-px bg-outline-variant/20"></div>
                  <div className="w-full h-px bg-outline-variant/20"></div>
                  <div className="w-full h-px bg-outline-variant/20"></div>
                </div>
                <div className="flex justify-between items-end h-full pl-10 pr-2 z-10 w-full gap-2 sm:gap-4 relative pb-6">
                  {/* Bars */}
                  <div className="w-full relative group flex justify-center h-full items-end">
                    <div className="w-full max-w-[40px] bg-primary/20 group-hover:bg-primary/40 rounded-t-sm transition-all h-[40%]" title="40,000 FCFA"></div>
                    <span className="absolute -bottom-6 text-[10px] font-label-bold text-on-surface-variant">Lun</span>
                  </div>
                  <div className="w-full relative group flex justify-center h-full items-end">
                    <div className="w-full max-w-[40px] bg-primary/40 group-hover:bg-primary/60 rounded-t-sm transition-all h-[60%]" title="60,000 FCFA"></div>
                    <span className="absolute -bottom-6 text-[10px] font-label-bold text-on-surface-variant">Mar</span>
                  </div>
                  <div className="w-full relative group flex justify-center h-full items-end">
                    <div className="w-full max-w-[40px] bg-primary/30 group-hover:bg-primary/50 rounded-t-sm transition-all h-[30%]" title="30,000 FCFA"></div>
                    <span className="absolute -bottom-6 text-[10px] font-label-bold text-on-surface-variant">Mer</span>
                  </div>
                  <div className="w-full relative group flex justify-center h-full items-end">
                    <div className="w-full max-w-[40px] bg-primary/80 group-hover:bg-primary rounded-t-sm transition-all h-[85%]" title="85,000 FCFA"></div>
                    <span className="absolute -bottom-6 text-[10px] font-label-bold text-on-surface-variant">Jeu</span>
                  </div>
                  <div className="w-full relative group flex justify-center h-full items-end">
                    <div className="w-full max-w-[40px] bg-primary/50 group-hover:bg-primary/70 rounded-t-sm transition-all h-[55%]" title="55,000 FCFA"></div>
                    <span className="absolute -bottom-6 text-[10px] font-label-bold text-on-surface-variant">Ven</span>
                  </div>
                  <div className="w-full relative group flex justify-center h-full items-end">
                    <div className="w-full max-w-[40px] bg-primary/90 group-hover:bg-primary rounded-t-sm transition-all h-[95%]" title="95,000 FCFA"></div>
                    <span className="absolute -bottom-6 text-[10px] font-label-bold text-on-surface-variant">Sam</span>
                  </div>
                  <div className="w-full relative group flex justify-center h-full items-end">
                    <div className="w-full max-w-[40px] bg-secondary-container group-hover:bg-secondary transition-all h-[70%]" title="70,000 FCFA"></div>
                    <span className="absolute -bottom-6 text-[10px] font-label-bold text-on-surface-variant">Dim</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Disputes / Alerts Section */}
            <div className="bg-surface-container-lowest rounded-xl shadow-md p-6 border-none flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-error">gavel</span>
                  <h3 className="font-headline-md text-title-lg text-on-surface">Litiges Récents</h3>
                </div>
                <a className="text-body-sm font-label-bold text-primary hover:underline" href="#">Voir tout</a>
              </div>
              <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2" style={{maxHeight: "280px"}}>
                {/* Dispute Item */}
                <div className="p-4 rounded-lg bg-error-container/30 border-l-4 border-error relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-label-bold font-label-bold text-on-surface bg-surface px-2 py-0.5 rounded shadow-sm text-[10px]">#CMD-4921</span>
                    <span className="text-label-bold font-label-bold text-error">Ouvert</span>
                  </div>
                  <h4 className="font-title-lg text-body-lg text-on-surface font-semibold mb-1">Produit non conforme</h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant line-clamp-2 mb-3">Le client signale que le tissu de la robe ne correspond pas à la description...</p>
                  <button className="text-label-bold font-label-bold text-surface-tint border border-surface-tint px-3 py-1.5 rounded-full hover:bg-surface-tint hover:text-on-primary transition-colors text-[11px] uppercase tracking-wider w-full">Répondre (Il reste 24h)</button>
                </div>
                {/* Resolved Dispute Item */}
                <div className="p-4 rounded-lg bg-surface-container-low opacity-75 relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-label-bold font-label-bold text-on-surface-variant bg-surface px-2 py-0.5 rounded shadow-sm text-[10px]">#CMD-4810</span>
                    <span className="text-label-bold font-label-bold text-outline">Résolu</span>
                  </div>
                  <h4 className="font-title-lg text-body-lg text-on-surface font-semibold mb-1">Retard de livraison</h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant line-clamp-1 mb-2">Problème avec le transporteur local résolu.</p>
                  <a className="text-label-bold font-label-bold text-primary hover:underline text-[11px]" href="#">Voir les détails</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
