

function makeBanner(string)
{
    for(var x=0;x<string.length;x++)
    {
        process.stdout.write("*");
    }
    process.stdout.write("****");
    console.log("");
    process.stdout.write("* " +string +" *");
    console.log("");

    for(var x=0;x<string.length;x++)
    {
        process.stdout.write("*");
    }
    
    process.stdout.write("****");
    console.log("");
}

makeBanner("Easy banner");