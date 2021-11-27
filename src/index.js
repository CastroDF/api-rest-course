const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const PORT = process.env.PORT || 5000;

const app = express();

const router = require("./routes");

// CORS
app.use(cors());

app.use(express.json());
app.use("/", router);

app.get("*", (req, res) => {
  res.send("The possible resources are students and users");
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(`Database not connected, error: ${error}`);
  });

app.listen(PORT, () => {
  console.log(`Example API listening at http://localhost:${PORT}`);
});
