
// var numbers =[[1,2,4],[2,6,8],[3,6]];

// numbers.sort(function(a,b){
//     return numbers.reduce((a,b)=>a + b)
// })

//bonus for each

function fun(name){
    console.log(`Hello ${name}`); 
}

var arr = [{name: 'bob'},{name:'alice'},{name:'joe'}];

function forEach(arr, fun)
{
    for(var i = 0;i<arr.length;i++)
    {
        fun(arr[i].name);
    }
}

forEach(arr,fun);
