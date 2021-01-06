
const readline = require('readline');
const fs = require('fs');
const request = require('request');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("URL: ", (url)=>{
    rl.question("File to save: ",(outputFile)=>{
        let read = url;
        let write = `./${outputFile}`;

        request.get(read, (error, response, html) => {
    
            if(error)
            {
                console.log(error);
                return;
            }
            
            let output = html;
            
            fs.writeFile(write, output,(error)=>{
                if(error)
                {
                    console.log(error);
                }
                console.log(`Content from ${read} written to ${write}!`)
                console.log(`${write} should now contain ${url}'s HTML`);
            });
    
        });

        rl.close();
    });
});