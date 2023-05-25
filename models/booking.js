const mongoose = require('mongoose');

//creating a model to interact with the database

const bookingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emailAddress:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    numberofTravellers:{
        type:Number,
        required:true      
    },
    budgetPerPerson:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Booking',bookingSchema);