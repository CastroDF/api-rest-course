const express = require("express");
const controller = require("../../controllers/students");

const router = express.Router();

router.route("/").get(controller.getStudents);

router.route("/:studentId").get(controller.getStudentById);

router.route("/").post(controller.addStudent);

router.route("/:studentId").delete(controller.deleteStudentById);

module.exports = router;
