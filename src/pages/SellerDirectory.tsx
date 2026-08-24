import { Link } from 'react-router-dom';
import { SELLERS } from '../data/sellers';

export function SellerDirectory() {
  return (
    <div className="flex flex-col w-full relative">
      <div className="absolute inset-0 top-[-200px] h-[500px] w-full bg-surface-variant/20 -z-10 rounded-b-[60px]" style={{maskImage: "radial-gradient(circle at center, black 0%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 100%)"}}></div>
      
      <section className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-12 pb-16 w-full flex flex-col gap-12 relative z-10">
        <div className="flex flex-col gap-6 text-center lg:text-left max-w-3xl">
          <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface">
            Découvrez nos <br/>
            <span className="text-primary italic font-serif">artisans & créateurs</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Parcourez notre répertoire de vendeurs certifiés. Des produits authentiques, une qualité garantie et un paiement sécurisé.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center w-full p-4 bg-surface rounded-xl shadow-md shadow-on-surface/5 backdrop-blur-md">
          <div className="flex-1 w-full relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">store</span>
            <input type="text" placeholder="Rechercher une boutique, un artisan..." className="w-full h-14 bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/50 rounded-lg pl-12 pr-4 font-body-lg text-body-lg outline-none ring-1 ring-surface-variant focus:ring-2 focus:ring-primary transition-shadow" />
          </div>
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            <button className="h-14 px-6 flex items-center justify-center gap-2 bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg transition-colors group">
              <span className="material-symbols-outlined text-[20px] text-on-surface-variant group-hover:text-primary transition-colors">location_on</span>
              <span className="font-label-bold text-label-bold uppercase">Région</span>
              <span className="material-symbols-outlined text-[20px] text-on-surface-variant">expand_more</span>
            </button>
            <button className="h-14 px-6 flex items-center justify-center gap-2 bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg transition-colors group">
              <span className="material-symbols-outlined text-[20px] text-on-surface-variant group-hover:text-primary transition-colors">category</span>
              <span className="font-label-bold text-label-bold uppercase">Catégorie</span>
              <span className="material-symbols-outlined text-[20px] text-on-surface-variant">expand_more</span>
            </button>
            <button className="h-14 px-8 bg-primary hover:bg-primary-fixed-dim text-on-primary font-label-bold text-label-bold uppercase rounded-lg transition-colors shadow-sm shadow-primary/20 flex-1 lg:flex-none">
              Rechercher
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between w-full mt-4">
          <div className="font-body-sm text-body-sm text-on-surface-variant">
            <strong>{SELLERS.length}</strong> boutiques trouvées
          </div>
          <div className="flex items-center gap-2">
            <span className="font-label-bold text-label-bold text-on-surface-variant uppercase">Trier par:</span>
            <select className="bg-transparent font-body-sm text-body-sm text-on-surface outline-none cursor-pointer">
              <option>Recommandés</option>
              <option>Mieux notés</option>
              <option>Nouveautés</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter w-full">
          {SELLERS.map((seller) => (
            <Link key={seller.slug} to={`/boutique/${seller.slug}`} className="group relative flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-32 w-full bg-cover bg-center" style={{backgroundImage: `url('${seller.banner}')`}}></div>
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary-container" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="font-label-bold text-label-bold text-on-surface">{seller.rating}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant ml-1">({seller.reviews})</span>
              </div>
              <div className="px-6 pb-6 pt-0 relative flex-1 flex flex-col">
                <div className="w-20 h-20 -mt-10 rounded-full border-4 border-surface-container-lowest overflow-hidden bg-surface-variant flex-shrink-0 z-10 shadow-sm relative">
                  <img className="w-full h-full object-cover" src={seller.avatar} alt={seller.name}/>
                </div>
                <div className="mt-4 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors line-clamp-1">{seller.name}</h3>
                    {seller.isVerified && (
                      <div className="flex items-center justify-center bg-tertiary-fixed-dim rounded-full w-5 h-5 flex-shrink-0" title="Vendeur Vérifié">
                        <span className="material-symbols-outlined text-[12px] text-on-tertiary-fixed-variant" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      </div>
                    )}
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> {seller.location}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/30 flex flex-wrap gap-2">
                  {seller.categories.map((cat) => (
                    <span key={cat} className="px-3 py-1 bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm rounded-md">{cat}</span>
                  ))}
                </div>
                <div className="mt-6 flex-1 flex items-end">
                  <button className="w-full h-10 border border-secondary text-secondary hover:bg-secondary hover:text-on-secondary font-label-bold text-label-bold uppercase rounded-lg transition-colors flex items-center justify-center gap-2">
                    Visiter la boutique
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
