const { findById } = require("../models/userSchema");
const User = require("../models/userSchema");
const getProfiles = async (req, res, next) => {
  try {
    const user = await User.find();
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


const updateProfile = async (req, res, next) => {
  const userID = await User.findById(req.params.id);
  try {
    if (!userID) {
      return res.status(500).json({ message: "No such user found" });
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({ updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Error" });
  }
};

module.exports = { getProfiles, updateProfile};
