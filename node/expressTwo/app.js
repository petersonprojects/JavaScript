
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send(`<h1>Home page.</h1>`)
})

app.get('/calc/:x,:y',(req,res)=>{
    let x = parseInt(req.params.x)
    let y = parseInt(req.params.y)
    let sum = x+y;
    res.send(`The sum of ${x} and ${y} is ${sum}`)
})

app.get('/photo?:img',(req,res)=>{
    res.send(`<img src="${req.query.images}">`)
})


// contact?name=Micah&lname=Peterson
// app.get('/contact',(req,res)=>{
    // let fname = req.param('name')
    // let lName = req.param('lname')

//     let fname = req.query.name;
//     let lName = req.query.lname;

//     res.send(`My name is ${fname} ${lName}`)
// })

// app.get('/contact/:fname',(req,res)=>{

//     let name = req.params.fname;
//     res.send(`My first name is: ${name}`)
// })
// app.get('/flights/:from/:to',(req,res)=>{

//     res.send(`Depart from: ${req.params.from} Arriving at: ${req.params.to}`)
// })

// app.get('/aboutus',(req,res)=>{
//     res.send(`<h1>about us!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>`)
// })

// app.get('/cats', (req,res)=>{
//     res.send('<h1>Cat Page</h1>')
// })

// app.get('/pups', (req,res)=>{
//     res.send('<h1>Pup Page</h1>')
// })


// app.get('/yungtest', (req,res) => {
//     res.send('testing123')
// })

app.listen(3002,()=>{
    console.log('listening on port 3002');
})