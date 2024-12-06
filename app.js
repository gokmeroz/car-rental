const express = require('express');
const carRouter = require('./routes/carRoutes');
const userRouter = require('./routes/userRoutes');


const app = express();
app.use(express.json());


app.use('/api/v1/cars', carRouter);
app.use('/api/v1/users', userRouter);


module.exports = app;