import React, { useState } from "react";
import "./gallery.css";

export const Gallery = () => {
  const [viewFullGallery, setViewFullGallery] = useState(false);

  return (
    <div className="galleryWrapper">
      <h1>GALERIE</h1>
      <hr className="headerUnderline" />
      <div className="galleryContainer">
        <div className="galleryCell">
          <img
            src={require("../../media/barbershop/galerie/strih1.JPG")}
            alt=""
            srcset=""
          />
        </div>
        <div className="galleryCell bigGalleryItemRow23">
          <video controls loop autoPlay muted controls>
            <source
              src={require("../../media/barbershop/galerie/videoStrih1.MP4")}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="galleryCell">
          <img
            src={require("../../media/barbershop/galerie/strih2.JPG")}
            alt=""
            srcset=""
          />
        </div>
        <div className="galleryCell">
          <img
            src={require("../../media/barbershop/galerie/strih3.JPG")}
            alt=""
            srcset=""
          />
        </div>
        <div className="galleryCell">
          <img
            src={require("../../media/barbershop/galerie/strih5.JPG")}
            alt=""
            srcset=""
          />
        </div>
        <div className="galleryCell">
          <img
            src={require("../../media/barbershop/galerie/strih7.JPG")}
            alt=""
            srcset=""
          />
        </div>
        <div className="galleryCell">
          <img
            src={require("../../media/barbershop/galerie/strih8.JPG")}
            alt=""
            srcset=""
          />
        </div>
      </div>

      {viewFullGallery && (
        <div className="galleryContainer">
          <div className="galleryCell">
            <img
              src={require("../../media/barbershop/galerie/strih1.JPG")}
              alt=""
              srcset=""
            />
          </div>
          <div className="galleryCell bigGalleryItemRow23">
            <video controls loop autoPlay muted controls>
              <source
                src={require("../../media/barbershop/galerie/videoStrih1.MP4")}
                type="video/mp4"
              />
            </video>
          </div>
          <div className="galleryCell">
            <img
              src={require("../../media/barbershop/galerie/strih2.JPG")}
              alt=""
              srcset=""
            />
          </div>
          <div className="galleryCell">
            <img
              src={require("../../media/barbershop/galerie/strih3.JPG")}
              alt=""
              srcset=""
            />
          </div>
          <div className="galleryCell">
            <img
              src={require("../../media/barbershop/galerie/strih5.JPG")}
              alt=""
              srcset=""
            />
          </div>
          <div className="galleryCell">
            <img
              src={require("../../media/barbershop/galerie/strih7.JPG")}
              alt=""
              srcset=""
            />
          </div>
          <div className="galleryCell">
            <img
              src={require("../../media/barbershop/galerie/strih8.JPG")}
              alt=""
              srcset=""
            />
          </div>
        </div>
      )}

      <div className="viewMore">
        <h4>
          <button onClick={() => setViewFullGallery(!viewFullGallery)}>
            Zobrazit více
          </button>
        </h4>
      </div>
    </div>
  );
};
