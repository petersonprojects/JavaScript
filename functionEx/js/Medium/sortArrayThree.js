
// reduce method and sort method

// function getSum(a, b)
// {
//     return a + b;
// }


var numbers = [ [1,3,4],
                [2,4,6,8],
                [3,6],
                [1000,2000,3000]
            ];

numbers.sort((a, b) => {
    return  a.reduce(function(a,b){return a + b},0) - b.reduce(function(a,b){return a + b},0) 
})


console.log(numbers)