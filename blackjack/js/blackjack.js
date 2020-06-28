
$(document).ready(function(){

  $('#restart-button').hide();

  var deck, dealerHand, playerHand;
  deck = newDeck();
  deck = shuffleDeck(deck);
  dealerHand = [];
  playerHand = [];

  var imgUrls = deck.map(function(deckObj){
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

function dealACardDealer(handArray, imgUrls) {
  handArray.push(deck.shift());
  var img1 = document.createElement('img');
  img1.src=imgUrls[0];
  dh.appendChild(img1);
  updateScore();
}

function dealACardPlayer(handArray, imgUrls) {
  handArray.push(deck.shift());
  cardUrl = imgUrls[0];
  ph.appendChild(cardUrl);
  updateScore();
}

function gameOver() {
  $('#hit-button').hide();
  $('#stand-button').hide();
  $('#restart-button').show();
}

function updateScore() {
  var dealerPoints = calculatePoints(dealerHand);
  $('#dealer-points').text(dealerPoints);
  var playerPoints = calculatePoints(playerHand);
  $('#player-points').text(playerPoints);
}

  updateScore();
  
  var dh = document.getElementById("dealer-hand");
  var ph = document.getElementById("player-hand");
  
  // a new array of the same deck with imgUrls in their place

  $("restart-button").click(function() {
      $('#deal-button').show();
      $('#hit-button').show();
      $('#stand-button').show();
      $('#restart-button').hide();
      $('#player-hand').html('');
      $('#dealer-hand').html('');
      $('#messages').text('');
      $('#player-points').text('0');
      $('#dealer-points').text('0');
      setupNewGame();
    });
  
  $("deal-button").click(function() {
      dealACardPlayer(playerHand, imgUrls[0]);
      dealACardDealer(dealerHand, imgUrls[1]);
      dealACardPlayer(playerHand, imgUrls[2]);
      dealACardDealer(dealerHand, imgUrls[3]);
      imgUrls.shift();
      imgUrls.shift();
      imgUrls.shift();
      imgUrls.shift();
  
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
  
      $("deal-button").hide();
  
  });
  
  $("hit-button").click(function(){
      dealACardPlayer(playerHand, imgUrls[0]);
      imgUrls.shift();
      // check for bust
      if (calculatePoints(playerHand) > 21) {
        $('#messages').text('You bust!');
        gameOver();
      }
  });
  
  $('#stand-button').click(function() {
  
    while (calculatePoints(dealerHand) < 17) {
      dealACardDealer(dealerHand, imgUrls[0]);
      imgUrls.shift();
    }
  
    // check for bust
    if (calculatePoints(dealerHand) > 21) {
      $('#messages').text('Dealer busted!');
    }
  
   else if (calculatePoints(playerHand) > 21) {
      $('#messages').text('You busted.');
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
      $('#messages').text(winner);
    }
  
    gameOver();
  
  });

}); //end of jQuery method


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