
// var numbers =[[1,2,4],[2,6,8],[3,6]];

// numbers.sort(function(a,b){
//     return numbers.reduce((a,b)=>a + b)
// })

//bonus for each

var fun = name=>console.log(`Hello ${name}`);

var arr = [{name: 'bob'},{name:'alice'},{name:'joe'}];

function map(arr,fun)
{
    var newArr = [];
    for(var x = 0;x < arr.length;x++)
    {
        var result = fun(arr[x].name);
        newArr.push(result);
    }
    return newArr;
}

var newArr = map(arr,fun);
console.log(newArr);
