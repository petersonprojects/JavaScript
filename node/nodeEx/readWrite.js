
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
            
            let output = buffer.toString().toUpperCase();

            fs.writeFile(write, output,(error)=>{
                if(error)
                {
                    console.log(error);
                }
                console.log(`Content from ${read} written to ${write}!`)
                console.log(`${write} should now contain ${output}`);
            });
    
        });

        rl.close();
    });

});