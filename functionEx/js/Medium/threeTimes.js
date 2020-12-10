
// function fun(){
//     console.log("Hello, world!")
// }

let fun = () => {
    console.log("Hello, world!")
}


function call3Times(hai) {
    hai(); 
    hai(); 
    hai();
}

call3Times(fun);