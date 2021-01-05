
const http = require('http');

const server = http.createServer((req, res)=>{

    // listening for a specific url
    // build a page up
    // then send a response(res) to the client
    // attach info to response object so c++ can handle
    switch(req.url)
    {
        case '/':
        {
            res.statusCode = 200;
            res.setHeader('content-type', 'text/html');

            res.end(`<h1>Hello World</h1>`)

            break;
        }
        default:
            break;
    }

});

server.listen(3000, ()=>{

    console.log('Now listening on port 3000...')
});