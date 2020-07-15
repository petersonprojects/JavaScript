
// Rewrite the following normal functions into callback functions.

var add = ((x,y)=>{
    let result = x + y;
    return result;
})

var subtract = ((x,y)=>{
    let result = x - y;
    return result;
})

var greeting = ((person)=>{
    return `Hola ${person}!`
})

var product = ((numbers)=>{
    return numbers.reduce((a,b)=>{
        return a*b;
    },1)
})

var nums = [5,4];

//adding 1 second delay

setTimeout(()=>{
    console.log(add(5,4))
    console.log(subtract(5,4))
    console.log(greeting('micah'))
    console.log(product(nums))
},1000)

