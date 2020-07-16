
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.static('public'))

//home page
app.get('/',(req,res)=>{
    res.send(`

    <link rel="stylesheet" href="styles.css">
    <h1 class="bg-tomato">Hello World!</h1>

    `)
});

app.get('/greeting.html',(req,res)=>{
    res.send(`route`)
});

app.get('/api', (req,res) => {
    
    axios.get('https://corona.lmao.ninja/v2/states')
    .then((response)=>{
        console.log(response);

        // res.json(response);
    })

    res.send('hello world')
});

app.get('/cats',(req,res)=>{
    res.send(`<h1>Meow</h1>`)
});

app.get('/dogs',(req,res)=>{
    res.send(`<h1>Woof</h1>`)
});

app.get('/cats_and_dogs',(req,res)=>{
    res.send(`<h1>Living together</h1>`)
});

app.get('/greet/:name',(req,res)=>{
    let name = req.params.name;
    res.send(`<h1>Hello ${name}</h1>`)
});

app.get('/year',(req,res)=>{
    let age = req.query.age;
    let year = 2020 - age;
    res.send(`<h1>You were born in ${year}</h1>`)
});

let data =
    [
        {
            id: 0,
            name: "labrador",
            img: "https://image.shutterstock.com/image-photo/group-two-labradors-retrievers-laying-600w-1654803931.jpg"
        },
        {
            id: 1,
            name: "golden retriever",
            img: "https://image.shutterstock.com/image-photo/group-two-labradors-retrievers-laying-600w-1654803931.jpg"
        },
        {
            id: 2,
            name: "shitzu",
            img: "https://image.shutterstock.com/image-photo/group-two-labradors-retrievers-laying-600w-1654803931.jpg"
        },
        {
            id: 3,
            name: "poodle",
            img: "https://image.shutterstock.com/image-photo/group-two-labradors-retrievers-laying-600w-1654803931.jpg"
        }
    ];

app.get('/data/:id', (req,res) => {

    let index = parseInt(req.params.id) - 1;
    let name = data[index].name;
    let url = data[index].img;
    console.log(url);
    res.send(`Name: ${name} <img src="${url}"/>`);

});

// choose a port on your network card to listen to
app.listen(3005, ()=>{
    console.log('Running express on port 3005...');
});