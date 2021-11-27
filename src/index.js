const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv/config");

const PORT = process.env.PORT || 5000;

const app = express();

// Serve client
app.use(express.static(path.join(__dirname + "/build")));

const router = require("./routes");

// CORS
app.use(cors());

app.use(express.json());
app.use("/", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
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
