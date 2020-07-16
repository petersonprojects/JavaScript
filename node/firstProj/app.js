
const express = require('express');

const app = express();

app.get('/', (req, res)=>{

    res.send('<h1>This is express</h1>')

})

app.get('/aboutus', (req, res)=>{

    res.send('<h1>This is express aboutus</h1>')

})

app.listen(3000,()=>{
    console.log('Running express on port 3000');
});