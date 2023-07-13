import React from "react";
import "./gallery.css";

export const Gallery = () => {
  return (
    <div className="galleryWrapper">
      <h1>GALERIE</h1>
      <hr className="headerUnderline" />
      <div className="galleryContainer">
        <div className="galleryCell">
          <img
            src={require("../../media/barbershop/strih1.png")}
            alt=""
            srcset=""
          />
        </div>
        <div className="galleryCell bigGalleryItemRow23">
          <img
            src={require("../../media/barbershop/strih3.png")}
            alt=""
            srcset=""
          />
        </div>
        <div className="galleryCell">
          <img
            src={require("../../media/barbershop/strih2.png")}
            alt=""
            srcset=""
          />
        </div>
        <div className="galleryCell">
          <img
            src={require("../../media/barbershop/strih3.png")}
            alt=""
            srcset=""
          />
        </div>
        <div className="galleryCell">
          <img
            src={require("../../media/barbershop/strih5.png")}
            alt=""
            srcset=""
          />
        </div>
        <div className="galleryCell">
          <img
            src={require("../../media/barbershop/strih7.jpg")}
            alt=""
            srcset=""
          />
        </div>
        <div className="galleryCell">
          <img
            src={require("../../media/barbershop/strih8.jpg")}
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="viewMore">
        <h4>
          <span>Zobrazit více</span>
        </h4>
      </div>
    </div>
  );
};
