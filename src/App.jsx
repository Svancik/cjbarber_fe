import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
/*
TODO:

- Rezervační systém
- Předělání Služeb
- Mobilní zobrazení
- Komprimace obrázků a videí
- Doplnení textu "Kdo jsem"
- Přidání background videa do Slideru
*/
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
