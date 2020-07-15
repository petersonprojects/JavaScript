
const readline = require('readline');
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Name of file: ", (fileName)=>{

    let temp = `../${fileName}`
    fs.readFile(temp, (error, buffer) => {

        if(error)
        {
            console.log(error);
            return;
        }

        console.log(`File in all caps: ${buffer.toString().toUpperCase()}`);

    })

    rl.close();
})