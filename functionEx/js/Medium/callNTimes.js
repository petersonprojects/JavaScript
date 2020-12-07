


let fun = () => {
    console.log("Hello, world!")
}


function callNTimes(n, fun) {
    
    for(let i = 0; i < n; i++)
    {
        fun();
    }

}

callNTimes(5,fun);