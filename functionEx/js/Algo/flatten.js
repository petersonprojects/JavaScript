

// Without using .flat(), create a function to flatten an array 
const exampleArray = [1,2,[3,4,[5,6,7, [69,70,71, [30,40,50, [99,100,111]]]], 8], 9, 10]


function accumulator(a, b){
    
    if(Array.isArray(b))
    {
        return a.concat(b.reduce(accumulator, []))
    }
    
    return a.concat(b)
}

function flatten(array){
    return array.reduce(accumulator, [])
}


let result = flatten(exampleArray)

console.log(result)
