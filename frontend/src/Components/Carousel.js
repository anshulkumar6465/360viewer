import images from "./Array_of_Images";
import Image from "react-bootstrap/Image";
import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./Carousel.css";
import axios, { Axios } from "axios";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { saveAs } from "file-saver";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";


// KINDLY PUT the assessment name here : 

const assessment_name ="b4472657-76ad-48f6-892a-d42c2a434cf5"



function Car() {
  const lists = [];

  const [currImg, setCurrImg] = useState(0);
  const [angle, changeAngle] = useState(0);
  const [xaxis, changeX] = useState(0);
  const [yaxis, changeY] = useState(0);
  const [scale, changeScale] = useState(1);
  const [list, setList] = useState(lists);
  const [checked, setChecked] = useState(false);
  const [sangle, schangeAngle] = useState(0);
  const [sxaxis, schangeX] = useState(0);
  const [syaxis, schangeY] = useState(0);
  const [sscale, schangeScale] = useState(1);
  const [opacity, changeOpacity] = useState(0.3);
  const [schecked, ssetChecked] = useState(false);
  // const [images, setImages] = useState([0]);
  const [buttonText, setButtonText] = useState("Save");

  const Save = () => {
    const newList = list.concat({
      assessment_name: assessment_name,
      image_name: "1",
      image_id: currImg + 1,
      date: Date.now(),
      tx: xaxis,
      ty: yaxis,
      angle: angle.toFixed(1),
      scale: scale,
    });
    ssetChecked((value) => !value);
    setButtonText("Saved !");
    // console.log(newList);
    setList(newList);
  };

  const Saves = () => {
    console.log("Clicked the save button");

    const note = {
      assessment_name: assessment_name,
      image_name: "1",
      image_id: currImg,
      date: Date.now(),
      tx: xaxis,
      ty: yaxis,
      angle: angle.toFixed(1),
      scale: scale,
    };

    axios
      .post("http://127.0.0.1:5000/save", list, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        console.log("sent from carousel");
      })
      .catch((err) => {
        console.log("38");
        console.log(err);
      });

    setList([]);
  };

  // const Preview = () => {
  //   // axios
  //   //   .get("http://127.0.0.1:5000/preview", list, {
  //   //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   //   })
  //   axios
  //     .get("http://127.0.0.1:5000/preview")
  //     .then((response) => {
  //       const data = response.data;
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       alert("Error retrieving data!!!");
  //       console.log(err);
  //     });
  // };

  // const Preview = () => {
  //   console.log(list[currImg - 1]);
  // };
  const togglePreview = () => setChecked((value) => !value);
  const prepHref = (linkElement) => {
    var myDiv = document.getElementById("fullsized_image_holder");
    var myImage = myDiv.children[0];
    linkElement.href = myImage.src;
  };

  // const Save = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post(
  //       "http://127.0.0.1:5000/saves",
  //       JSON.stringify({ angle: angle })
  //     );
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  // useEffect(() => {
  //   const x = async () => {
  //     const { data } = await axios.get("/save");

  //     setImages(data);
  //   }

  //   x()
  // }, []);

  return (
    <div>
      {/* <form method="post" action="/saves">
        <input name="abcd" value={angle}></input>
        <input name="abcde" value={xaxis}></input>
        <input name="abcdf" value={scale}></input>
        <button type="submit">Submit</button>
      </form> */}

      <div className="carousel">
        <h5 style={{ color: "white" }}>Image -> {currImg + 1}</h5>

        <div
          className="carouselInner"
          // style={{ backgroundImage: `url(${images[currImg].image})` }}
        >
          <div
            className="left"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
              // currImg > 0 && setCurrImg((prevCount) => prevCount - 1);
              // changeAngle(0);
              // changeX(0);
              // changeY(0);
              // changeScale(1);
              setButtonText("Save");
            }}
            style={{ backgroundColor: "white" }}
          >
            <ArrowBackIosIcon
              style={{ fontSize: 30, height: 270, color: "black" }}
            />
          </div>

          <div className="center">
            <a
              href={process.env.PUBLIC_URL + `${images[currImg].image}`}
              download
            >
              <div
                id="capture"
                style={{
                  height: 270,
                  width: 480,
                  backgroundColor: "white",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + `${images[currImg].image}`}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{
                    rotate: `${angle}deg`,
                    scale: `${scale}`,
                    transform: `translate(${xaxis}px,${-yaxis}px)`,
                  }}
                />
                {currImg > 0 && checked === true && (
                  <img
                    src={
                      process.env.PUBLIC_URL + `${images[currImg - 1].image}`
                    }
                    alt=""
                    width="100%"
                    height="100%"
                    style={{
                      // rotate: list[currImg - 1].angle,
                      // scale: list[currImg -1].scale,
                      // transform: `translate(${list[currImg - 1].tx}px,${-list[
                      //   currImg - 1
                      // ].ty}px)`,
                      rotate: `${sangle}deg`,
                      scale: `${sscale}`,
                      transform: `translate(${sxaxis}px,${-syaxis}px)`,
                      position: "absolute",
                      left: 0,
                      opacity: `${ opacity }`,
                    }}
                  />
                )}
                {/* <h1>{images[currImg].id}</h1>
          <p>{images[currImg].id}</p> */}
              </div>
            </a>
          </div>
          <div
            className="right"
            onClick={() => {
              currImg < images.length - 1 && setCurrImg(currImg + 1);
              schangeAngle(angle);
              schangeX(xaxis);
              schangeY(yaxis);
              schangeScale(scale);
              setButtonText("Save");
            }}
            style={{ backgroundColor: "white" }}
          >
            <ArrowForwardIosIcon
              style={{ fontSize: 30, height: 270, color: "black" }}
            />
          </div>
        </div>
        <div>
          <h4 style={{ color: "yellow", display: "inline" }}>
            The Angle is {angle.toFixed(1)}°
          </h4>
          <h4
            style={{ color: "#2fdb2c", display: "inline", marginLeft: "20%" }}
          >
            The Scale {scale.toFixed(2)} X{/* The Scale {scale} X */}
          </h4>
          <h4 style={{ color: "#ed7e15", display: "inline", float: "right" }}>
            X : {xaxis.toFixed(1)} Y: {yaxis.toFixed(1)}
          </h4>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <button
          onClick={() => changeY((prev) => prev - 5)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          -Y 5
        </button>

        <button
          onClick={() => changeY((prev) => prev - 1)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          -Y 1
        </button>
        <button
          onClick={() => changeY((prev) => prev - 0.5)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 20 }}
        >
          -Y 0.5
        </button>
        <button
          onClick={() => changeX((prev) => prev - 5)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          -X 5
        </button>
        <button
          onClick={() => changeX((prev) => prev - 1)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          -X 1
        </button>
        <button
          onClick={() => changeX((prev) => prev - 0.5)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 10 }}
        >
          -X 0.5
        </button>
        <button
          onClick={() => {
            changeY(0);
            changeX(0);
            changeAngle(0);
            changeScale(1);
            schangeY(0);
            schangeX(0);
            schangeAngle(0);
            schangeScale(1);
            setButtonText("Save");
          }}
          type="button"
          class="btn btn-link"
          style={{ marginRight: 10 }}
        >
          Reset
        </button>
        <button
          onClick={() => changeX((prev) => prev + 0.5)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          +X 0.5
        </button>
        <button
          onClick={() => changeX((prev) => prev + 1)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          +X 1
        </button>

        <button
          onClick={() => changeX((prev) => prev + 5)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 20 }}
        >
          +X 5
        </button>
        <button
          onClick={() => changeY((prev) => prev + 0.5)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          +Y 0.5
        </button>
        <button
          onClick={() => changeY((prev) => prev + 1)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          +Y 1
        </button>
        <button
          onClick={() => changeY((prev) => prev + 5)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          +Y 5
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 10,
          paddingTop: 5,
          paddingRight: 25,
        }}
      >
        <button
          onClick={() => changeScale((prev) => prev - 0.1)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          ⊖ 0.1
        </button>
        <button
          onClick={() => changeScale((prev) => prev - 0.04)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          ⊖ 0.04
        </button>
        <button
          onClick={() => changeScale((prev) => prev - 0.01)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 20 }}
        >
          ⊖ 0.01
        </button>

        <button
          onClick={() => changeAngle((prev) => prev - 5)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          -5°
        </button>
        <button
          onClick={() => changeAngle((prev) => prev - 1)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          -1°
        </button>
        <button
          onClick={() => changeAngle((prev) => prev - 0.1)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 20 }}
        >
          -0.1°
        </button>
        {/* <Link className="btn btn-success" to="/save">
          Save
        </Link> */}

        <button onClick={Save} className="btn btn-success" type="submit">
          {buttonText}
        </button>
        <button
          onClick={() => changeAngle((prev) => prev + 0.1)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2, marginLeft: 10 }}
        >
          +0.1°
        </button>
        <button
          onClick={() => changeAngle((prev) => prev + 1)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          +1°
        </button>
        <button
          onClick={() => changeAngle((prev) => prev + 5)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 20 }}
        >
          +5°
        </button>

        <button
          onClick={() => changeScale((prev) => prev + 0.01)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          ⊕ 0.01
        </button>
        <button
          onClick={() => changeScale((prev) => prev + 0.04)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 2 }}
        >
          ⊕ 0.04
        </button>
        <button
          onClick={() => changeScale((prev) => prev + 0.1)}
          type="button"
          class="btn btn-secondary"
          style={{ marginRight: 20 }}
        >
          ⊕ 0.1
        </button>
      </div>
      <div>
        <button onClick={Saves} className="btn btn-danger" type="submit">
          Submit All
        </button>
        <button
          onClick={() => {
            changeOpacity((prev) => prev - 0.1);
          }}
          className="btn btn-outline-danger"
          type="button"
          style={{ marginLeft: 310, marginRight: 10 }}
        >
          Opacity -
        </button>
        <button
          onClick={togglePreview}
          className="btn btn-warning"
          type="submit"
          style={{ marginLeft: 0 }}
        >
          Toggle Preview
        </button>
        <button
          onClick={() => {
            changeOpacity((prev) => prev + 0.1);
          }}
          className="btn btn-outline-success"
          type="button"
          style={{ marginLeft: 10 }}
        >
          Opacity +
        </button>
      </div>
    </div>
  );
}

export default Car;
