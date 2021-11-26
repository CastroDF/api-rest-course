const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  first_exam: Number,
  second_exam: Number,
  third_exam: Number,
});

module.exports = mongoose.model("Student", studentSchema);
