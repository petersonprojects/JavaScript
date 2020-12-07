

let sum = (array) => {

    return array.reduce((a, b) => {
        return a + b;
    }, 0)

}

let example = [0, 1, 2, 3, 4]

let result = sum(example)

console.log(result)