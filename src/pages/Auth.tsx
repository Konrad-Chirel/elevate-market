import { useState } from 'react';

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center py-24 relative overflow-hidden bg-surface-bright min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[100px] mix-blend-multiply"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[80px] mix-blend-multiply"></div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-margin-mobile lg:px-margin-desktop relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: Visual & Value Prop */}
        <div className="flex-1 w-full space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-bold text-label-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Le Marché Panafricain
            </span>
            <h1 className="font-display-lg text-display-lg text-on-surface">
              Rejoignez l'économie<br/><span className="text-primary italic">qui élève</span> notre continent.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Accédez à des milliers de créations locales authentiques, soutenez les artisans, et payez en toute sécurité via Mobile Money.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 shadow-sm text-primary">
                <span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
              </div>
              <div>
                <h3 className="font-title-lg text-title-lg text-on-surface">Vendeurs Vérifiés</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Qualité artisanale et authenticité garantie sur chaque boutique.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 shadow-sm text-secondary">
                <span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
              </div>
              <div>
                <h3 className="font-title-lg text-title-lg text-on-surface">Paiement Mobile</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Transactions 100% sécurisées via MTN, Moov, Wave en FCFA.</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl mt-8">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/1/18/Baskets_in_Haikou_03.jpg')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-on-secondary">
              <p className="font-label-bold text-label-bold uppercase opacity-80 mb-1">Impact Direct</p>
              <p className="font-title-lg text-title-lg">Déjà plus de 15,000 artisans propulsés par Elevate.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Form */}
        <div className="w-full max-w-md lg:shrink-0 bg-surface rounded-[32px] p-8 shadow-2xl relative z-10 transition-all duration-300 transform hover:-translate-y-1">
          {/* Tabs */}
          <div className="flex bg-surface-container-low rounded-xl p-1 mb-8" role="tablist">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-center font-label-bold text-label-bold uppercase rounded-lg transition-all duration-200 ${isLogin ? 'bg-surface shadow-sm text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
              role="tab"
            >
              Se Connecter
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-center font-label-bold text-label-bold uppercase rounded-lg transition-all duration-200 ${!isLogin ? 'bg-surface shadow-sm text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
              role="tab"
            >
              S'inscrire
            </button>
          </div>

          {/* Login Form */}
          {isLogin ? (
            <form className="space-y-5 animate-fade-in" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface uppercase" htmlFor="login-email">Email ou Numéro (MoMo)</label>
                <input className="w-full h-12 bg-surface-container-lowest px-4 rounded-xl text-body-lg text-on-surface border border-outline-variant/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" id="login-email" placeholder="ex: +229 97 00 00 00" type="text"/>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-label-bold text-label-bold text-on-surface uppercase" htmlFor="login-password">Mot de passe</label>
                  <a className="font-body-sm text-body-sm text-primary hover:underline" href="#">Oublié ?</a>
                </div>
                <div className="relative">
                  <input className="w-full h-12 bg-surface-container-lowest px-4 rounded-xl text-body-lg text-on-surface border border-outline-variant/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all pr-12" id="login-password" placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" type={showPassword ? 'text' : 'password'}/>
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface" type="button" onClick={() => setShowPassword(!showPassword)}>
                    <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>
              
              <button className="w-full h-14 mt-6 bg-primary text-on-primary rounded-xl font-label-bold text-label-bold uppercase tracking-wide hover:bg-surface-tint shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] flex justify-center items-center gap-2" type="submit">
                Accéder à mon compte
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              
              <div className="pt-6 pb-2 text-center">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Ou continuer avec</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="h-12 bg-surface-container-lowest border border-outline-variant/30 rounded-xl flex justify-center items-center gap-2 hover:bg-surface-container-low transition-colors shadow-sm" type="button">
                  <img alt="Google" className="h-5 w-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"/>
                  <span className="font-label-bold text-label-bold text-on-surface">Google</span>
                </button>
                <button className="h-12 bg-surface-container-lowest border border-outline-variant/30 rounded-xl flex justify-center items-center gap-2 hover:bg-surface-container-low transition-colors shadow-sm" type="button" title="Continuer avec un numéro de téléphone">
                  <span className="material-symbols-outlined text-on-surface text-[20px]">phone_iphone</span>
                  <span className="font-label-bold text-label-bold text-on-surface">Téléphone</span>
                </button>
              </div>
            </form>
          ) : (
            <form className="space-y-5 animate-fade-in" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-label-bold text-label-bold text-on-surface uppercase" htmlFor="reg-prenom">Prénom</label>
                  <input className="w-full h-12 bg-surface-container-lowest px-4 rounded-xl text-body-lg text-on-surface border border-outline-variant/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" id="reg-prenom" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="font-label-bold text-label-bold text-on-surface uppercase" htmlFor="reg-nom">Nom</label>
                  <input className="w-full h-12 bg-surface-container-lowest px-4 rounded-xl text-body-lg text-on-surface border border-outline-variant/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" id="reg-nom" type="text"/>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface uppercase" htmlFor="reg-contact">Email ou Téléphone</label>
                <input className="w-full h-12 bg-surface-container-lowest px-4 rounded-xl text-body-lg text-on-surface border border-outline-variant/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" id="reg-contact" type="text"/>
              </div>
              
              <div className="space-y-2">
                <label className="font-label-bold text-label-bold text-on-surface uppercase" htmlFor="reg-password">Mot de passe</label>
                <div className="relative">
                  <input className="w-full h-12 bg-surface-container-lowest px-4 rounded-xl text-body-lg text-on-surface border border-outline-variant/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all pr-12" id="reg-password" type={showPassword ? 'text' : 'password'}/>
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface" type="button" onClick={() => setShowPassword(!showPassword)}>
                    <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-1">8 caractères minimum</p>
              </div>
              
              <button className="w-full h-14 mt-6 bg-primary text-on-primary rounded-xl font-label-bold text-label-bold uppercase tracking-wide hover:bg-surface-tint shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] flex justify-center items-center gap-2" type="submit">
                Créer mon compte
                <span className="material-symbols-outlined text-[18px]">person_add</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
