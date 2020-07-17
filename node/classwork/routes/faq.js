
const express = require('express');
const router = express.Router();

router.get('/FAQ',(req, res)=>{
    res.send('FAQ');
});

module.exports = router;