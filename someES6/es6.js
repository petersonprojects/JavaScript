

// ...args is interpreted as an array
let sum = (...args) => {
    return args.reduce((acc, val) => {
        return acc + val
    }, 0)
}


let sums = sum(10, 23, 33, 220)

console.log(sums);

