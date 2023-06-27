import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import React from "react";
import { Slider } from "./components/slider/Slider";
import { Services } from "./components/services/Services";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Slider />
      <Services />
    </div>
  );
}

export default App;
