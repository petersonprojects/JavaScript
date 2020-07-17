
const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{

    let pictures = [
        "https://images-na.ssl-images-amazon.com/images/I/71qWfXW6tbL._AC_SL1400_.jpg",
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/5-houston-skyline-library-of-congress.jpg",
        "https://images.fineartamerica.com/images-medium-large-5/houston-skyline-p-a-thompson.jpg"
    ];

    let names = [
        "Micah",
        "Woody",
        "RJ",
        "Jeremy",
        "Chris",
        "Dan",
        "Cainan",
        "Michael",
        "Daniel",
        "Veronica"
    ];

    let cities = [
        "Atlanta",
        "Houston",
        "Seattle",
        "Miami"
    ];

    res.render('index', {
        firstName: "Micah",
        lastName: "Peterson",
        pic: pictures,
        names: names,
        cities: cities
    });

});

module.exports = router;