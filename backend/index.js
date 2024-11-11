const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

console.log(process.env.USERNAME,process.env.PASSWORD)
const uri =
  `mongodb+srv://${process.env.USERNAME1}:${process.env.PASSWORD}@carboncalc.lky0z.mongodb.net/?retryWrites=true&w=majority&appName=Carboncalc`;

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
