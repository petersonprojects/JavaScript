// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//         currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
// }

// console.log("Hello");
// sleep(2000);
// console.log("World!");


// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// console.log("Hello");
// sleep(2000).then(() => { console.log("World!"); });

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function demo() {
    console.log('Taking a break...');
    await sleep(2000);
    console.log('Two seconds later, showing sleep in a loop...');
  
    // Sleep in loop
    for (let i = 0; i < 5; i++) {
      if (i === 3)
        await sleep(2000);
      console.log(i);
    }
  }
  
  demo();