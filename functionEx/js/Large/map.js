var arrayNames = [
    { name: 'Bob' },
    { name:'Alice' },
    { name: 'Joe' } ];

function fun(arrayItem){

    return `Hello ${arrayItem}`
}

function map(arr, fun){


    let newArr = arr.map((item)=>{

        return fun(item.name);
    })

    return newArr;

}

let result = map(arrayNames, fun);

console.log(result)