import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
/*
TODO:

- ODKAZY Z NAVBAR na sekce
- Rezervační systém
- Předělání Služeb
- Galerie při kliknutí na fotku 


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
