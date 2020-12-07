
// function fun(){
//     console.log("Hello, world!")
// }

let fun = () => {
    console.log("Hello, world!")
}


function call3Times(fun) {
    fun(); 
    fun(); 
    fun();
}

call3Times(fun);