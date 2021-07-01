
const http = require('http');

//create a server

const server = http.createServer((req,res)=>{

    // handling incoming requests and returning response
    // this part of the conversation is stateless
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>Hello World!</h1>');
    res.end();
})

// listen for requests
// recieves a port number (approx 70000 ports on network card)
server.listen(5000, ()=>{
    console.log('Node.js web server at port 5000 is running...\n');
})

