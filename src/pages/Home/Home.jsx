import React from "react";
import { Slider } from "../../components/slider/Slider";
import { Services } from "../../components/services/Services";
import { Gallery } from "../../components/gallery/Gallery";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import ScrollToHashElement from "../../components/ScrollToHashElement";
import { AboutMe } from "../../components/aboutMe/AboutMe";


export const Home = () => {
  return (
    <div>
      {" "}
      <ScrollToHashElement />
      <Navbar />
      <Slider />
      <Services />
      <AboutMe />
      <Gallery />
      <Footer />
    </div>
  );
};
