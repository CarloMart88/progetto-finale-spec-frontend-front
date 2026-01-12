import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  //local storage per caricare il favorito al caricamento della pagina
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  //local storage per salvare il favorito ogni volta che cambia
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorites(coffee) {
    setFavorites((prev) => {
      if (prev.some((f) => f.id === coffee.id)) {
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
