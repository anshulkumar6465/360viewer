// const {MongoClient} =require('mongodb');

// const url = 'mongodb://localhost:27017';

// const client = new MongoClient(url);

// const dbName = 'carscan';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('data');
//   const response = await collection.find({}).toArray();
//   console.log(response);

//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/carscan", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("Successful...."))
  .catch((err) => console.log(err));

const docSchema = new mongoose.Schema({
  assessment_name: String,
  image_name: String,
  image_id: Number,
  date: {
    type: Date,
    default: Date.now,
  },
  tx: Number,
  ty: Number,
  angle: Number,
  scale: Number,
});

const Data = new mongoose.model("Data", docSchema);

const y = async () => {
  try {
    const x = new Data({
      assessment_name: "abc",
      image_name: "a",
      image_id: 1,
      tx: 1,
      ty: 1,
      angle: 1,
      scale: 1,
    });

    const result = await x.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

y();
