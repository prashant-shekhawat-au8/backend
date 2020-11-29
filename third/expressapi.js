//usednodemon for live experrience
// Build server with express

const express = require("express");
const app=express();   //object of express
const port=process.env.PORT || 9000;  //look server for port no if not found use 9900


var location=[
    {
        name:"prashant"
    }
]

//defaut server
app.get('/',(req,res)=>{
    res.status(200).send("my home route ")
})


//location server
app.get('/location',(req,res)=>{
    res.status(200).send(location)
})


//server listen
app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`server is running on the port ${port}`)

})