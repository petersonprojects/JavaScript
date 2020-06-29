
$(document).ready(function(){

  function newDeck()
  {

    var cards = [];

    for (var i = 1; i <= 13; i++)
    {
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
    $('#deal-button').hide()
    $('#player-points').hide()
    $('#dealer-points').hide()
    $('#messages').text('');

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

  function firstDeal(hand) {
    hand.push(deck.shift());
    img1.src="JPEG/card_back_black.png";
    img2.src=imgUrls[0];
    img1.className="col-2 ml-1";
    img2.className="col-2 ml-1";
    dh.appendChild(img1);
  }
  function dealACardDealer(hand, imgUrls) {
    hand.push(deck.shift());
    var temp = document.createElement('img');
    temp.src=imgUrls[0];
    temp.className="col-2 ml-1";
    dh.appendChild(temp);
  }
  function dealACardPlayer(hand, imgUrls) {
    hand.push(deck.shift());
    var temp = document.createElement('img');
    temp.src=imgUrls[0];
    temp.className="col-2 ml-1 mb-2";
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
    var temp = Number(document.getElementById('inputBet').value);
    dollars = dollars - temp;
    $('#pot').text(dollars);
    return temp;
  }
  function winBet(){
    var dollars = Number(document.getElementById('pot').innerText);
    var temp = Number(document.getElementById('inputBet').value);
    dollars = dollars + (temp*2);
    $('#pot').text(dollars);
    return temp*2;
  }
  function draw(){
    var dollars = Number(document.getElementById('pot').innerText);
    var temp = Number(document.getElementById('inputBet').value);
    dollars = dollars + temp;
    $('#pot').text(dollars);
  }
  function winBJ(){
    var dollars = Number(document.getElementById('pot').innerText);
    var temp = Number(document.getElementById('inputBet').value);
    var amtWon = (temp*2)*1.5;
    dollars = dollars + amtWon
    $('#pot').text(dollars);
    return temp*2*1.5;
  }

  $("#restart-button").click(function() {
        $('#deal-button').hide();
        $('#place-bet').show();
        $("#inputBet").show();
        $('#hit-button').hide();
        $('#stand-button').hide();
        $('#restart-button').hide();
        $('#player-hand').html('');
        $('#dealer-hand').html('');
        $('#messages').text('');
        $('#player-points').hide();
        $('#dealer-points').hide();
        $('#dealer-points').text('Dealer:');
        setupNewGame();
  });

  $("#place-bet").click(function(){
        $('#place-bet').hide();
        var amount = Number(document.getElementById('inputBet').value);
        $('#messages').text(`Risk ${amount}?`);
        $("#inputBet").hide();
        $('#messages').show();
        $('#deal-button').show();
  });
    
  $("#deal-button").click(function() {
      placeBet();
      $('#player-points').show();
      $('#dealer-points').show();
      $('#hit-button').show()
      $('#stand-button').show()
      $('#place-bet').hide();
      $('#dealer-points').text('Dealer:');
      $('#messages').hide();

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
          var winnings = winBJ();
          $('#messages').show();
          $('#messages').text(`Blackjack! +${winnings}`);
          dh.appendChild(img2);
          dh.removeChild(img1);
          updateScore();
          gameOver();
        }
    
        if(calculatePoints(dealerHand) == 21 && dealerHand.length==2)
        {
          $('#messages').show();
          $('#messages').text('Never lucky! Dealer blackjack!');
          dh.appendChild(img2);
          dh.removeChild(img1);
          updateScore();
          gameOver();
        }

        // both dealer and player getting blackjack
        if(calculatePoints(dealerHand) == 21 && dealerHand.length==2 && calculatePoints(playerHand) == 21 && playerHand.length==2)
        {
          $('#messages').show();
          $('#messages').text('What are the odds? Push');
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

      if (calculatePoints(playerHand) > 21)
      {
        $('#messages').show();
        $('#messages').text('Whoops, you bust!');
        gameOver();
      }
  });

  $('#stand-button').click(function() {
      //shows dealers first card and removes card back
      dh.appendChild(img2);
      dh.removeChild(img1);
    
      while (calculatePoints(dealerHand) < 17) {
        dealACardDealer(dealerHand, imgUrls);
        imgUrls.shift();
      }
    
      // check for bust
      if (calculatePoints(dealerHand) > 21) {
        var winnings = winBet();
        $('#messages').show();
        $('#messages').text(`Dealer busts +${winnings}`);
      }
    
      else if (calculatePoints(playerHand) > 21) {
        $('#messages').show();
        $('#messages').text(`Whoops, you bust`);
      }
    
      else {
        // determine winner
        var dealerPoints = calculatePoints(dealerHand);
        var playerPoints = calculatePoints(playerHand);
        var winner = '';
        if (dealerPoints > playerPoints) 
        {
          winner = `Dealer wins`
        } 
        else if (dealerPoints < playerPoints) 
        {
          var winnings = winBet();
          winner = `You win! +${winnings}`;
        } 
        else 
        {
          winner = 'Push'
          draw();
        }
        $('#messages').show();
        $('#messages').text(winner);
      }

      updateScore();
    
      gameOver();
    
  });

}); //end of jQuery method