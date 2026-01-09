import React from "react";
import { NavLink } from "react-router-dom";
import { useCompare } from "../context/CompareContext";

function CoffeCard({ coffee }) {
  const { compare, toggleCompare } = useCompare();
  const isAlready = compare.some((c) => c.id === coffee.id);
  return (
    <div className="detail-card">
      <img className="detail-image" src={coffee.image} alt={coffee.title} />

      <div className="detail-info">
        <h2>{coffee.title}</h2>
        <p>
          <strong>Origine:</strong> {coffee.origin}
        </p>
        <p>
          <strong>Tostatura:</strong> {coffee.roastLevel}
        </p>
        <p>
          <strong>Intensità:</strong> {coffee.intensity}/10
        </p>
        <p>
          <strong>Aroma:</strong> {coffee.aromaNotes}
        </p>
        <p>
          <strong>Processo:</strong> {coffee.process}
        </p>
        <p className="detail-price">{coffee.pricePerKg}€ al kg</p>

        <NavLink className="back-link" to="/">
          ← Torna indietro
        </NavLink>
        <button className="btn" onClick={() => toggleCompare(coffee)}>
          {isAlready ? "Rimuovi dalla lista" : "Aggiungi alla lista"}
        </button>
      </div>
    </div>
  );
}

export default CoffeCard;
