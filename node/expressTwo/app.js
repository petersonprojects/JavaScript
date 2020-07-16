
const express = require('express');

const app = express();

app.listen(3002,()=>{
    console.log('listening on port 3002');
})

app.get('/',(req,res)=>{
    res.send(`<h1>Second time making this bad boy</h1>`)
})

app.get('/aboutus',(req,res)=>{
    res.send(`<h1>about us!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>`)
})