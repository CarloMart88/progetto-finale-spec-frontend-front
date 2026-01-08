import React from "react";
import { NavLink } from "react-router-dom";

function CoffeCard({ coffee }) {
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
      </div>
    </div>
  );
}

export default CoffeCard;
