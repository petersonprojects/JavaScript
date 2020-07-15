// reading a file

const fs = require('fs');

let fileName = "./preamble.txt";

fs.readFile(fileName, (error, buffer) => {

    if(error)
    {
        console.log(error);
        return;
    }

    console.log(`File Data: ${buffer.toString()}`);

})