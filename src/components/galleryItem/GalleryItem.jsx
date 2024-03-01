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
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <video
            controls
            loop
            autoPlay
            muted
            className="galleryItem"
            onClick={() => handleOpen(galleryItem.id - 1)}
          >
            <source
              src={require(`../../media/barbershop/galerie/${galleryItem.src}`)}
              type="video/mp4"
            />
          </video>
        </div>
      ) : (
        <div
          className={galleryItem.big ? "galleryCell bigItem" : "galleryCell"}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
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
