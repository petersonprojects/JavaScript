

let acronym = (arrayOfWords) => {

    return arrayOfWords.reduce((accumulator, word) => {
        return accumulator + word.charAt(0);
    }, "")

}


let example = ["Brotherhood", "Ending", "All", "Nonsense", "Statements"]

let result = acronym(example);

console.log(result);