
function posNums(numArray)
{
    var tempList = [];
    
    for(var x = 0; x<numArray.length;x++)
    {
        if(numArray[x] > 0)
        {
            tempList.push(numArray[x]);
        }
    }

    return tempList;
}

var example = [-5,-3,-2,0,1,2,3,5];

console.log(posNums(example));