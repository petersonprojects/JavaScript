
function makeLeet(string)
{
    let splitUp = string.split('');

    for(let x = 0; x<splitUp.length;x++)
    {
        if(splitUp[x] == 'a' || splitUp[x] == 'A')
        {
            splitUp[x] = '4';
        }
        else if(splitUp[x] == 'e' || splitUp[x] == 'E')
        {
            splitUp[x] = '3';
        }
        else if(splitUp[x] == 'g' || splitUp[x] == 'G')
        {
            splitUp[x] = '6';
        }
        else if(splitUp[x] == 'i' || splitUp[x] == 'I')
        {
            splitUp[x] = '1';
        }
        else if(splitUp[x] == 'o' || splitUp[x] == 'O')
        {
            splitUp[x] = '0';
        }
        else if(splitUp[x] == 's' || splitUp[x] == 'S')
        {
            splitUp[x] = '5';
        }
        else if(splitUp[x] == 't' || splitUp[x] == 'T')
        {
            splitUp[x] = '7';
        }
    }
    let newArray = splitUp.join('');
    return newArray;
}

console.log(makeLeet("Testing Out lEEt speAk"));