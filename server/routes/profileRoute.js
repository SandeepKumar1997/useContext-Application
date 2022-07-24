const express = require("express");
const router = express.Router();

const {
  getProfiles,
  updateProfile,
} = require("../controllers/profileController");

router.get("/", getProfiles);

router.put("/:id", updateProfile);

module.exports = router;
