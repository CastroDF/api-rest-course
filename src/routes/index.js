const express = require("express");

const users = require("./users");
const students = require("./students");

const router = express.Router();

router.use("/users", users);
router.use("/students", students);

module.exports = router;
