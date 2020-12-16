
$(document).ready(function(){
  //last edited 06.29.2020 by Micah Peterson
  //some initalization 
  var deck, dealerHand, playerHand, imgUrls;
  var dh = document.getElementById("dealer-hand");
  var ph = document.getElementById("player-hand");
  // temp images for dealer card back and acutal card underneath
  var img1 = document.createElement('img');
  var img2 = document.createElement('img');
  //create a new deck of card objects organized just how you buy them
  //gets starting pot from HTML

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
  // shuffle the deck by swapping random positions with random other elements 52 times
  function shuffleDeck(deck) 
  {
      for (var i = deck.length - 1; i >= 0; i--) 
      {
          var j = Math.floor(Math.random() * (i + 1));
          // temp variable to save deck[i]
          var temp = deck[i];

          // where the actual swapping occurs
          deck[i] = deck[j];
          deck[j] = temp;
      }
      return deck;
  }

  //setupNewGame() replaces old deck with new one and shuffles it
  //empties the player and dealer hand and 
  //creates a new array of img urls mapped from the new shuffled deck

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

  setupNewGame();

  function calculatePoints(cards)
  {
    // gives us a new array without modifying the old one... i beleive same thing can be done with spread operator
    cards = cards.slice(0);
    // puts cards in order smallest to largest value
    cards.sort(function(a, b) {
      console.log(`sorting ${b.value} - ${a.value}`);
      return b.value - a.value;
    });

    // the second parameter in reduce is the currentVal you want to start at
    // meaning the first card in the hand list
    // and the first parameter is the "accumulator"
    return cards.reduce(function(sum, cards) {
      let value = cards.value;

      if (value > 10) {
        value = 10;
      }
      //determining ace value
      if(value === 1 && sum < 11) {
        value = 11;
      }

      return sum + value;
      //initial value every time hand is calculated
    }, 0);
  }
  // these functions for dealing can be condensed to one function
  // but it is working for now so dont worry about it
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
  //what to do with the buttons when player wins or loses
  function gameOver()
  {
    $('#hit-button').hide();
    $('#stand-button').hide();
    $('#deal-button').hide();
    $('#place-bet').hide();
    $('#restart-button').show();
  }

  //calculates new set of points during deal hit and stand phase
  function updateScore()
  {
    let dealerPoints = calculatePoints(dealerHand);
    $('#dealer-points').text(dealerPoints);
    let playerPoints = calculatePoints(playerHand);
    $('#player-points').text(playerPoints);
  }

  // used for only the hit button so the dealers points are still hidden
  function updatePlayerScore()
  {
    let playerPoints = calculatePoints(playerHand);
    $('#player-points').text(playerPoints);
  }

  function placeBet()
  {
    var current_pot = Number(document.getElementById('pot').innerText);
    var input = Number(document.getElementById('inputBet').value);


    // if their bet is less than their pot size
    if(current_pot >= input)
    {
      current_pot = current_pot - input;
      $('#pot').text(current_pot);
    }

    // if their bet is greater than their pot size
    else if(input > current_pot)
    {
      input = current_pot;
      current_pot = 0;
      $('#pot').text(current_pot);
      $('#inputBet').val(input);
    }
    
    return input;
  }

  function winBet()
  {
    let dollars = Number(document.getElementById('pot').innerText);
    let temp = Number(document.getElementById('inputBet').value);
    dollars = dollars + temp*2;
    $('#pot').text(dollars);
    return temp;
  }
  function draw()
  {
    let dollars = Number(document.getElementById('pot').innerText);
    let temp = Number(document.getElementById('inputBet').value);
    dollars = dollars + temp;
    $('#pot').text(dollars);
  }
  function winBJ()
  {
    let dollars = Number(document.getElementById('pot').innerText);
    let temp = Number(document.getElementById('inputBet').value);
    let amtWon = temp + temp*1.5;
    dollars = dollars + amtWon
    $('#pot').text(dollars);
    return temp*1.5;
  }

  $("#restart-button").click(function()
  {
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

  $("#place-bet").click(function()
  {

        var amt = placeBet();
        $('#place-bet').hide();
        $("#inputBet").hide();
        $('#messages').show();

        $('#messages').text(`Risk ${amt}?`);
        $('#deal-button').show();

  });
    
  $("#deal-button").click(function()
  {
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

  $("#hit-button").click(function()
  {
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

  $('#stand-button').click(function()
  {
      //shows dealers first card and removes card back
      dh.appendChild(img2);
      dh.removeChild(img1);

      // dealer will keep hitting until he has more than 17
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
        let winner = '';
        if (dealerPoints > playerPoints) 
        {
          winner = `Dealer wins`
        } 
        else if (dealerPoints < playerPoints) 
        {
          let winnings = winBet();
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

}); //end of jQuery document.ready -- this runs when the document has finished loading