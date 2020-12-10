// Algorithm Challenge 2 
// Product Sum 
// Write a function that takes in a "special" array and returns its product sum.
// A "special" array is a non-empty array that contains either integers or other "special" arrays. The product sum of a "special" array its element,where "special" arrays inside it re summed themselves and then multiplied by their level of depth.
// The depth of a "special" array is how far nested it is.  For instance, the depth of [] is 1; the depth of the inner array in [[]] is 2. The depth of the innermost array in [[[]]] is 3.
// Therefore, the product sum mof [x, y] is x + y; the product sum of [x, [y, z]] is x + 2 * (y + z);  the product sum of [x, [y, [z]]] is x + 2 * (y + 3z)
// Sample input
// array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
// Sample Output
// calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)


const exampleArray = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]


function accumulator(a, b){
    
    if(Array.isArray(b))
    {
        return a + b.reduce(accumulator, 0)
    }
    
    return a + b
}

function productSum(array){
    return array.reduce(accumulator, 0)
}


// the array given can be infinitely deep
let result = productSum(exampleArray)

console.log(result)