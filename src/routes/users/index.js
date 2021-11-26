const express = require("express");
const controller = require("../../controllers/users");

const router = express.Router();

router.route("/").get(controller.getUsers);

router.route("/:userId").get(controller.getUserById);

router.route("/login").post(controller.userLogin);

router.route("/").post(controller.addUser);

router.route("/:userId").delete(controller.deleteUserById);

module.exports = router;
