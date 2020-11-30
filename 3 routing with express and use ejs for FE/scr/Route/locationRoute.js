const express = require("express");
const locationRouter=express.Router();

//for location
locationRouter.route('/').get((req,res)=>{
    res.status(200).send("hi location")

})
locationRouter.route('/details').get((req,res)=>{
    res.status(200).send("hi location details")

})

module.exports=locationRouter