import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { SellerDashboard } from './pages/SellerDashboard';
import { Catalog } from './pages/Catalog';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { SellerDirectory } from './pages/SellerDirectory';
import { SellerStore } from './pages/SellerStore';
import { Auth } from './pages/Auth';
import { OrderTracking } from './pages/OrderTracking';
import { BecomeSeller } from './pages/BecomeSeller';
import { Favorites } from './pages/Favorites';

import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastProvider>
        <FavoritesProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
              <Route path="tableau-de-bord-vendeur" element={<SellerDashboard />} />
              <Route path="catalogue" element={<Catalog />} />
              <Route path="produit/:id" element={<ProductDetail />} />
              <Route path="panier" element={<Cart />} />
              <Route path="paiement" element={<Checkout />} />
              <Route path="vendeurs" element={<SellerDirectory />} />
              <Route path="boutique/:id" element={<SellerStore />} />
              <Route path="connexion" element={<Auth />} />
              <Route path="suivi-commande" element={<OrderTracking />} />
              <Route path="devenir-vendeur" element={<BecomeSeller />} />
              <Route path="favoris" element={<Favorites />} />
            </Route>
          </Routes>
          </CartProvider>
        </FavoritesProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
