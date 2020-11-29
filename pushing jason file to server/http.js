const http=require('http')
//read file using fs
const fs=require('fs')
//unicode transformayion format
const server = http.createServer((req,res)=>{
    fs.readFile('db.json','utf-8',(err,data)=>{
        if (err) throw err;
        res.write(data);
        res.end();
    })
})

server.listen(8096)