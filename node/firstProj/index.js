
const http = require('http');

const server = http.createServer((req,res)=>{
    //code to send out a respsonse
    //localhost:5000

    if(req.url === '/')
    {
        res.writeHead(200, {'Content-type':'text/html'});
        res.write('<h1>Hello World</h1>');
        res.end();
    }
    else if(req.url === '/aboutus')
    {
        res.writeHead(200, {'Content-type':'text/html'});
        res.write('<h1>About us with pure node</h1>');
        res.end();
    }

});

server.listen(5000);

console.log('Node is running on port 5000');