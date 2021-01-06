
// creatinga  stack class with constraints
// stack allows u to push to end of list and take off the end... nothing else
// control/command + Z used to remove your last operation... its modeled as a stack
// push pop and peek
// PPP
// our own interface for this array

class Stack {

    constructor() {
        this.data = []
    }

    pop(){
        return this.data.pop();
    }

    push(val) {
        return this.data.push(val);
    }

    peek() {
        // look at item at the end of the array
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;