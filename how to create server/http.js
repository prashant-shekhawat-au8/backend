//require use to add node.js module
var http = require("http");

// creating server
var server = http.createServer((req,res)=>{
    res.write('<h1>Hi from Node js</h1>');
    res.end();
})

//creating port , never use 8080 port because already occupied by other resource(skype)
server.listen(8990)