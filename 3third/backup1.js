// //usednodemon for live experrience
// // Build server with express

// const express = require("express");
// const app=express();   //object of express
// const port=process.env.PORT || 9000;  //look server for port no if not found use 9900

// //how to route further like location\details hotel\details
// const hotelRouter=express.Router();
// const locationRouter=express.Router();

// var location=[
//     {
//         name:"prashant"
//     }
// ]


//  //defaut server
// app.get('/',(req,res)=>{
//     res.status(200).send("my home route ")
// })


// // //location server
// // app.get('/location',(req,res)=>{
// //     res.status(200).send(location)
// // })

// //for location
// locationRouter.route('/').get((req,res)=>{
//     res.status(200).send("hi location")

// })
// locationRouter.route('/details').get((req,res)=>{
//     res.status(200).send("hi location details")

// })

// //for hotel
// hotelRouter.route('/').get((req,res)=>{
//     res.status(200).send("hi hotel")

// })
// hotelRouter.route('/details').get((req,res)=>{
//     res.status(200).send("hi hotel details")

// })

// app.use('/location',locationRouter)
// app.use('/hotel',hotelRouter)

// //server listen
// app.listen(port,(err)=>{
//     if(err) throw err;
//     console.log(`server is running on the port ${port}`)

// })