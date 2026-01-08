import { NavLink, useParams } from "react-router-dom";
import { useCoffee } from "../context/CoffeeContext";

function Detail() {
  const { id } = useParams();
  const { coffees } = useCoffee();

  const coffee = coffees.find((c) => c.id === Number(id));

  // Protezione fondamentale
  if (!coffee) {
    return <p>Caricamento...</p>;
  }

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card shadow" style={{ maxWidth: "600px" }}>
        <img
          src={coffee.image}
          alt={coffee.title}
          className="card-img-top"
          style={{ objectFit: "cover", height: "350px" }}
        />

        <div className="card-body">
          <h2 className="card-title mb-3">{coffee.title}</h2>

          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
              <strong>Categoria:</strong> {coffee.category}
            </li>
            <li className="list-group-item">
              <strong>Origine:</strong> {coffee.origin}
            </li>
            <li className="list-group-item">
              <strong>Livello di tostatura:</strong> {coffee.roastLevel}
            </li>
            <li className="list-group-item">
              <strong>Intensità:</strong> {coffee.intensity}/10
            </li>
            <li className="list-group-item">
              <strong>Aroma:</strong> {coffee.aromaNotes}
            </li>
            <li className="list-group-item">
              <strong>Processo:</strong> {coffee.process}
            </li>
            <li className="list-group-item">
              <strong>Prezzo al kg:</strong> {coffee.pricePerKg}€
            </li>
          </ul>

          <NavLink to="/" className="btn btn-primary w-100">
            Torna indietro
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Detail;
