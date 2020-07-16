
const request = require('request');
const fs = require('fs')
const gm = require('gm')

var options = {
    url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    encoding: null
};

request(options, (error, response, imageData)=>{

    let fileToWrite = 'image.png';

    fs.writeFile(fileToWrite, imageData,(error)=>{
        if(error)
        {
            console.log(error);
        }


        gm('image.png')
        .resize(240,240)
        .write('image2.png',(err)=>{
            if(err)
            {
                console.log(err);
            }
        })

    });
    //save image data and resize
})

