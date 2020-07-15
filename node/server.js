

// const http = require('http');

// create a server

// const server = http.createServer((req,res)=>{

    //handling incoming requests and returning response
    // this part of the conversation is stateless
//     res.writeHead(200, {'content-type': 'text/html'});
//     res.write('<h1>Hello World!</h1>');
//     res.end();
// })

//listen for requestes
// recieves a port number (approx 70000 ports on network card)
// server.listen(5000)

// console.log('Node.js web server at port 5000 is running...');

// view it in browser at localhost:portnumber

// var myGreeting = require('./firstMod');


// console.log(myGreeting.greeting);

// myGreeting.greeting.forEach((val)=>{
//     console.log(val);
// })

// var personMod = require('./firstMod')

// var pObj = new personMod.person('micah','peterson');

// pObj.greeting();

var personMod = require('./person');

var micah = new personMod('micah','peterson');

micah.fullName();