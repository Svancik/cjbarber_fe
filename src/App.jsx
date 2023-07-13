import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import React from "react";
import { Slider } from "./components/slider/Slider";
import { Services } from "./components/services/Services";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { Gallery } from "./components/gallery/Gallery";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Slider />
      <Services />
      <AboutMe />
      <Gallery />
    </div>
  );
}

export default App;
