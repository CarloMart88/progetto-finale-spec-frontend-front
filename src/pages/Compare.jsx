import React from "react";
import { NavLink } from "react-router-dom";
import { useCompare } from "../context/CompareContext";

function Compare() {
  const { compare, toggleCompare } = useCompare();

  const [first, second] = compare;

  return (
    <div className="compare-wrapper">
      <div className="jumbotron-coffee text-center mb-5 p-5 rounded">
        <h1 className="display-4 fw-bold">Il nostro Comparatore</h1>
      </div>

      <div className="row g-4">
        {/* COLONNA 1 */}
        <div className="col-12 col-md-6">
          {first ? (
            <div className="compare-card">
              <img
                className="compare-image"
                src={first.image}
                alt={first.title}
              />

              <h3 className="compare-title">{first.title}</h3>

              <p>
                <strong>Origine:</strong> {first.origin}
              </p>
              <p>
                <strong>Tostatura:</strong> {first.roastLevel}
              </p>
              <p>
                <strong>Intensità:</strong> {first.intensity}
              </p>
              <p>
                <strong>Aroma:</strong> {first.aromaNotes}
              </p>
              <p>
                <strong>Processo:</strong> {first.process}
              </p>
              <p className="compare-price">{first.pricePerKg}€ al kg</p>

              <button
                className="remove-btn"
                onClick={() => toggleCompare(first)}
              >
                Rimuovi dal confronto
              </button>
            </div>
          ) : (
            <div className="compare-placeholder">
              <p>Seleziona un caffè da confrontare</p>
            </div>
          )}
        </div>

        {/* COLONNA 2 */}
        <div className="col-12 col-md-6">
          {second ? (
            <div className="compare-card">
              <img
                className="compare-image"
                src={second.image}
                alt={second.title}
              />

              <h3 className="compare-title">{second.title}</h3>

              <p>
                <strong>Origine:</strong> {second.origin}
              </p>
              <p>
                <strong>Tostatura:</strong> {second.roastLevel}
              </p>
              <p>
                <strong>Intensità:</strong> {second.intensity}
              </p>
              <p>
                <strong>Aroma:</strong> {second.aromaNotes}
              </p>
              <p>
                <strong>Processo:</strong> {second.process}
              </p>
              <p className="compare-price">{second.pricePerKg}€ al kg</p>

              <button
                className="remove-btn"
                onClick={() => toggleCompare(second)}
              >
                Rimuovi dal confronto
              </button>
            </div>
          ) : (
            <div className="compare-placeholder">
              <p>Aggiungi un altro caffè al confronto</p>
            </div>
          )}
        </div>
      </div>

      <div className="text-center mt-4">
        <NavLink className="back-link" to="/">
          ← Torna alla home
        </NavLink>
      </div>
    </div>
  );
}

export default Compare;
