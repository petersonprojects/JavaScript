
function printSquare(size)
{
    var count = size;
    
    while(count > 0)
    {

        if(count == 1)
        {
            for(var x = 1;x <= size; x++)
            {
                process.stdout.write("*");
            }
        }
        else if(count == size)
        {
            for(var x = 1;x <= size; x++)
            {
                process.stdout.write("*");
            }
        }
        else
        {
            process.stdout.write("*");
            for(var x = 2;x <= size-1; x++)
            {
                process.stdout.write(" ");
            }
            process.stdout.write("*");
        }
        
        console.log("");
        count--;
    }
}


printSquare(10);