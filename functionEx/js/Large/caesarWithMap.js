

function cipher(word)
{ 
    let text = word.split('');

    let result = text.map(char => {
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''); 
        let chr = char;
        let idx = alphabet.indexOf(chr.toUpperCase());

        let newIdx = idx + 13;

        // checks for overflow
        if (newIdx >= alphabet.length) {
            newIdx -= 26;
        }

        return alphabet[newIdx];
    })

    let joined = result.join('')

    return joined;
} 

let encrypted = cipher("GENIUS")
// You can assume that the text is only one word, all letters are capitalized, and the offset is always 13 var encrypted = cipher('GENIUS');
console.log(encrypted);