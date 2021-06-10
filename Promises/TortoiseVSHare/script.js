// tort vs hare

let tortoise = new Promise((resolve, reject) => {

    const rndInt = Math.floor(Math.random() * 10) + 1
    console.log(rndInt)

    setTimeout(()=> {

        let tortTime = document.getElementById('tortTime')
        tortTime.innerHTML = `Tortoise: ${rndInt} seconds`;
        resolve(rndInt)

    }, rndInt * 1000)

})

let hare = new Promise((resolve, reject) => {

    const rndInt = Math.floor(Math.random() * 10) + 1
    console.log(rndInt)

    setTimeout(()=> {
        let hareTime = document.getElementById('hareTime')
        hareTime.innerHTML = `Hare: ${rndInt} seconds`;
        resolve(rndInt)
    }, rndInt * 1000)
})

Promise.race([tortoise, hare]).then(value => {

    let winner = document.getElementById('winner')
    let t = document.getElementById('tortTime').innerHTML
    let h = document.getElementById('hareTime').innerHTML

    if(t > h)
    {
        winner.innerHTML = "Tortoise Wins!"
    }
    else
    {
        winner.innerHTML = "Hare Wins!"
    }
})
