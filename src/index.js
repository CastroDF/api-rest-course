const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();
const router = require("./routes");

app.use(express.json());
app.use("/", router);

// CORS
app.use(cors());

mongoose
  .connect(process.env.mongoURL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(`Database not connected, error: ${error}`);
  });

app.listen(process.env.PORT, () => {
  console.log(`Example API listening at http://localhost:${process.env.PORT}`);
});
