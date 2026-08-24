import { createContext, useContext, useState, type ReactNode } from 'react';
import { useToast } from './ToastContext';

interface FavoritesContextType {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const { showToast } = useToast();

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      showToast('Retiré de vos favoris', 'error');
      setFavorites(prev => prev.filter(favId => favId !== id));
    } else {
      showToast('Ajouté à vos favoris', 'success');
      setFavorites(prev => [...prev, id]);
    }
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
