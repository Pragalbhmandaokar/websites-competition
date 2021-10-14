const express = require('express');
const app = express();
const userRoute = require('./routes/users');

app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.send("we are on home page");
});


app.listen(3000);