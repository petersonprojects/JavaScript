function makeLong(string)
{
    var splitUp = string.split('');

    for(var x = 0; x < splitUp.length;x++)
    {
        // if the last letter is a vowel don't extend it
        if(x == splitUp.length-1)
        {
            break;
        }
        if(splitUp[x] == 'e' || splitUp[x] == 'E')
        {
            if((splitUp[x+1] == 'e'))
            {
                splitUp[x] = 'ee'
                splitUp[x+1] = 'ee'
                break;
            }

        }
        if(splitUp[x] == 'o' || splitUp[x] == 'O')
        {
            if((splitUp[x+1] == 'o'))
            {
                splitUp[x] = 'oo'
                splitUp[x+1] = 'oo'
                break;
            }
        }
    }
    var newArray = splitUp.join('');
    return newArray;
}

console.log(makeLong("good"));