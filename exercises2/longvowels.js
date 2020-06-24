function makeLong(string)
{
    var splitUp = string.split('');

    for(var x = 0; x<splitUp.length;x++)
    {
            if(splitUp[x] == 'e' || splitUp[x] == 'E')
            {
                splitUp[x] = 'eeee';
            }
            if(splitUp[x] == 'o' || splitUp[x] == 'O')
            {
                splitUp[x] = 'oooo';
            }
    }
    var newArray = splitUp.join('');
    return newArray;
}

console.log(makeLong("Cheese"));