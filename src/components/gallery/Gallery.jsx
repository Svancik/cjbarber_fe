import React, { useState } from "react";
import "./gallery.css";
import { GalleryItem } from "./../galleryItem/GalleryItem";
import { hiddenGalleryItems, visibleGalleryItems } from "../../barberData";

//TODO: UDĚLAT KOMPONENTU NA GALERII KDE SE URČÍ POČET ŘÁDKŮ A SLOUPCŮ

export const Gallery = () => {
  const [viewFullGallery, setViewFullGallery] = useState(false);

  return (
    <div className="galleryWrapper">
      <h1>GALERIE</h1>
      <hr className="headerUnderline" />

      <div className="galleryContainer">
        {visibleGalleryItems.map((item) => (
          <GalleryItem galleryItem={item} id={item.id} />
        ))}
      </div>

      {viewFullGallery && (
        <div className="hiddenContainer galleryContainer">
          {hiddenGalleryItems.map((item) => (
            <GalleryItem galleryItem={item} id={item.id} />
          ))}
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
