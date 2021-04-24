

// Without using .flat(), create a function to flatten an array 

const exampleArray = [1, 2,[3,4,[5,6,7], 8], 9, 10];


function reducer(a, b){
    
    if(Array.isArray(b))
    {
        return a.concat(b.reduce(reducer, []))
    }
    
    return a.concat(b)
}

function flatten(array){
    return array.reduce(reducer, [])
}

let result = flatten(exampleArray)

console.log(result)
