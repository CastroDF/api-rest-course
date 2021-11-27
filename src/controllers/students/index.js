const StudentSchema = require("../../models/students");

const getStudents = async (req, res) => {
  try {
    const response = await StudentSchema.find();
    return res.status(200).json({
      data: response,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error,
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const response = await StudentSchema.findOne({ _id: req.params.studentId });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      data: response,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error,
    });
  }
};

const addStudent = async (req, res) => {
  try {
    const user = new StudentSchema(req.body);
    const newUser = await user.save();

    return res.status(201).json({
      data: newUser,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error,
    });
  }
};

const deleteStudentById = async (req, res) => {
  try {
    const response = await StudentSchema.findOneAndRemove({
      _id: req.params.studentId,
    });
    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }

    return res.status(202).json({
      data: response,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error,
    });
  }
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  deleteStudentById,
};
