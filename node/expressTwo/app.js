
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send(`<h1>Second time making this bad boy</h1>`)
})


// contact?name=Micah&lname=Peterson
app.get('/contact',(req,res)=>{
    let fname = req.param('name')
    let lName = req.param('lname')
    res.send(`My name is ${fname} ${lName}`)
})

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