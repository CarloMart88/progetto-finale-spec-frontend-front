import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/coffees/${id}`)
      .then((res) => res.json())
      .then((data) => setCoffee(data.coffee))
      .catch((err) => console.error(err));
  }, []);

  if (!coffee) return <p>Caricamento...</p>;

  return (
    <div>
      <h2>{coffee.title}</h2>
      <img src={coffee.image} alt={coffee.title} />
      <p>Origine: {coffee.origin}</p>
      <p>Tostatura: {coffee.roastLevel}</p>
      <p>Intensità: {coffee.intensity}/10</p>
      <p>Aroma: {coffee.aromaNotes}</p>
      <p>Processo: {coffee.process}</p>
      <p>Prezzo: {coffee.pricePerKg}€</p>
      <NavLink to="/">torna indietro</NavLink>
    </div>
  );
}

export default Detail;
