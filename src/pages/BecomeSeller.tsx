import { Link } from 'react-router-dom';

export function BecomeSeller() {
  return (
    <div className="flex flex-col w-full font-body-lg text-on-background">
      <section className="relative w-full overflow-hidden bg-surface-container-highest pt-32 pb-24 lg:pt-32 lg:pb-32 flex items-center justify-center -mt-20">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=1200&q=80&fit=crop')"}}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-on-background/90 via-on-background/70 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6 items-start text-surface">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container/20 backdrop-blur-md rounded-full text-secondary-container font-label-bold text-label-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
              Développez votre activité
            </span>
            <h1 className="font-display-md text-display-md lg:font-display-lg lg:text-display-lg text-on-tertiary max-w-2xl">
              Transformez votre talent en succès avec Elevate Market
            </h1>
            <p className="text-body-md md:font-body-lg md:text-body-lg text-surface-dim max-w-xl mb-4">
              Rejoignez la première marketplace panafricaine. Vendez vos produits locaux à une audience nationale et internationale, avec la sécurité des paiements Mobile Money.
            </p>
            <Link to="/connexion" className="group relative overflow-hidden bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 inline-block">
              <span className="relative z-10 flex items-center gap-2">
                OUVRIR MA BOUTIQUE MAINTENANT
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-on-background mb-4">Pourquoi vendre sur Elevate ?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Nous vous offrons les outils pour réussir, de la visibilité à la sécurité financière.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-8 rounded-[24px] shadow-sm hover:shadow-xl border border-outline-variant/20 hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 shadow-sm flex items-center justify-center text-emerald-600 mb-2 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>account_balance_wallet</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-emerald-600 transition-colors">Paiement Garanti</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Recevez vos fonds directement et en toute sécurité via MTN, MOOV ou WAVE. Pas de retards, pas de complications.</p>
            </div>
            <div className="bg-surface p-8 rounded-[24px] shadow-sm hover:shadow-xl border border-outline-variant/20 hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 shadow-sm flex items-center justify-center text-amber-500 mb-2 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>groups</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-amber-600 transition-colors">Large Audience</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Accédez à des milliers de clients au Bénin et au-delà, cherchant activement des produits locaux et authentiques.</p>
            </div>
            <div className="bg-surface p-8 rounded-[24px] shadow-sm hover:shadow-xl border border-outline-variant/20 hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 shadow-sm flex items-center justify-center text-indigo-500 mb-2 group-hover:bg-indigo-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>support_agent</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-indigo-600 transition-colors">Support Dédié</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Une équipe locale à votre écoute pour vous accompagner dans la création et la gestion de votre boutique en ligne.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/1/18/Baskets_in_Haikou_03.jpg')"}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 text-surface">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex -space-x-4">
                    <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&fit=crop&crop=face"/>
                    <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fit=crop&crop=face"/>
                    <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary text-on-primary flex items-center justify-center text-xs font-bold">+1k</div>
                  </span>
                  <span className="font-label-bold text-label-bold text-surface-dim">Marchands actifs</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <h2 className="font-headline-md text-headline-md text-on-surface">Lancez-vous en 4 étapes simples</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">Notre processus d'inscription est conàÂ§u pour être rapide et sécurisé, vous permettant de vendre en un rien de temps.</p>
              </div>
              
              <div className="flex flex-col gap-8 relative">
                <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-outline-variant/30 hidden md:block"></div>
                
                <div className="flex gap-6 relative z-10 group hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white shadow-md flex items-center justify-center font-headline-md shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all">1</div>
                  <div className="flex flex-col pt-2">
                    <h4 className="font-title-lg text-title-lg text-on-surface mb-2 font-bold group-hover:text-emerald-600 transition-colors">Créez votre compte</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">L'inscription est 100% gratuite. Entrez vos informations de base et le nom de votre future boutique.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 relative z-10 group hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white shadow-md flex items-center justify-center font-headline-md shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all">2</div>
                  <div className="flex flex-col pt-2">
                    <h4 className="font-title-lg text-title-lg text-on-surface mb-2 font-bold group-hover:text-amber-600 transition-colors">Vérification KYC</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Pour la sécurité de tous, soumettez vos documents d'identité pour une vérification rapide par notre équipe.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 relative z-10 group hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500 text-white shadow-md flex items-center justify-center font-headline-md shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all">3</div>
                  <div className="flex flex-col pt-2">
                    <h4 className="font-title-lg text-title-lg text-on-surface mb-2 font-bold group-hover:text-indigo-600 transition-colors">Listez vos produits</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Ajoutez de belles photos, des descriptions détaillées et fixez vos prix pour vos articles d'artisanat, alimentation, etc.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 relative z-10 group hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white shadow-md flex items-center justify-center font-headline-md shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all">4</div>
                  <div className="flex flex-col pt-2">
                    <h4 className="font-title-lg text-title-lg text-on-surface mb-2 font-bold group-hover:text-rose-600 transition-colors">Recevez vos paiements</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Vos clients achètent, nous sécurisons les fonds, et vous êtes payé directement sur votre compte Mobile Money.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-highest">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop text-center">
          <h2 className="font-headline-md text-headline-md lg:font-display-lg lg:text-display-lg text-on-surface mb-6 lg:mb-8">Prêt à développer votre entreprise ?</h2>
          <p className="text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 lg:mb-12 px-4">
            Ne laissez pas vos produits dans l'ombre. Rejoignez la communauté des vendeurs Elevate Market aujourd'hui et touchez des clients qui recherchent ce que vous offrez.
          </p>
          <Link to="/connexion" className="inline-block bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-10 py-5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            OUVRIR MA BOUTIQUE MAINTENANT
          </Link>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}
