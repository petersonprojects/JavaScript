


function decipher(string, offset)
{

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z' ];

    let lengthString = string.length;
    let alphabetLength = alphabet.length;

    let cipher = "";

    for(let x = 0; x < lengthString; x++)
    {
        let temp = myString[x];
        
        if(temp == ' ')
        {
            cipher = cipher + ' ';
        }

        for(let y = 0; y < alphabetLength; y++)
        {
            if(temp == alphabet[y])
            {
                // handles index overflow
                if(y + offset > 25)
                {
                    newIndex = ((y + offset) % 25) - 1
                }
                else
                {
                    newIndex = y + offset;
                }

                cipher = cipher + alphabet[newIndex];

                // saves run-time
                break;

            }
        }
    }
    
    return cipher;
}


let offset = 13;
let myString = "lbh zhfg hayrnea jung lbh unir yrnearq";

console.log(decipher(myString, offset))

