import Carousel from "react-bootstrap/Carousel";
import images from "./Array_of_Images";
import React, { useState } from "react";

const x = 100;
const y = 100;
const z = 30;
const styles = {
  transform: `translate(${x}px, ${y}px) rotate(${z}deg)`,
};

function Slider() {
  const [currImg, setCurrImg] = useState(0);
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        {/* style={styles} neeche wale div me dalo */}
        <div className="d-flex justify-content-center w-100" id="edit">
          <img
            className=" w-50 "
            src={process.env.PUBLIC_URL + `${images[currImg].image}`}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <div className="d-flex">
            <h3 className="edit">First slide label</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
