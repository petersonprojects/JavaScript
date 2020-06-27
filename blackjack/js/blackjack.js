// //build a deck of cards
// var deck = [{suit:'',points:0}];
// var suit = 'hearts'
// var points = 0;

// for(var x=0;x<53;x++)
// {
//     if(points==13||points==26||points==39||points==52)
//         {
//             points=0;

//             if(deck[x][suit]=='hearts'){
//                 deck[x].suit='spades'
//             }
//             else if(deck[x].suit=='spades'){
//                 deck[x].suit='clubs'
//             }
//             else if(deck[x].suit=='clubs'){
//                 deck[x].suit='diamonds'
//             }
//             else if(deck[x].suit=='diamonds'){
//                 deck[x].suit='hearts'
//             }
//         }

//     points++;
//     console.log(points);

//     deck[points]= points;
//     deck[suit]=suit;
// }

// console.log(deck);

//gave up and decided to just manually create a deck of cards

var deck = [
    {value:1,suit:'hearts'},
    {value:2,suit:'hearts'},
    {value:3,suit:'hearts'},
    {value:4,suit:'hearts'},
    {value:5,suit:'hearts'},
    {value:6,suit:'hearts'},
    {value:7,suit:'hearts'},
    {value:8,suit:'hearts'},
    {value:9,suit:'hearts'},
    {value:10,suit:'hearts'},
    {value:11,suit:'hearts'},
    {value:12,suit:'hearts'},
    {value:13,suit:'hearts'},
    {value:1,suit:'diamonds'},
    {value:2,suit:'diamonds'},
    {value:3,suit:'diamonds'},
    {value:4,suit:'diamonds'},
    {value:5,suit:'diamonds'},
    {value:6,suit:'diamonds'},
    {value:7,suit:'diamonds'},
    {value:8,suit:'diamonds'},
    {value:9,suit:'diamonds'},
    {value:10,suit:'diamonds'},
    {value:11,suit:'diamonds'},
    {value:12,suit:'diamonds'},
    {value:13,suit:'diamonds'},
    {value:1,suit:'clubs'},
    {value:2,suit:'clubs'},
    {value:3,suit:'clubs'},
    {value:4,suit:'clubs'},
    {value:5,suit:'clubs'},
    {value:6,suit:'clubs'},
    {value:7,suit:'clubs'},
    {value:8,suit:'clubs'},
    {value:9,suit:'clubs'},
    {value:10,suit:'clubs'},
    {value:11,suit:'clubs'},
    {value:12,suit:'clubs'},
    {value:13,suit:'clubs'},
    {value:1,suit:'spades'},
    {value:2,suit:'spades'},
    {value:3,suit:'spades'},
    {value:4,suit:'spades'},
    {value:5,suit:'spades'},
    {value:6,suit:'spades'},
    {value:7,suit:'spades'},
    {value:8,suit:'spades'},
    {value:9,suit:'spades'},
    {value:10,suit:'spades'},
    {value:11,suit:'spades'},
    {value:12,suit:'spades'},
    {value:13,suit:'spades'},
];

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

var newDeck = shuffleDeck(deck);

var imgUrls = newDeck.map(function(deckObj){
    var temp = deckObj.value
    if(temp == 1)
    {
        temp = 'A'
    }
    if(temp == 11)
    {
        temp = 'J'
    }
    if(temp == 12)
    {
        temp = 'Q'
    }
    if(temp == 13)
    {
        temp = 'K'
    }

    return `JPEG/${temp}${deckObj.suit[0].toUpperCase()}.jpg`
})

var playersHand = [newDeck[0],newDeck[2]];
var dealersHand = [newDeck[1],newDeck[3]];

var temp = document.createElement('img');
temp.src = imgUrls[1];

newDeck.shift();
newDeck.shift();
newDeck.shift();
newDeck.shift();

//to start, it needs to hide the card and then
// it needs to unhide the dealer first card once the player stands

var dh = document.getElementById("dealer-hand");
var ph = document.getElementById("player-hand");
var img1 = document.createElement('img');
var img2 = document.createElement('img');
var img3 = document.createElement('img');
var img4 = document.createElement('img');

document.getElementById("deal-button").addEventListener("click", function(){
    //dealer hand

    img1.src="JPEG/purple_back.jpg"
    dh.appendChild(img1);


    img2.src=imgUrls[3];
    img2.className="ml-3"
    dh.appendChild(img2);

    //player hand

    img3.src=imgUrls[0];
    ph.appendChild(img3);


    img4.src=imgUrls[2];
    img4.className="ml-3"
    ph.appendChild(img4);

    imgUrls.shift();
    imgUrls.shift();
    imgUrls.shift();
    imgUrls.shift();

});




// var temp = newDeck[0].value;

document.getElementById("hit-button").addEventListener("click", function(){
    var hit = document.createElement('img');
    hit.src=imgUrls[0];

    playersHand.push(newDeck.shift())
    //for loop for adding hand



    var phandArray = playersHand.map(function(handObj){
        var temp = handObj.value;
        if(temp >= 10)
        {
            temp = 10;
        }
        return temp;
});

        var phandsum = 0;
        for(var i=0;i<phandArray.length;i++)
        {
            phandsum += pHandArray[i];
        }

        if(phandsum >= 17)
        {
            done = true;
            console.log("dealer done");
        }

    if(phandsum > 21)
    {
        console.log("You busted!");
        //restarting logic
    }

    console.log(`Players hand: ${phandsum}`);

    imgUrls.shift();
    //write a check to see what the total value of the players hand is and compare them

    hit.className="ml-3"
    ph.appendChild(hit);
});

var testing = 1;

document.getElementById("stand-button").addEventListener("click", function(){
    // unhides the dealers card
    dh.appendChild(temp);
    var done = false;
    while(done == false)
    {

        var dhandTotal = 0;

        var stand = document.createElement('img');
        stand.src=imgUrls[0];
        stand.className="ml-3";
        imgUrls.shift();
        dealersHand.push(newDeck.shift());
                //not sure if this goes here
        dh.appendChild(stand);

        var dHandArray = dealersHand.map(function(handObj){

            var temp = handObj.value;
            console.log(`temp: ${temp}]`);
            if(temp >= 10)
            {
                temp = 10;
            }
            return temp;
        });

       var handsum = 0;
        for(var i=0;i<dHandArray.length;i++)
        {
            handsum += dHandArray[i];
        }

        if(handsum >= 17)
        {
            done = true;
            console.log("dealer done");
        }

              //write a check to see what the total value of the dealers hand is and compare them
        console.log(`Dealers hand: ${handsum}`);
    }

    //then unhide card
    //should only happen once
    if(testing == 1)
    {
        dh.removeChild(img1);
        testing++;
    }


});