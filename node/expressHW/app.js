
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send(`<h1>Hello World!</h1>`)
})
app.get('/cats',(req,res)=>{
    res.send(`<h1>Meow</h1>`)
})
app.get('/dogs',(req,res)=>{
    res.send(`<h1>Woof</h1>`)
})
app.get('/cats_and_dogs',(req,res)=>{
    res.send(`<h1>Living together</h1>`)
})
app.get('/greet/:name',(req,res)=>{
    let name = req.params.name;
    res.send(`<h1>Hello ${name}</h1>`)
})
app.get('/year',(req,res)=>{
    let age = req.query.age;
    let year = 2020 - age;
    res.send(`<h1>You were born in ${year}</h1>`)
})

app.listen(3005, ()=>{
    console.log('Running express on port 3005...');
})