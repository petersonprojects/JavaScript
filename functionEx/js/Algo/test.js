


const numberNOfOccurences = (array, n) => {

    var myObj = []
    var result;
    array.forEach(val => {

        myObj.forEach(obj => {

            if(obj.value == val)
            {
                obj.count = obj.count + 1;
            }
        })

        myObj.push({value: val, count: 1})

    })

    myObj.forEach(obj => {

        if(obj.count === n)
        {
            result = obj.value;
        }
    })

    return result;

}

let myArray = [10,10,1,1,5,5,20,20,20,20];

let answer = numberNOfOccurences(myArray, 2)

console.log(answer)