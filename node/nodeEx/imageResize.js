
const request = require('request');
const fs = require('fs')
const gm = require('gm').subClass({imageMagick: true});
var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';

// gm(request(url))
// .resize('240','240')
// .write('./imageResized.png',(err)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     console.log('done');
// });

var options = {
    url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    encoding: null
};

request(options, (error, response, imageData)=>{

    let fileToWrite = './image.png';

    fs.writeFile(fileToWrite, imageData,(error)=>{
        if(error)
        {
            console.log(error);
        }
        gm(fileToWrite)
        .resize('240','240')
    });
    //save image data and resize
})

