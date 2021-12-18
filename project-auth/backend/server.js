const express = require('express');
const info = require('./data/info');
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes')
const {notFound,errorHandler} = require('./middlewares/errorMiddleware')
const app = express();
dotenv.config();
connectDB();
app.use(express.json())
app.get('/',(req,res) =>{
    res.send('API is running');
});

app.get('/api/info',(req,res) =>{
    res.send(info);
});

app.get('/api/info/:id',(req,res) =>{
    const inf = info.find((n) => n._id === req.params.id);
    res.send(inf);
});

app.use('/api/users',userRoutes);
app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started on PORT ${PORT}`));
