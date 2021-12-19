const express = require("express");
const {
  registerUser,
  authUser,
  emailSend,
  changePassword,
} = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/email-send").post(emailSend);
router.route("/change-password").post(changePassword);
module.exports = router;
