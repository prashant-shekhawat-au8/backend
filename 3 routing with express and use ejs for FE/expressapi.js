//usednodemon for live experrience
// Build server with express

const express = require("express");
const app=express();   //object of express
const port=process.env.PORT || 9801;  //look server for port no if not found use 9900

//how to route further like location\details hotel\details
const hotelRouter=require('./scr/Route/hotelRoute');
const locationRouter=require('./scr/Route/locationRoute');

// var menu=[
//     {link:"/",name:"Home"},
//     {link:"/hotel",name:"Hotels"},
//     {link:"/location",name:"city"}
// ]

//below code writeen in html in order to run for loop
// <% for (i=0;i<menuitem.length;i++){ %>
//     <li>
//         <a href="<%menuitem.link%>"><%menuitems[i].name%></a>
//     </li>


//three things to be done in order to run ejs
//1 where are static files
app.use(express.static(__dirname+'/public'));
//2 html
app.set('views','./scr/views');
//3 which engine is used
app.set('view engine','ejs')

var location=[
    {
        name:"prashant"
    }
]


 //defaut server
app.get('/',(req,res)=>{
   // res.status(200).send("my home route ")
   res.render('index',{tittle:"my home page"})
})


// //location server
// app.get('/location',(req,res)=>{
//     res.status(200).send(location)
// })

/

app.use('/location',locationRouter)
app.use('/hotel',hotelRouter)

//server listen
app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`server is running on the port ${port}`)

})