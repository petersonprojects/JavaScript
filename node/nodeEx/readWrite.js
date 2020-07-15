
const readline = require('readline');
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input file: ", (inputFile)=>{

    rl.question("Output file: ",(outputFile)=>{

        let read = `./${inputFile}`
        let write = `./${outputFile}`
        fs.readFile(read, (error, buffer) => {
    
            if(error)
            {
                console.log(error);
                return;
            }
    
            return buffer.toString().toUpperCase();
    
        });
        rl.close();
    });

});