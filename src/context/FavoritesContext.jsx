import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorites(coffee) {
    setFavorites((prev) => {
      if (prev.find((f) => f.id === coffee.id)) {
        return prev.filter((f) => f.id !== coffee.id);
      }
      return [...prev, coffee];
    });
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  return useContext(FavoritesContext);
}

export { FavoritesProvider, useFavorites };
