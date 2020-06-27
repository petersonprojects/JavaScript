//build a deck of cards


// var deck = [
//     {name: 'ace', suit: 'heart', values: [1,11], img: },
//     {name: 'ace', suit: 'spade', values: [1,11], img: },
// ];

// var playersHand = [];
// var dealersHand = [];

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
var dh = document.getElementById("dealer-hand");

var img1 = document.createElement('img');
img1.src="JPEG/purple_back.jpg"
dh.appendChild(img1);

var img2 = document.createElement('img');
img2.src="JPEG/10S.jpg"
img2.className="ml-3"
dh.appendChild(img2);

//player hand
var ph = document.getElementById("player-hand");

var img3 = document.createElement('img');
img3.src="JPEG/AS.jpg"
ph.appendChild(img3);

var img4 = document.createElement('img');
img4.src="JPEG/KH.jpg"
img4.className="ml-3"
ph.appendChild(img4);

document.getElementById("deal-button").addEventListener("click", function(){
    //write dealer logic here
    //retrieve dealer hand

});
document.getElementById("hit-button").addEventListener("click", function(){
    //write "hit" logic here
});
document.getElementById("stand-button").addEventListener("click", function(){
    //write "Stand" logic here
});