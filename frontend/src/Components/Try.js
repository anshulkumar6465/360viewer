import images from "./Array_of_Images";
import Image from "react-bootstrap/Image";
import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./Carousel.css";

function Try() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].image})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 40 }} />
        </div>
        <div className="center">
        
          {/* <img
            src={process.env.PUBLIC_URL + `${images[currImg].image}`}
            alt=""
            width="50%"
          /> */}
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 40 }} />
        </div>
      </div>
    </div>
  );
}



export default Try;
