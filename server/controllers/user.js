const User = require("../models/user");

//create-api
const createUser = async (req, res) => {
  try {
    const { name, email, password, age, dob } = req.body;
    const user = new User({
      name,
      email,
      password,
      age,
      dob,
    });
    await user.save();
    res.status(201).send({
      success: true,
      message: "user created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while creating user",
      error,
    });
  }
};
//get-user
const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({
      success: true,
      message: "All users",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting all users",
      error,
    });
  }
};
//get-user-by-id
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      res.status(200).send({
        success: true,
        message: "User found",
        user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "User not found",
      error,
    });
  }
};
//update-by-id
const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, age, dob } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { name, email, password, age, dob },
      { new: true }
    );
    if(user){
        res.status(200).send({
            success: true,
            message: "User Updated",
            user,
          });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while updating user",
      error,
    });
  }
};
//delete-user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id)
    if(user){
        res.status(200).send({
            success: true,
            message: "User Deleted",
            user,
          });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting user",
      error,
    });
  }
};
module.exports = { createUser, getUser, getUserById, updateById, deleteUser };
