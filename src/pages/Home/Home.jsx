import React from "react";
import { Slider } from "../../components/slider/Slider";
import { Services } from "../../components/services/Services";
import { Gallery } from "../../components/gallery/Gallery";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import ScrollToHashElement from "../../components/ScrollToHashElement";
import { AboutMe } from "../../components/aboutMe/AboutMe";
import "./home.css";
export const Home = () => {
  return (
    <div className="home">
      <div className="pageWrapper">
        <ScrollToHashElement />
        <nav>
          <Navbar />
        </nav>
        <div className="bodyContent">
          <Slider />
          <Services />
          <AboutMe />
          <Gallery />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
