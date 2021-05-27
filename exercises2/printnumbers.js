
function printNums(num1,num2)
{
    for(let x = num1;x <= num2; x++)
    {
        console.log(x);
    }
}

function printNums2(num1,num2)
{
    let count = num1;
    while(count <= num2)
    {
        console.log(count);
        count++;
    }
}

printNums2(0,42);

