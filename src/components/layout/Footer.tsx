import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full bg-[#040814] text-white pt-16 md:pt-20 pb-8 border-t border-white/5 relative overflow-hidden mt-auto">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mb-16 relative z-10">
        <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group mb-2">
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined text-xl">trending_up</span>
            </div>
            <span className="font-headline-md text-xl font-bold text-white tracking-wide">Elevate<span className="text-primary">.</span></span>
          </Link>
          <p className="text-body-sm text-white/60 leading-relaxed max-w-[280px]">
            La première marketplace premium d'Afrique de l'Ouest. Authenticité, qualité et paiements sécurisés.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-label-bold uppercase text-white tracking-widest text-[11px] mb-2 opacity-80">Vendeurs</h4>
          <Link className="text-body-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group" to="/devenir-vendeur">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span> Devenir vendeur
          </Link>
          <a className="text-body-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group" href="#">
            <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-primary/50 transition-colors"></span> Tableau de bord
          </a>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-label-bold uppercase text-white tracking-widest text-[11px] mb-2 opacity-80">Support</h4>
          <Link className="text-body-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group" to="/suivi-commande">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span> Suivre ma commande
          </Link>
          <a className="text-body-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group" href="#">
            <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-primary/50 transition-colors"></span> Centre d'aide
          </a>
          <a className="text-body-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group" href="#">
            <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-primary/50 transition-colors"></span> Contact
          </a>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-label-bold uppercase text-white tracking-widest text-[11px] mb-2 opacity-80">Légal</h4>
          <a className="text-body-sm text-white/60 hover:text-white transition-colors" href="#">CGU & Mentions légales</a>
          <a className="text-body-sm text-white/60 hover:text-white transition-colors" href="#">Politique de confidentialité</a>
        </div>
      </div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-6 relative z-10">
        <p className="text-xs md:text-body-sm text-white/40 text-center md:text-left">
          Â© 2026 Elevate Market. Tous droits réservés.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <span className="px-3 py-1.5 rounded-lg bg-yellow-400 text-[10px] font-bold text-black shadow-sm flex items-center gap-1 ring-2 ring-white/10">MTN</span>
          <span className="px-3 py-1.5 rounded-lg bg-blue-600 text-[10px] font-bold text-white shadow-sm flex items-center gap-1 ring-2 ring-white/10">MOOV</span>
          <span className="px-3 py-1.5 rounded-lg bg-blue-400 text-[10px] font-bold text-white shadow-sm flex items-center gap-1 ring-2 ring-white/10">WAVE</span>
          <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-white shadow-sm flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">credit_card</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
