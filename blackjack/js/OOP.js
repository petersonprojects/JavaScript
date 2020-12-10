

class Card {

    constructor(value, suit)
    {
        this.value = value;
        this.suit = suit;
    }
}

class Deck {

    constructor()
    {
        this.state = {
            deck: [],
            imgUrls: []
        }
    }

    createDeck = () => {
    
        for(let i = 1; i <= 13; i++)
        {
            this.state.deck.push(new Card(i, 'hearts'))
            this.state.deck.push(new Card(i, 'spades'))
            this.state.deck.push(new Card(i, 'clubs'))
            this.state.deck.push(new Card(i, 'diamonds'))
        }
    
        return this.state.deck;
    
    }

    shuffle = () => {
        for (let i = this.state.deck.length - 1; i >= 0; i--) 
        {
            let j = Math.floor(Math.random() * (i + 1));
            // temp variable to save deck[i]
            let temp = this.state.deck[i];
            // where the actual swapping occurs
            this.state.deck[i] = this.state.deck[j];
            this.state.deck[j] = temp;
        }
        return this.state.deck;
    }

    generateURLs = () => {

        this.state.imgUrls = this.state.deck.map(cardObj => {

            let temp = cardObj.value
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
            return `JPEG/${temp}${cardObj.suit[0].toUpperCase()}.jpg`

        })

    }
}

const main =  () => {

    var deck = new Deck();

    deck.createDeck();
    deck.shuffle();
    deck.generateURLs();
}

main();


