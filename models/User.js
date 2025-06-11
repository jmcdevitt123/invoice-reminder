const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    name: { type: String },
    subscriptionTier: { type: String, default: "free" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
