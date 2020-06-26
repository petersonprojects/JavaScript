//build a deck of cards
var deck = [
    {name: 'ace', suit: 'heart', values: [1,11], img: },
    {name: 'ace', suit: 'spade', values: [1,11], img: },
];

var playersHand = [];
var dealersHand = [];

//when the hands are dealt, pop off 4 cards from the array

//three event listeners for deal hit and stand

//shuffle deck function

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

//in your JS file, add the following code.  This code "listens" for the user to click the button, and then executes the //code inside the code block.  Note that the listenter takes as arguments, the event, and and annonymous function.  
document.getElementById("btnDeal").addEventListener("click", function(){
    //write dealer logic here
});
document.getElementById("btnHit").addEventListener("click", function(){
    //write "hit" logic here
});
document.getElementById("btnStand").addEventListener("click", function(){
    //write "Stand" logic here
});