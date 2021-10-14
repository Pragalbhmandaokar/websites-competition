const express = require('express');
const router = express.Router();

const usersModel = require('../models/user');
//url : /users
router.get('/', (req, res) => {
    res.send('we are on user authentication');
});

module.exports = router;