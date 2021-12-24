const express = require("express");
const {
  registerUser,
  authUser,
  emailSend,
  emailSender,
  changePassword,verifyPassword
} = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/email-send").post(emailSend);
router.route("/email-sender").post(emailSender);
router.route("/change-password").post(changePassword);
router.route("/verify-password").post(verifyPassword);
module.exports = router;
