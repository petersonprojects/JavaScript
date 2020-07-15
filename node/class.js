
// ****  everything inside of node is a callback  ****

const dns = require('dns');
// error first callback
//parameters after are based on the method you're using
//this is a core module
dns.lookup('google.com',(err, address, family)=>{
    console.log(`Address: ${address}, Family: ${family}`)
})

//let's build a server!

