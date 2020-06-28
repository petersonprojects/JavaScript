//build a deck of cards
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


//start here


function newDeck() {
  var cards = [];
  for (var i = 1; i <= 13; i++) {
    cards.push({ point: i, suit: 'Spades' }); 
    cards.push({ point: i, suit: 'Hearts' });
    cards.push({ point: i, suit: 'Clubs' });
    cards.push({ point: i, suit: 'Diamonds' });
  }
  return cards;
}

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

$('#restart-button').hide();

var deck, dealerHand, playerHand;

setupNewGame();

updateScore();

var dh = document.getElementById("dealer-hand");
var ph = document.getElementById("player-hand");

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
});

function setupNewGame() {
    deck = newDeck();
    deck = shuffleDeck(deck);
    dealerHand = [];
    playerHand = [];
}

function calculatePoints(deck) {
    deck = deck.slice(0);
    deck.sort(function(a, b) {
      return b.point - a.point;
    });
    return deck.reduce(function(sum, deck) {
      var point = deck.point;
      if (point > 10) {
        point = 10;
      }
      if (point === 1 && sum < 11) {
        point = 11;
      }
      return sum + point;
    }, 0);
}

function gameOver() {
    document.getElementById('#hit-button').hide();
    document.getElementById('#stand-button').hide();
    document.getElementById('#restart-button').show();
  }

function updateScore() {
    var dealerPoints = calculatePoints(dealerHand);
    document.getElementById('#dealer-points').text(dealerPoints);
    var playerPoints = calculatePoints(playerHand);
    document.getElementById('#player-points').text(playerPoints);
  }

function dealACardPlayer(handArray, imgUrls) {
    card = deck.shift();
    handArray.push(card);
    cardUrl = imgUrls[0];
    ph.appendChild(cardUrl);
    imgUrls.shift();
    updateScore();
  }

function dealACardDealer(handArray, imgUrls) {
    card = deck.shift();
    handArray.push(card);
    var img1 = document.createElement('img');
    img1.src=imgUrls[0];
    dh.appendChild(img1);
    imgUrls.shift();
    updateScore();
  }

document.getElementById("restart-button").addEventListener("click",function() {
    document.getElementById('#deal-button').show();
    document.getElementById('#hit-button').show();
    document.getElementById('#stand-button').show();
    document.getElementById('#restart-button').hide();
    document.getElementById('#player-hand').html('');
    document.getElementById('#dealer-hand').html('');
    document.getElementById('#messages').text('');
    document.getElementById('#player-points').text('0');
    document.getElementById('#dealer-points').text('0');
    setupNewGame();
  });

document.getElementById("deal-button").addEventListener("click",function() {
    dealACardPlayer(playerHand, imgUrls[0]);
    dealACardDealer(dealerHand, imgUrls[1]);
    dealACardPlayer(playerHand, imgUrls[2]);
    dealACardDealer(dealerHand, imgUrls[3]);

    console.log('playerHand', playerHand);
    console.log('dealerHand', dealerHand);

    if(calculatePoints(playerHand) === 21 && playerHand.length==2)
    {
      $('#messages').text('Blackjack!');
      gameOver();
    }

    if(calculatePoints(dealerHand) === 21 && dealerHand.length==2)
    {
      $('#messages').text('Dealer blackjack!');
      gameOver();
    }

    document.getElementById("deal-button").hide();

});

document.getElementById("hit-button").addEventListener("click", function(){
    dealACardPlayer(playerHand, '#player-hand');
    // check for bust
    if (calculatePoints(playerHand) > 21) {
      document.getElementById('#messages').text('You bust!');
      gameOver();
    }
});

