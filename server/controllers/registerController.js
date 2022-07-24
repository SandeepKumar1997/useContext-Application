const User = require("../models/userSchema");

const postUserRegister = async (req, res, next) => {
  const { name, email, phone } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      phone,
    });

    res.status(201).json({
      status: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server is fucked up",
    });
  }
};

module.exports = postUserRegister;
