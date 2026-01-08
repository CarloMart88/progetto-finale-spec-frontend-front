import React from "react";
import { NavLink } from "react-router-dom";
import { useCoffee } from "../context/CoffeeContext";

function Home() {
  const { coffees } = useCoffee();

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <ul className="list-unstyled">
            {coffees.map((c) => (
              <li key={c.id} className="coffee-item my-3 p-3">
                <h4 className="mb-1">
                  <NavLink className="coffee-link" to={`/coffees/${c.id}`}>
                    {c.title}
                  </NavLink>
                </h4>
                <p className="mb-0 text-muted">Categoria: {c.category}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
