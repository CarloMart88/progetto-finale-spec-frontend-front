import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import CoffeCard from "../components/CoffeCard";
import FavoriteCard from "../components/FavoriteCard";
function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="jumbotron-coffee text-center mb-5 p-5 rounded">
        <h1 className="display-4 fw-bold">Nessun preferito ancora</h1>
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
