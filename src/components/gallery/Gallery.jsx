import React, { useEffect, useState } from "react";
import "./gallery.css";
import { GalleryItem } from "./../galleryItem/GalleryItem";
import { hiddenGalleryItems, visibleGalleryItems } from "../../barberData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CancelIcon from "@mui/icons-material/Cancel";
import SmoothRender from "react-smooth-render";

export const Gallery = ({ col3 }) => {
  const allGalleryItems = [...visibleGalleryItems, ...hiddenGalleryItems];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [viewFullGallery, setViewFullGallery] = useState(false);

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [open]);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideIndex;
    setViewFullGallery(true);
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

      <div hidden={!viewFullGallery} timing={400}>
        <div className="hiddenContainer galleryContainer">
          {hiddenGalleryItems.map((item) => (
            <GalleryItem
              galleryItem={item}
              id={item.id}
              handleOpen={handleOpen}
            />
          ))}
        </div>
      </div>

      <div className={col3 ? "photosWrapper col3" : "photosWrapper"}>
        {open && (
          <div className="gallerySlider">
            <CancelIcon
              className="close"
              onClick={() => setOpen(false)}
              sx={{ height: "70px", width: "70px" }}
            />
            <ArrowBackIosNewIcon
              className="arrow"
              onClick={() => handleMove("l")}
              sx={{ height: "85px", width: "85px" }}
            />
            <div className="sliderWrapper">
              {allGalleryItems[slideNumber].video ? (
                <video
                  controls
                  loop
                  autoPlay
                  muted
                  className="gallerySliderImg"
                >
                  <source
                    src={require(`../../media/barbershop/galerie/${allGalleryItems[slideNumber].src}`)}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <img
                  src={require(`../../media/barbershop/galerie/${allGalleryItems[slideNumber].src}`)}
                  alt=""
                  className="gallerySliderImg"
                />
              )}
            </div>
            <ArrowForwardIosIcon
              className="arrow mui"
              onClick={() => handleMove("r")}
              sx={{ height: "85px", width: "85px" }}
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
