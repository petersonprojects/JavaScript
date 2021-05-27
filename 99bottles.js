

let i = 10;

// while(i > 0)
// {
//     console.log(`${i} bottles of beer on the wall`)
//     console.log(`${i} bottles of beer`)
//     console.log(`Take one down.`)
//     console.log(`Pass it around.`)
//     i--;

//     console.log(`${i} bottles of beer on the wall\n`)
//     console.log()
// }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); 
    //The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
}


let random = getRandomInt(1,11)

console.log(random)

if(random % 2 === 0)
{
    console.log("even")
}
if(random % 2 === 1)
{
    console.log("odd")
}

