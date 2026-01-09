import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import CoffeCard from "../components/CoffeCard";
import FavoriteCard from "../components/FavoriteCard";
function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>Nessun preferito ancora</h2>
        <p>Aggiungi un caffè ai preferiti per visualizzarlo qui.</p>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {favorites.map((coffee) => (
        <div key={coffee.id} className="col-12 col-md-4">
          <FavoriteCard coffee={coffee} />
        </div>
      ))}
    </div>
  );
}

export default Favorites;
