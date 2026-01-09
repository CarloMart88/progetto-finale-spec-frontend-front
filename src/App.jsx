import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Detail from "./pages/Detail";
import Compare from "./pages/Compare";
import { CoffeeProvider } from "./context/CoffeeContext";
import { CompareProvider } from "./context/CompareContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CompareProvider>
          <CoffeeProvider>
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/coffees/:id" element={<Detail />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/favorites" element={<Favorites />} />
              </Route>
            </Routes>
          </CoffeeProvider>
        </CompareProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
