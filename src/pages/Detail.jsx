import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import CoffeCard from "../components/CoffeCard";

function Detail() {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/coffees/${id}`)
      .then((res) => res.json())
      .then((data) => setCoffee(data.coffee))
      .catch((err) => console.error(err));
  }, [id]);

  if (!coffee) return <p>Caricamento...</p>;

  return <CoffeCard coffee={coffee} />;
}

export default Detail;
