const express = require('express');
const router = express.Router();
const cors = require('cors')
const Booking = require('../models/booking');

//creating the booking
router.post('/',cors(),async(request,response)=>{
    const booking = new Booking({
        name:request.body.name,
        emailAddress:request.body.emailAddress,
        destination:request.body.destination,
        numberofTravellers:request.body.numberofTravellers,
        budgetPerPerson:request.body.budgetPerPerson
    });

    try{
        const newBooking = await booking.save();
        response.status(201).json(newBooking);//201 for object created successfully
    }catch(err){
        response.status(400).json({ message : err.message});
    }

})
//get All the bookings
router.get('/',cors(),async(request,response)=>{
    try{
        const result = await Booking.find();
        response.status(200).send(result);
    } catch(err){
     response.status(500).json({ message: err.message});//internal server error 
    }
})


module.exports = router;