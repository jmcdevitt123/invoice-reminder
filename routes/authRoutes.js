const express = require("express");
const router = express.Router();

// These will be implemented later
// const { register, login } = require('../controllers/authController');

router.get("/", (req, res) => {
  res.send("Auth route working!");
});

module.exports = router;
