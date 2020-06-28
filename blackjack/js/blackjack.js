
$(document).ready(function(){

function newDeck() {
  var cards = [];
  for (var i = 1; i <= 13; i++) {
    cards.push({ value: i, suit: 'spades' }); 
    cards.push({ value: i, suit: 'hearts' });
    cards.push({ value: i, suit: 'clubs' });
    cards.push({ value: i, suit: 'diamonds' });
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

  $('#restart-button').hide()

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
      else if(temp == 11)
      {
          temp = 'J'
      }
      else if(temp == 12)
      {
          temp = 'Q'
      }
      else if(temp == 13)
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
  imgUrls = deck.map(function(deckObj){

    var temp = deckObj.value
    if(temp == 1)
    {
        temp = 'A'
    }
    else if(temp == 11)
    {
        temp = 'J'
    }
    else if(temp == 12)
    {
        temp = 'Q'
    }
    else if(temp == 13)
    {
        temp = 'K'
    }

    return `JPEG/${temp}${deckObj.suit[0].toUpperCase()}.jpg`
  });
}

function calculatePoints(cards) {
  cards = cards.slice(0);
  cards.sort(function(a, b) {
    return b.value - a.value;
  });
  return cards.reduce(function(sum, cards) {
    var value = cards.value;
    if (value > 10) {
      console.log(value);
      value = 10;
    }
    if (value === 1 && sum < 11) {
      value = 11;
    }
    return sum + value;
  }, 0);
}

var dh = document.getElementById("dealer-hand");
var ph = document.getElementById("player-hand");
var img1 = document.createElement('img');
var img2 = document.createElement('img');


function dealACardDealer(handArray, imgUrls) {
  handArray.push(deck.shift());
  var temp = document.createElement('img');
  temp.src=imgUrls[0];
  temp.className="col-2 ml-2";
  dh.appendChild(temp);
}

function firstDealer(handArray) {
  handArray.push(deck.shift());
  img1.src="JPEG/purple_back.jpg";
  img2.src=imgUrls[0];
  img1.className="col-2 ml-2";
  img2.className="col-2 ml-2";
  dh.appendChild(img1);
}

function dealACardPlayer(handArray, imgUrls) {
  handArray.push(deck.shift());
  var temp = document.createElement('img');
  temp.src=imgUrls[0];
  temp.className="col-2 ml-2";
  ph.appendChild(temp);
}

function gameOver() {
  $('#hit-button').hide();
  $('#stand-button').hide();
  $('#deal-button').hide();
  $('#restart-button').show();
}

function updateScore() {
  var dealerPoints = calculatePoints(dealerHand);
  $('#dealer-points').text(dealerPoints);
  var playerPoints = calculatePoints(playerHand);
  $('#player-points').text(playerPoints);
}
function updatePlayerScore() {
  var playerPoints = calculatePoints(playerHand);
  $('#player-points').text(playerPoints);
}

  $("#restart-button").click(function() {
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
  
  $("#deal-button").click(function() {
      dealACardPlayer(playerHand, imgUrls);
      imgUrls.shift();

      firstDealer(dealerHand);
      imgUrls.shift();

      dealACardPlayer(playerHand, imgUrls);
      imgUrls.shift();

      dealACardDealer(dealerHand, imgUrls);
      imgUrls.shift();

      updatePlayerScore();
  
      if(calculatePoints(playerHand) == 21 && playerHand.length==2)
      {
        $('#messages').text('Blackjack!');
        dh.appendChild(img2);
        dh.removeChild(img1);
        updateScore();
        gameOver();
      }
  
      if(calculatePoints(dealerHand) == 21 && dealerHand.length==2)
      {
        $('#messages').text('Dealer blackjack!');
        dh.appendChild(img2);
        dh.removeChild(img1);
        updateScore();
        gameOver();
      }
  
      $("#deal-button").hide();
  
  });
  
  $("#hit-button").click(function(){
    console.log("im here");
      dealACardPlayer(playerHand, imgUrls);
      imgUrls.shift();
      updatePlayerScore();
      // check for bust
      if (calculatePoints(playerHand) > 21) {
        $('#messages').text('You bust!');
        gameOver();
      }
  });
  
  $('#stand-button').click(function() {
    console.log("im here");

    //show the img of imgurls[1]first card url
    dh.appendChild(img2);
    dh.removeChild(img1);
  
    while (calculatePoints(dealerHand) < 17) {
      dealACardDealer(dealerHand, imgUrls);
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

    updateScore();
  
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