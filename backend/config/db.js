import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/carscan", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Successful.... Connected to DB");
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
