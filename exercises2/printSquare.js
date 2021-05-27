

function printSquare(size)
{

    let count = size; // did this so i could use it a while loop

    // outer loop that counts down and represents each row
    while(count > 0)
    {
        // inner loop that counts up and is each indiv. star in the line
        for(let x = 1;x <= size; x++)
        {
            process.stdout.write("*");
        }

        // create a new-line
        console.log("");
        count--;
    }

}

function printSquare2(size)
{
    let result = "*"*size
    console.log(result)
    return result;
}


printSquare(5);
printSquare2(5);