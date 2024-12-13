import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();

dotenv.config();

const port = process.env.Port || 4000;
const URI = process.env.MongoDBURI;

mongoose.connect(URI)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("ERROR: ", error));

app.get('/', (req, res) => {
  res.send('Hello Hardik!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})