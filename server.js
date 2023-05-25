const express = require('express'); // this is going to pull in the express library 
const app = express();// create an app variable to execute the express functions 
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true}); //connecting to mongoDb

const db = mongoose.connection;

db.on('error',(error)=>{
    console.error(error);
})

db.once('open',()=>{
    console.log('Connected to Database');
})

app.use(cors())

app.use(express.json())//this will let our server accept json in the body 

const bookingsRouter= require('./routes/bookings');
app.use('/bookings',bookingsRouter);
//url will look like localhost:3000/bookings

app.listen(3000, ()=>{
    console.log('Server Started');
});