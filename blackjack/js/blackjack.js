
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

  $('#restart-button').hide()
  $('#hit-button').hide()
  $('#stand-button').hide()
  $('#deal-button').show()
  $('#player-points').hide()
  $('#dealer-points').hide()
  $('#messages').text('Lock in your bet');

  //adding a dynamically changing bet amount
  var deck, dealerHand, playerHand, imgUrls;

  setupNewGame();

function calculatePoints(cards) {
  cards = cards.slice(0);
  cards.sort(function(a, b) {
    return b.value - a.value;
  });
  return cards.reduce(function(sum, cards) {
    var value = cards.value;

    if (value > 10) {
      value = 10;
    }
    //determining ace value
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

function firstDeal(handArray) {
  handArray.push(deck.shift());
  img1.src="JPEG/purple_back.jpg";
  img2.src=imgUrls[0];
  img1.className="col-2 ml-1";
  img2.className="col-2 ml-1";
  dh.appendChild(img1);
}
function dealACardDealer(handArray, imgUrls) {
  handArray.push(deck.shift());
  var temp = document.createElement('img');
  temp.src=imgUrls[0];
  temp.className="col-2 ml-1";
  dh.appendChild(temp);
}
function dealACardPlayer(handArray, imgUrls) {
  handArray.push(deck.shift());
  var temp = document.createElement('img');
  temp.src=imgUrls[0];
  temp.className="col-2 ml-1";
  ph.appendChild(temp);
}

function gameOver() {
  $('#hit-button').hide();
  $('#stand-button').hide();
  $('#deal-button').hide();
  $('#place-bet').hide();
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

function placeBet(){
  var dollars = Number(document.getElementById('pot').innerText);
  var temp = document.getElementById('inputBet').value;
  dollars = dollars - temp;
  $('#pot').text(dollars);
}

function winBet(){
  var dollars = Number(document.getElementById('pot').innerText);
  var temp = (document.getElementById('inputBet').value);
  dollars = dollars + (temp*2);
  $('#pot').text(dollars);
}

function draw(){
  var dollars = Number(document.getElementById('pot').innerText);
  var temp = (document.getElementById('inputBet').value);
  dollars = dollars + temp;
  $('#pot').text(dollars);
}

function winBJ(){
  var dollars = Number(document.getElementById('pot').innerText);
  var temp = (document.getElementById('inputBet').value);
  var amtWon = (temp*2)*1.5;
  dollars = dollars + amtWon
  $('#pot').text(dollars);
  console.log(`amount won for BJ: ${amtWon}`);
}

  $("#restart-button").click(function() {
      $('#deal-button').show();
      $('#place-bet').show();
      $("#inputBet").show();
      $('#hit-button').hide();
      $('#stand-button').hide();
      $('#restart-button').hide();
      $('#player-hand').html('');
      $('#dealer-hand').html('');
      $('#messages').text('Lock in your bet');
      $('#player-points').hide();
      $('#dealer-points').hide();
      $('#dealer-points').text('Dealer:');
      setupNewGame();
  });

$("#place-bet").click(function(){
      placeBet();
      $('#place-bet').hide();
      var amount = Number(document.getElementById('inputBet').value);
      $('#messages').text(`Bet placed for ${amount}`);
      $("#inputBet").hide();
});
  
$("#deal-button").click(function() {
    $('#player-points').show();
    $('#dealer-points').show();
    $('#hit-button').show()
    $('#stand-button').show()
    $('#place-bet').hide();
    $('#dealer-points').text('Dealer:');
    $('#messages').text('');

      dealACardPlayer(playerHand, imgUrls);
      imgUrls.shift();

      firstDeal(dealerHand);
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
        winBJ();
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

      dealACardPlayer(playerHand, imgUrls);
      imgUrls.shift();
      updatePlayerScore();

      if (calculatePoints(playerHand) > 21) {
        $('#messages').text('You bust!');
        gameOver();
      }
});
  
$('#stand-button').click(function() {
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
      winBet();
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
        console.log(winBet());

      } else {
        winner = 'Push'
        draw();
      }
      $('#messages').text(winner);
    }

    updateScore();
  
    gameOver();
  
  });

}); //end of jQuery method