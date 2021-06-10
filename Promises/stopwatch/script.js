
// grab our start button from DOM
let startButton = document.getElementById("start");

// listen for a click
startButton.addEventListener("click", (e)=>{

    // at this point our button has been clicked 
    // -- show the user that they are waiting for something

    startButton.innerHTML = "Waiting..."

    
    let promise = new Promise((resolve, reject) => {

        // get a random integer 1-10
        const rndInt = Math.floor(Math.random() * 10) + 1

        // lets log it to make sure it's in the right format
        console.log(rndInt)

        // setTimeout is a built-in JS function that takes
        // a function and a time (in milliseconds) as arguments

        setTimeout(()=> {

            // what's inside here is only called once (rndInt * 1000) milliseconds has elapsed
            resolve(rndInt)

        }, rndInt * 1000) // rndInt is an integer, so we multiply by 1000 to convert to time in milliseconds

    })
    
    // this wont execute until something is resolved from our promise
    promise.then(number => {

        // what is number?
        // number was passed from above once it was resolved.. it's our random integer
        console.log(number)

        // grab out div that holds the time and display our number
        let timeElapsed = document.getElementById("timer")
        timeElapsed.innerText = `${number} second(s) elapsed.`

        // change waiting.. to retry to enhance user experience
        startButton.innerHTML = "Retry"
    })

})