document.getElemendById('#stand-button').addEventListener("click", function() {

  while (calculatePoints(dealerHand) < 17) {
    dealACardDealer(dealerHand, '#dealer-hand');
  }

  // check for bust
  if (calculatePoints(dealerHand) > 21) {
    document.getElementById('#messages').text('Dealer busted!');
  }

 else if (calculatePoints(playerHand) > 21) {
    document.getElementById('#messages').text('You busted.');
  }

  else {
    // determine winner
    var dealerPoints = calculatePoints(dealerHand);
    var playerPoints = calculatePoints(playerHand);
    var winner = '';
    if (dealerPoints > playerPoints) {
      winner = 'Dealer Wins.';
    } else if (dealerPoints < playerPoints) {
      winner = 'You win!';
    } else {
      winner = 'Push'
    }
    document.getElementById('#messages').text(winner);
  }

  gameOver();

});

// document.getElementById("stand-button").addEventListener("click", function(){
//     while (calculatePoints(dealerHand) < 17) {
//         dealACard(dealerHand, '#dealer-hand');
//       }
//       // check for bust
//       if (calculatePoints(dealerHand) > 21) {
//         // dealer busts
//         $('#messages').text('Dealer busts! You win!');
//       } else if (calculatePoints(playerHand) > 21) {
//         // player busts
//         $('#messages').text('You bust!');
//       } else {
//         // determine winner
//         var dealerPoints = calculatePoints(dealerHand);
//         var playerPoints = calculatePoints(playerHand);
//         var message;
//         if (dealerPoints > playerPoints) {
//           message = 'You lose!';
//         } else if (dealerPoints < playerPoints) {
//           message = 'You win!';
//         } else {
//           message = 'Push.'
//         }
//         $('#messages').text(message);
//       }
//       gameOver();
//     // unhides the dealers card
//     // dh.appendChild(temp);
//     // var done = false;
//     // while (calculatePoints(dealerHand) < 17) {
//     //     dealACard(dealerHand, '#dealer-hand');
//     //   }

//     //     var stand = document.createElement('img');
//     //     stand.src=imgUrls[0];
//     //     stand.className="ml-3";
//     //     imgUrls.shift();
//     //     dealersHand.push(newDeck.shift());
//     //             //not sure if this goes here
//     //     dh.appendChild(stand);

//     //     // returns an array of number values only
//     //     var dHandArray = dealersHand.map(function(handObj){

//     //         var temp = handObj.value;
//     //         console.log(`temp: ${temp}]`);
//     //         if(temp >= 10)
//     //         {
//     //             temp = 10;
//     //         }
//     //         return temp;
//     //     });

//     //     console.log(`dHandArray: ${dHandArray}`);

//     //     //adds the number values from the array
//     //     for(var i=0;i<dHandArray.length;i++)
//     //     {
//     //         handsum += dHandArray[i];
//     //     }

//     //     if(handsum >= 17)
//     //     {

//     //         //make restart button appear


//     //         if(handsum > 21)
//     //         {
//     //             var restart = document.createElement('button');
//     //             restart.id = "restart-button"
//     //             br.appendChild(restart);
//     //             console.log("dealer busted.");
//     //         }
//     //         else if(handsum > phandsum){
//     //             var restart = document.createElement('button');
//     //             restart.id = "restart-button"
//     //             br.appendChild(restart);
//     //             console.log("you lose.");
//     //         }
//     //         else if(phandsum > handsum){
//     //             var restart = document.createElement('button');
//     //             restart.id = "restart-button"
//     //             br.appendChild(restart);
//     //             console.log("you win.");
//     //         }
//     //         else{
//     //             var restart = document.createElement('button');
//     //             restart.id = "restart-button"
//     //             br.appendChild(restart);
//     //             console.log("push");
//     //         }

//     //         done = true;
//     //         console.log("dealer done");
//     //     }

//     // }

//     // //then unhide card
//     // //should only happen once
//     // if(testing == 1)
//     // {
//     //     dh.removeChild(img1);
//     //     testing++;
//     // }


//     // console.log(`pHandArray: ${phandArray}`);

// });