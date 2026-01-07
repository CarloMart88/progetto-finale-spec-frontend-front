import React from "react";
import { useState, useEffect } from "react";
const baseUrl = `http://localhost:3001/coffees`;

function Home() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setCoffees(data))
      .catch((err) => console.error(err));
  }, []);

  return <div>Home</div>;
}

export default Home;
