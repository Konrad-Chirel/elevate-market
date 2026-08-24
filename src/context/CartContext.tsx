import { createContext, useContext, useState, type ReactNode } from 'react';
import { useToast } from './ToastContext';

export interface CartItem {
  id: number;
  name: string;
  seller: string;
  sellerSlug: string;
  price: number;
  qty: number;
  image: string;
  isVerified: boolean;
  outOfStock: boolean;
}

const INITIAL_CART: CartItem[] = [];

interface CartContextType {
  cartItems: CartItem[];
  updateQty: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  addToCart: (item: Omit<CartItem, 'qty'> & { qty?: number }) => void;
  totalArticles: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART);
  const { showToast } = useToast();

  const updateQty = (id: number, delta: number) => {
    setCartItems(items => items.map(item => {
      if (item.id === id && !item.outOfStock) {
        return { ...item, qty: Math.max(1, item.qty + delta) };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    showToast('Produit retiré du panier', 'info');
  };

  const addToCart = (newItem: Omit<CartItem, 'qty'> & { qty?: number }) => {
    const addQty = newItem.qty || 1;
    setCartItems(items => {
      const existing = items.find(i => i.id === newItem.id);
      if (existing) {
        return items.map(i => i.id === newItem.id ? { ...i, qty: i.qty + addQty } : i);
      }
      return [...items, { ...newItem, qty: addQty }];
    });
    showToast('Produit ajouté au panier', 'success');
  };

  const activeItems = cartItems.filter(item => !item.outOfStock);
  const totalArticles = activeItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider value={{ cartItems, updateQty, removeItem, addToCart, totalArticles }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
