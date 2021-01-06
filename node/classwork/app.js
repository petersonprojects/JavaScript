
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); //views 
app.set('views', 'views'); //use this if you named your views folder something else

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/aboutus'));
app.use(require('./routes/faq'));

//catch all for routes

app.get('*', (req, res) => {
    res.send(`You've reached an error.`);
});

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}...`);
});