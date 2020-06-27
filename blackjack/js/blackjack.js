//build a deck of cards


var deck = [
    {name: 'ace', suit: 'heart', values: [1,11], img: },
    {name: 'ace', suit: 'spade', values: [1,11], img: },
];

var playersHand = [];
var dealersHand = [];

//when the hands are dealt, pop off 4 cards from the array


function shuffleDeck(deck) 
{
    for (var i = deck.length - 1; i > 0; i--) 
    {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}

//"listens" for click, and then executes
// the code inside the code block.  
//Note that the listenter takes as arguments, the event,
// and anfn.

document.getElementById("deal-button").addEventListener("click", function(){
    //write dealer logic here
});
document.getElementById("hit-button").addEventListener("click", function(){
    //write "hit" logic here
});
document.getElementById("stand-button").addEventListener("click", function(){
    //write "Stand" logic here
});