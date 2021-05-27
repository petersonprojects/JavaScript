function makeLong(string)
{
    let splitUp = string.split('');

    for(let x = 0; x < splitUp.length;x++)
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
        if(splitUp[x] == 'a' || splitUp[x] == 'A')
        {
            if((splitUp[x+1] == 'a'))
            {
                splitUp[x] = 'aa'
                splitUp[x+1] = 'aa'
                break;
            }
        }
    }

    let newArray = splitUp.join('');

    return newArray;
}

console.log(makeLong("man"));