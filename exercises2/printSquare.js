

function printSquare(size)
{
    var count = size;
    while(count > 0)
    {
        for(var x = 1;x <= size; x++)
        {
            process.stdout.write("*");
        }
        console.log("");
        count--;
    }

}


printSquare(10);