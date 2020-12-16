

// fetches to 20 different urls

// promise
// dont fetch the next url until all the other data is loaded in

fetch('url')
.then(res => res.json()) // converting JSON string to JS objects
.then(data =>{

    // data is now an array of JS objects
    // Dom manipulation
})
.catch() //bad response


//jQuery

$.get('url') //
.done((data)=>{

})
.fail() //errors


