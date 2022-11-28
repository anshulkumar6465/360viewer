import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./bootstrap.min.css";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Slider from "./Components/Slider";
import Body from "./screen/Body";
import images from "./Components/Array_of_Images";
// import Slideshow from "./Components/Slider";
// import Slideshow from "./Components/Slideshow/index";
import Arrows from "./Components/Arrows/index";
import Rotate from "./Components/Rotate";
import Try from "./Components/Try";
import Car from "./Components/Carousel";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      {/* <Upload /> */}

      {/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9Y6XN1qzdT2jofQYXCNcJAVj56mCPSOX32ewfKP1RA&s" className={{roundedCircle:true}}/> */}
      {/* <Slider /> */}

      {/* <img
          src={process.env.PUBLIC_URL + "data/1.png"}
          alt=""
          // style={{height: "100%", width: "100%"}}
        /> */}

      {/* <img src={process.env.PUBLIC_URL + `${images[0].image}`} alt=""/> */}
      {/* <Try /> */}
      <Car />

      {/* <div
        style={{
          position: "relative",
          width: "480px",
          height: "270px",
          overflow: "hidden",
        }} */}

        {/* // style={{ height: 270, width: 480, backgroundColor: "white" }} */}
      {/* >
        <img
          src={process.env.PUBLIC_URL + "data/1.png"}
          alt=""
          style={{
            position: "absolute",
            // top: "-9999px",
            // left: "-9999px",
            // right: "-9999px",
            // bottom: "-9999px",
            margin: "auto",
            height: "270px",
            width:"480px"
          }} */}
{/* 
          // style={{ height: "100%", width: "100%" }}
        /> */}
        {/* <div
          style={{ height: 270, width: 480, backgroundColor: "pink", rotate:"45deg" }}
        ></div> */}
      {/* </div> */}

      {/* <div>{images[0]}</div> */}
      {/* <Rotate/> */}
      {/* <Try /> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
