
function printBox(width, height)
{
    let count = height;
    
    while(count > 0)
    {
        // special case for first and last line
        if(count == 1 || count == height)
        {
            for(let x = 1;x <= width; x++)
            {
                process.stdout.write("*");
            }
        }
        // else its one of the line in between that has spaces
        else
        {
            process.stdout.write("*");

            for(let x = 2;x <= width-1; x++)
            {
                process.stdout.write(" ");
            }

            process.stdout.write("*");
        }
        
        console.log("");
        count--;
    }
}


printBox(7,10);