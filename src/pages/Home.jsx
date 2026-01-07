import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const baseUrl = `http://localhost:3001/coffees`;

function Home() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setCoffees(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(coffees);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <ul>
            {coffees.map((c) => {
              return (
                <li key={c.id} className="my-3">
                  <NavLink to={`/coffees/${c.id}`}>Nome: {c.title}</NavLink>
                  <p>Categoria: {c.category}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
