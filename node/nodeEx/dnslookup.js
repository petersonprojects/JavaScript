
const dns = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Domain name: ",(domainName)=>{

    dns.lookup(domainName,(err, address)=>{
        if(err)
        {
            console.log(err)
            return;
        }
        console.log(`IP Address: ${address}`)
    })
    rl.close();
})