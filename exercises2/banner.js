
function printAsManyStarsAsLength(string)
{
    for(var x = 0; x < string.length; x++)
    {
        process.stdout.write("*");
    }
}

function makeBanner(string)
{
    printAsManyStarsAsLength(string);

    console.log("****");

    console.log("* " +string +" *");

    printAsManyStarsAsLength(string);
    
    console.log("****");

}

makeBanner("super long banner used for testing");

