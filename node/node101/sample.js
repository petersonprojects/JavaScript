
let log = require('./log');
let Stack = require('./stack');

// log.js and Stack are local modules that I created with data and methods


let stack1 = new Stack();
stack1.push(3)
stack1.push(6)
stack1.push(9)
stack1.push(12)
stack1.push(15)

console.log(stack1.peek())
// let stack2 = new Stack();


log.info("this is a great day")
log.warning("pollution is high")
log.error('what are you doing stop it')

module.exports = log;