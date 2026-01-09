import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  //local storage per caricare il favorito al caricamento della pagina
  useEffect(() => {
    const save = localStorage.getItem("favorites");
    if (save) {
      setFavorites(JSON.parse(save));
    }
  }, []);

  //local storage per salvare il favorito ogni volta che cambia
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

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
