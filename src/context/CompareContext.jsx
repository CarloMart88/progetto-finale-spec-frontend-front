import React from "react";
import { createContext, useContext, useState } from "react";

const CompareContext = createContext();

function CompareProvider({ children }) {
  const [compare, setCompare] = useState([]);

  function toggleCompare(coffee) {
    setCompare((prev) => {
      if (prev.find((p) => p.id === coffee.id)) {
        return prev.filter((p) => p.id !== coffee.id);
      }
      if (prev.length === 2) {
        return prev;
      }
      return [...prev, coffee];
    });
  }
  return (
    <CompareContext.Provider value={{ compare, toggleCompare }}>
      {children}
    </CompareContext.Provider>
  );
}

function useCompare() {
  return useContext(CompareContext);
}

export { useCompare, CompareProvider };
