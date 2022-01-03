const express = require('express');
const router = express.Router();
const {submission} = require("./src/components/upload/submission")
const usersModel = require('../models/user');
//url : /users
router.route('/submission').post(submission);
// router.get('/', (req, res) => {
//     res.send('we are on user authentication');
// })
module.exports = router;