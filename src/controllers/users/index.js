const UserSchema = require("../../models/users");

const getUsers = async (req, res) => {
  try {
    const response = await UserSchema.find();
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

const getUserById = async (req, res) => {
  try {
    const response = await UserSchema.findOne({ _id: req.params.userId });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        message: "Client not found",
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

const addUser = async (req, res) => {
  try {
    const user = new UserSchema(req.body);
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

const deleteUserById = async (req, res) => {
  try {
    const response = await UserSchema.findOneAndRemove({
      _id: req.params.userId,
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
  getUsers,
  getUserById,
  addUser,
  deleteUserById,
};
