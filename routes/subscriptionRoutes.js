const express = require("express");
const router = express.Router();

// These will be implemented later
// const { createSubscription } = require('../controllers/subscriptionController');

router.get("/", (req, res) => {
  res.send("Subscription route working!");
});

module.exports = router;
