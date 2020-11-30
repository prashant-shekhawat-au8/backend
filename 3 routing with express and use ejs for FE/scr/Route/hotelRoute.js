const express = require("express");
const hotelRouter=express.Router();

hotelRouter.route('/').get((req,res)=>{
    res.status(200).send("hi hotel")

})
hotelRouter.route('/details').get((req,res)=>{
    res.status(200).send("hi hotel details")

})

module.exports=hotelRouter