import mongoose from "mongoose";

const docSchema = new mongoose.Schema({
    assessment_name: String,
    image_name: String,
    image_id: Number,
    date: Number, 
    // {
    //   type: Date.now(),
    //   default: Date.now(),
    // },
    tx: Number,
    ty: Number,
    angle: Number,
    scale: Number,
  },
  {
    timestamps:true
  });

  const Data = new mongoose.model("Data", docSchema);

  export default Data;