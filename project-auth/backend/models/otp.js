const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const conn = require('../config/db')
const otpSchema = mongoose.Schema(
  {
    email: {
      type: String,
    //   required: true,
    },
    code: {
      type: String,
    },
    expireIn: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
let otp = mongoose.model('otp',otpSchema)

module.exports = otp;