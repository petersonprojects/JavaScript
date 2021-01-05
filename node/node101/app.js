
const http = require('http');

const sampleModule = require('./sample');

console.log(sampleModule);
// console.log(sampleModule)

const server = http.createServer((req, res)=>{

    // listening for a specific url
    // build a page up
    // then send a response(res) to the client
    // attach info to response object so c++ can handle
    res.statusCode = 200;


    switch(req.url)
    {
        case '/':
        {
            res.setHeader('content-type', 'text/html');
            res.end(`<h1>Hello World</h1>`)

            break;
        }
        case '/aboutus':
        {
            res.setHeader('content-type', 'text/html');
            res.end(`<h1>About Us</h1>`)

            break;
        }
        case '/data':
        {
            res.setHeader('content-type', 'application/json');

            let students = [{firstName: 'Andrea', lastName: 'Myers'}, {firstName:'Matthew', lastName:'Roberts'}];

            students = JSON.stringify(students);

            res.end(students)
        }

        default:
            res.end(`<h1>That's not a valid url... try visiting the home page :/</h1>`)
            break;
    }

});

server.listen(3000, ()=>{

    console.log('Now listening on port 3000...')
});