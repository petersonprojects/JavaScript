
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'))

app.use(require('./routes/index'))
app.use(require('./routes/aboutus'))
app.use(require('./routes/faq'))

app.get('*', (req,res)=>{
    res.send(`You've reached an error.`)
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}...`);
});