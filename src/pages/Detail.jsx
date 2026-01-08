import React from "react";
import { NavLink, Navigate, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text"></p>
        <NavLink to="/" className="btn btn-primary">
          Torna indietro
        </NavLink>
      </div>
    </div>
  );
}

export default Detail;
