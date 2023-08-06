import React, { useState } from "react";
import "./gallery.css";
import { GalleryItem } from "./../galleryItem/GalleryItem";
import { hiddenGalleryItems, visibleGalleryItems } from "../../barberData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CancelIcon from "@mui/icons-material/Cancel";
import SmoothRender from "react-smooth-render";

export const Gallery = ({ col3 }) => {
  const [viewFullGallery, setViewFullGallery] = useState(false);

  const allGalleryItems = [...visibleGalleryItems, ...hiddenGalleryItems];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideIndex;

    if (direction === "l") {
      newSlideIndex =
        slideNumber === 0 ? allGalleryItems.length - 1 : slideNumber - 1;
    } else {
      newSlideIndex =
        slideNumber === allGalleryItems.length - 1 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideIndex);
  };

  return (
    <div className="galleryWrapper">
      <h1>GALERIE</h1>
      <hr className="headerUnderline" />

      <div className="galleryContainer">
        {visibleGalleryItems.map((item) => (
          <GalleryItem
            galleryItem={item}
            id={item.id}
            handleOpen={handleOpen}
          />
        ))}
      </div>

      <SmoothRender hidden={!viewFullGallery} timing={400}>
        <div className="hiddenContainer galleryContainer">
          {hiddenGalleryItems.map((item) => (
            <GalleryItem galleryItem={item} id={item.id} />
          ))}
        </div>
      </SmoothRender>

      <div className={col3 ? "photosWrapper col3" : "photosWrapper"}>
        {open && (
          <div className="gallerySlider">
            <CancelIcon className="close" onClick={() => setOpen(false)} />
            <ArrowCircleLeftIcon
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={require(`../../media/barbershop/galerie/${allGalleryItems[slideNumber].src}`)}
                alt=""
                className="gallerySliderImg"
              />
              {console.log(allGalleryItems[slideNumber].src)}
            </div>
            <ArrowCircleRightIcon
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
      </div>

      <button
        className="viewMore"
        onClick={() => setViewFullGallery(!viewFullGallery)}
      >
        {viewFullGallery ? (
          <KeyboardArrowUpIcon sx={{ width: "100%", height: "100%" }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ width: "100%", height: "100%" }} />
        )}
      </button>
    </div>
  );
};
