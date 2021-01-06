const fs = require('fs')

let file = './stack.js'

fs.readFile(file , (error, buffer) => {

    if(error){
        console.error(error.message)
    }

    console.log(`File Data: ${buffer.toString()}`)
})