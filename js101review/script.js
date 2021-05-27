
function printBox(width, height){


    let count = height;

    while(count > 0)
    {
        if(count === 1 || count === height)
        {
            for(let x = 1; x <= width; x++)
            {
                process.stdout.write("*")
            }
        }

        else{

            process.stdout.write("*")

            for(let x = 2; x<=width -1; x++)
            {
                process.stdout.write(" ")
            }

            process.stdout.write("*")

        }

        console.log("")
        count--;
    }
}
console.log(process.stdout)
printBox(7,10)