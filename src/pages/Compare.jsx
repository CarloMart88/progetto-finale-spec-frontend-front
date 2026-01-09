import React from "react";
import { useCompare } from "../context/CompareContext";

function Compare() {
  const { compare } = useCompare();

  if (compare.length < 2) {
    return (
      <div className="compare-empty">
        <h2>Seleziona due caffè da confrontare</h2>
      </div>
    );
  }

  const [first, second] = compare;

  return (
    <div className="col-12">
      <div className="row">
        <div className="col-6">
          <img className="detail-image" src={first.image} alt={first.title} />
          <p>{first.title}</p>
          <p>{first.origin}</p>
          <p>{first.roastLevel}</p>
          <p>{first.intensity}</p>
          <p>{first.aromaNotes}</p>
          <p>{first.process}</p>
          <p>{first.pricePerKg}</p>
        </div>
        <div className="col-6">
          <img className="detail-image" src={second.image} alt={second.title} />
          <p>{second.title}</p>
          <p>{second.origin}</p>
          <p>{second.roastLevel}</p>
          <p>{second.intensity}</p>
          <p>{second.aromaNotes}</p>
          <p>{second.process}</p>
          <p>{second.pricePerKg}</p>
        </div>
      </div>
    </div>
  );
}

export default Compare;
