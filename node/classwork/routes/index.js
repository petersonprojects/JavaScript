
const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send(`

    <link rel="stylesheet" href="styles.css">
    <h1 class="highlight">Front Page</h1>
    
    `);
});

module.exports = router;