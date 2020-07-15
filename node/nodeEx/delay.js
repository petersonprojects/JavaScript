
// Rewrite the following normal functions into callback functions.

var add = ((x,y)=>{
    let result = x + y;
    return result;
})

var subtract = ((x,y)=>{
    let result = x - y;
    return result;
})

var calc = (x,y,operation) => {
    return operation(x,y);
}

var greeting = ((person)=>{
    return `Hola ${person}!`
})

var hello = (person, greeting) => {
    return greeting(person);
}

var product = ((numbers)=>{
    return numbers.reduce((a,b)=>{
        return a*b;
    },1)
})


var nums = [5,4];

var mult = (numbers, product) =>{
    return product(numbers);
}


//adding 1 second delay

setTimeout(()=>{
    console.log(calc(5,4,add))
    console.log(calc(5,4,subtract))
    console.log(hello('micah',greeting))
    console.log(mult(nums, product))
},1000)

