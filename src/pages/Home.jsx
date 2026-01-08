import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCoffee } from "../context/CoffeeContext";

function Home() {
  const { coffees } = useCoffee();

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  // categorie uniche
  const categories = [...new Set(coffees.map((c) => c.category))];

  // FILTRI
  const filtered = coffees
    .filter((c) => c.title.toLowerCase().includes(query.toLowerCase()))
    .filter((c) => (category ? c.category === category : true))
    .sort((a, b) => {
      if (sort === "title-asc") return a.title.localeCompare(b.title);
      if (sort === "title-desc") return b.title.localeCompare(a.title);
      if (sort === "cat-asc") return a.category.localeCompare(b.category);
      if (sort === "title-desc") return b.category.localeCompare(a.category);
    });

  return (
    <div className="container py-4">
      {/* SEARCH */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Cerca per titolo..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* FILTRO CATEGORIA */}
      <select
        className="form-select mb-3"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Tutte le categorie</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* ORDINAMENTO */}
      <select
        className="form-select mb-4"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Nessun ordinamento</option>
        <option value="title-asc">Titolo A-Z</option>
        <option value="title-desc">Titolo Z-A</option>
        <option value="cat-asc">Categoria A-Z</option>
        <option value="cat-desc">Categoria Z-A</option>
      </select>

      {/* LISTA */}
      <ul className="list-unstyled">
        {filtered.map((c) => (
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
  );
}

export default Home;
