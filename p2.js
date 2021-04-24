

// P2. Two Sum

// Given an array of integers, 
// return indices of the two numbers such that they add up to a specific target.

// Example:
// Given nums = [2, 7, 11, 15]
// target = 9

// return [0, 1] 


// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice


const twoSum = (array, target) => {

    // assume we are returning an array with both incides

    let localArr = [];
    for(let i = 0; i < array.length; i++)
    {

        for(let j = i + 1; j < array.length; j++)
        {
            // i = 0
            // j = 1 - end of arr
            // second time
            // i = 1
            // j = 2 - end
            if(array[i] + array[j] === target)
            {
                localArr.push(i)
                localArr.push(j)
            }
        }
    }

    return localArr;
}



var cache = {};


const twoSumCache = (array, target) => {

    // let count = 0;

    // for(let i = 0; i < array.length; i++)
    // {
    //     if(i+1 != array.length)
    //     {
    //         let keyString = "[" +i +", " +(i + 1) +"]";

    //         cache[keyString] = array[i] + array[i+1];

    //         if(cache[keyString] == target)
    //         {
    //             return keyString;
    //         }

    //     }
    // }

    // // take the number off the top
    // array.splice(count, 1, 0);
    // count++;

    // console.log(array);

    // for(let i = 0; i < array.length; i++)
    // {
    //     if(i+1 != array.length)
    //     {
    //         let keyString = "[" +i +", " +(i + 1) +"]";

    //         if(cache[keyString] === undefined)
    //         {
    //             cache[keyString] = array[i] + array[i+1];
    //         }

    //         if(cache[keyString] == target)
    //         {
    //             return keyString;
    //         }

    //     }
    // }

    // // twoSumCache(array)
    // if(array.length > 1)
    // {
    //     twoSumCache(array, target);
    // }


    // console.log(array);

    // then loop through the cache

    // console.log(cache)

}


let exampleArray = [2, 7, 11, 15, 20, 22];

// let result = twoSum(exampleArray, 22);

let result = twoSumCache(exampleArray, 31)

console.log(result);


// time complexity: n^2 (nested loop)