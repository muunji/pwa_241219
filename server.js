const http = require('node:http');
const fs =require('node:fs');

const server = http.createServer((req,res)=>{
  if(req.method==="GET"){
    console.log(req.url);
    if(req.url ==='/'){
      fs.readFile("./public/index.html",'utf-8',(err,data)=>{
        if(err) throw err
        res.writeHead(200,{"content-type":"text/html; charset=utf-8"});
        res.write(data);
        res.end();
      });
    }
    if(req.url ==='/index.js'){
      fs.readFile("./public/index.js",'utf-8',(err,data)=>{
        if(err) throw err
        res.writeHead(200,{"content-type":"application/javascript; charset=utf-8"});
        res.write(data);
        res.end();
      });
    }
    if(req.url ==='/test.js'){
      fs.readFile('./public/test.js','utf-8',(err,data)=>{
        if(err) throw err;
        res.writeHead(200,{'content-type':'application/javascript; charset=utf-8'})
        res.write(data);
        res.end();
      })
    }
  }
  if(req.method === "POST"){
    if(req.url==="/click"){
      console.log("click HELLO button");

      let body= '';
      //데이터가 들어오면
      req.on("data",(data)=>{
        body += data;
      });
      
      req.on("end",(data)=>{
        console.log(body);
        console.log("end server");
        res.end();
      });
    }
  }
});

server.listen(3000,(err)=>{
  if(err) throw err
  console.log("http://localhost:3000");
})