import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCoffee } from "../context/CoffeeContext";

function Home() {
  const { coffees } = useCoffee();
  const [search, setSearch] = useState("");

  const filteredCoffe = coffees.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cerca il tuo aroma...."
      />
      <div className="row">
        <div className="col-12">
          <ul className="list-unstyled">
            {filteredCoffe.map((c) => (
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
