import express from "express";
import images from "./data/Array_of_Images.js";
import imagess from "./data/try.js";
import connectDB from "./config/db.js";
import Data from "./schema/schema.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions)); // Use this after the variable declaration
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/saves", (req, res) => {
  console.log(req.body);
  // Data.insertOne(req.body);
});

app.get("/saves", (req, res) => {
  //   res.json(images);
  res.send("get mila");
});

app.post("/save", function (req, res) {
  // console.log("hi");
  // var data = req.body.items;
  // console.log(req.body);

  for (var key in req.body) {
    if (req.body.hasOwnProperty(key)) {
      console.log(req.body[key]);
      Data.insertMany(req.body[key]);
    }
  }

  app.get("/preview", async (req, res, next) => {
    try {
       const course2 = await Course.find();
       res.status(200).send(course2);
    } catch (err) {
       console.log(err);
       res.status(500).send();
    }
 });

  // console.log(data);
  // data.forEach((i) => {
  //   Data.insertMany(req.body[i]);
  // });

  // console.log("bye");
});

app.listen(5000, console.log("running on 5000"));
