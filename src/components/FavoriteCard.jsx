import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useCompare } from "../context/CompareContext";
import { NavLink } from "react-router-dom";

function FavoriteCard({ coffee }) {
  const { toggleFavorites } = useFavorites();
  const { compare, toggleCompare } = useCompare();

  const isAlready = compare.some((c) => c.id === coffee.id);

  return (
    <div className="fav-card">
      <img className="fav-image" src={coffee.image} alt={coffee.title} />

      <h3 className="fav-title">{coffee.title}</h3>

      <p className="fav-origin">{coffee.origin}</p>

      <div className="fav-actions">
        <button className="btn" onClick={() => toggleCompare(coffee)}>
          {isAlready ? "Rimuovi dal confronto" : "Confronta"}
        </button>

        <button className="fav-btn" onClick={() => toggleFavorites(coffee)}>
          <i className="bi bi-heart-fill text-danger"></i>
        </button>

        <NavLink className="fav-link" to={`/coffees/${coffee.id}`}>
          Dettagli
        </NavLink>
      </div>
    </div>
  );
}

export default FavoriteCard;
