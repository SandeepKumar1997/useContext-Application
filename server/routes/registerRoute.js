const express = require("express");
const router = express.Router();
const postUserRegister=require("../controllers/registerController")

router.post("/", postUserRegister);

module.exports = router;
