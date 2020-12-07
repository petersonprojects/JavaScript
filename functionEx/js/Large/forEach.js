
var arrayNames = [
    { name: 'Bob' },
    { name:'Alice' },
    { name:'Joe' } ];

function fun(arrayItem){

    console.log(`Hello ${arrayItem}`)
}


function forEach(array, fun){
    
    array.forEach(item => {

        fun(item.name);

    })
}

forEach(arrayNames, fun)