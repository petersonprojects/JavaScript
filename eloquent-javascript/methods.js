
let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.")
console.log(rabbit)

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak:speak};
let hungryRabbit = {type: "hungry", speak:speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");