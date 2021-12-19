const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
// const generateToken  = require("../utils/generateToken");
const generateToken = require("../utils/generateToken");
const Otp = require("../models/otp");
const {google} = require('googleapis');
const { AsyncMode } = require("react-is");

const CLIENT_ID ='1082515034534-ppph1r7d1lalqcqf9s3mko4dbodq3q2m.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN =
  "1//04bAL8KOE7IR4CgYIARAAGAQSNwF-L9Ir4TGzXPs0DgyCLYtr5D455OBBe-Dl4wgMwvyILl3kzFTGCLsTaUiTOvGar10YFUbqqvw";

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})  

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});
const authUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password!");
  }
});
const emailSend = asyncHandler(async (req, res) => {
  let data = await User.findOne({ email: req.body.email });
  console.log(data);
  const responseType = {};
  if (data) {
    let otpcode = Math.floor(Math.random() * 10000 + 1);
    let otpData = new Otp({
      email: req.body.email,
      code: otpcode,
      expireIn: new Date().getTime() + 300 * 1000,
    });
    mailer(otpData.email, otpData.code);
    let otpResponse = await otpData.save();
    responseType.statusText = "Success";
    responseType.message = "Please check your Email ID";
  } else {
    responseType.statusText = "Error";
    responseType.message = "Email Id not found";
  }
  res.status(200).json(responseType);
});
const mailer = async(email, otp) => {
  const accessToken  = await oAuth2Client.getAccessToken()
  var nodemailer = require("nodemailer");
  var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      type: 'OAUTH2',
      user: "projectvg123@gmail.com",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  var mailOptions = {
    from: "projectvg123@gmail.com",
    to: email,
    subject: "Sending Email using Node.js",
    text: "Your OTP is " + otp,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent:" + info.response);
    }
  });
};
const changePassword = asyncHandler(async (req, res) => {
  let data = await Otp.findOne({
    email: req.body.email,
    code: req.body.otpCode,
  });
  const response = {};
  if (data) {
    let currentTime = new Date().getTime();
    let diff = (data.expireIn - currentTime) / 1000;
    if (diff < 0) {
      response.message = "Token expired";
      response.statusText = "Error";
    } else {
      let user = await User.findOne({ email: req.body.email });
      user.password = req.body.password;
      user.save();
      response.message = "Password changed successfully";
      response.statusText = "Success";
    }
  } else {
    response.message = "Invalid OTP";
    response.statusText = "error";
  }
  res.status(200).json(response);
});
module.exports = { registerUser, authUser, emailSend, changePassword };
