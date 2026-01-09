import React from "react";
import { NavLink } from "react-router-dom";
import { useCompare } from "../context/CompareContext";
import { useFavorites } from "../context/FavoritesContext";

function CoffeCard({ coffee }) {
  const {
    image,
    title,
    origin,
    roastLevel,
    intensity,
    aromaNotes,
    process,
    pricePerKg,
  } = coffee;

  const { compare, toggleCompare } = useCompare();
  const { favorites, toggleFavorites } = useFavorites();
  const isAlready = compare.some((c) => c.id === coffee.id);
  const isFavorite = favorites.some((f) => f.id === coffee.id);

  console.log(favorites);

  return (
    <div className="detail-card">
      <img className="detail-image" src={image} alt={title} />

      <div className="detail-info">
        <h2>{title}</h2>
        <p>
          <strong>Origine:</strong> {origin}
        </p>
        <p>
          <strong>Tostatura:</strong> {roastLevel}
        </p>
        <p>
          <strong>Intensità:</strong> {intensity}/10
        </p>
        <p>
          <strong>Aroma:</strong> {aromaNotes}
        </p>
        <p>
          <strong>Processo:</strong> {process}
        </p>
        <p className="detail-price">{pricePerKg}€ al kg</p>

        <NavLink className="back-link" to="/">
          ← Torna indietro
        </NavLink>
        {compare.length === 2 && isAlready && (
          <NavLink className="back-link" to="/compare">
            Vai al comparatore!
          </NavLink>
        )}
        <button className="btn" onClick={() => toggleCompare(coffee)}>
          {isAlready ? "Rimuovi dalla lista" : "Aggiungi alla lista"}
        </button>
        <button className="fav-btn" onClick={() => toggleFavorites(coffee)}>
          {isFavorite ? (
            <i className="bi bi-heart-fill text-danger"></i>
          ) : (
            <i className="bi bi-heart"></i>
          )}
        </button>
      </div>
    </div>
  );
}

export default CoffeCard;
