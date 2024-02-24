import "./App.css";
import React from "react";
import AOS from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Reservation } from "./pages/Reservation/Reservation";
/*
TODO:

- Rezervační systém
- Mobilní zobrazení
- Komprimace obrázků a videí
- Doplnení textu "Kdo jsem"
- Přidání background videa do Slideru
*/
function App() {
  AOS.init();

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rezervace" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
