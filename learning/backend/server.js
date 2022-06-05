const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT||5000;

const URI = process.env.ATLAS_URI;

mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true},
    err=>{
        if(err) throw err;
        console.log('Connected to MongoDB!!!')
    })

    app.use(cors());
    app.use(express.json());

    const MoneyRouter = require('./routes/money');
    const ProfileRouter = require('./routes/profile');
    const CustomerRouter = require('./routes/customer')

    app.use('/money',MoneyRouter);
    app.use('/profile',ProfileRouter);
    app.use('/customer',CustomerRouter);
    
    app.listen(port,()=>{
        console.log(`Server Running on PORT: ${port}`);
    })