import { createContext, useContext, useState, useEffect } from "react";

const CoffeeContext = createContext();

function CoffeeProvider({ children }) {
  const baseUrl = "http://localhost:3001/coffees";
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setCoffees(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <CoffeeContext.Provider value={{ coffees, setCoffees }}>
      {children}
    </CoffeeContext.Provider>
  );
}

function useCoffee() {
  const context = useContext(CoffeeContext);
  if (!context) {
    throw new Error("useCoffee deve essere usato dentro CoffeeProvider");
  }
  return context;
}

export { CoffeeProvider, useCoffee };
