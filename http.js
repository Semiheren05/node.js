const http = require('http');

const server = http.createServer((req,res)=>{
     console.log(req.url , req.method); 
});

server.listen(3000);
console.log('Listening port on  3000.. ');