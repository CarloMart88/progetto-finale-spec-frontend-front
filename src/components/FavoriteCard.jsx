import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useCompare } from "../context/CompareContext";
import { NavLink } from "react-router-dom";

function FavoriteCard({ coffee }) {
  const { toggleFavorites } = useFavorites();
  const { compare, toggleCompare } = useCompare();

  const isAlready = compare.some((c) => c.id === coffee.id);

  return (
    <div className="favorite-card">
      <div className="favorite-image-wrapper">
        <img className="favorite-image" src={coffee.image} alt={coffee.title} />

        <button
          className="favorite-heart"
          onClick={() => toggleFavorites(coffee)}
        >
          <i className="bi bi-heart-fill text-danger"></i>
        </button>
      </div>

      <h3 className="favorite-title">{coffee.title}</h3>
      <p className="favorite-origin">{coffee.origin}</p>

      <div className="favorite-actions">
        <button className="btn" onClick={() => toggleCompare(coffee)}>
          {isAlready ? "Rimuovi confronto" : "Confronta"}
        </button>

        <NavLink className="favorite-link" to={`/coffees/${coffee.id}`}>
          Dettagli
        </NavLink>
      </div>
    </div>
  );
}

export default FavoriteCard;
