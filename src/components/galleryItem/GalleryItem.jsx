import React from "react";
import "./galleryItem.css";

export const GalleryItem = ({ galleryItem, handleOpen }) => {
  return (
    <>
      {galleryItem.video ? (
        <div
          className={
            galleryItem.extraCSS
              ? `galleryCell ${galleryItem.extraCSS}`
              : "galleryCell"
          }
        >
          <video controls loop autoPlay muted controls className="galleryItem">
            <source
              src={require(`../../media/barbershop/galerie/${galleryItem.src}`)}
              type="video/mp4"
            />
          </video>
        </div>
      ) : (
        <div
          className={galleryItem.big ? "galleryCell bigItem" : "galleryCell"}
        >
          <img
            src={require(`../../media/barbershop/galerie/${galleryItem.src}`)}
            alt=""
            srcset=""
            onClick={() => handleOpen(galleryItem.id - 1)}
            className="galleryItem"
          />
        </div>
      )}
    </>
  );
};
