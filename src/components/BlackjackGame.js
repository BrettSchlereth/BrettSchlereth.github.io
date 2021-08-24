import React from 'react';
import { useState, setState } from 'react';
import '../App.css';
import { Box, Image } from 'rebass'
import CardsDisplay from './CardsDisplay.js'
import twoOfSpades from '../images/2ofSpades.png'
import threeOfSpades from '../images/3ofSpades.png'
import fourOfSpades from '../images/4ofSpades.png'
import fiveOfSpades from '../images/5ofSpades.png'
import sixOfSpades from '../images/6ofSpades.png'
import sevenOfSpades from '../images/7ofSpades.png'
import eightOfSpades from '../images/8ofSpades.png'
import nineOfSpades from '../images/9ofSpades.png'
import tenOfSpades from '../images/10ofSpades.png'
import aceOfSpades from '../images/aceOfSpades.png'

const cardStyle = {
  height: 'auto',
  maxWidth: '20%',
}

const cardValues = {
  2: twoOfSpades,
  3: threeOfSpades,
  4: fourOfSpades,
  5: fiveOfSpades,
  6: sixOfSpades,
  7: sevenOfSpades,
  8: eightOfSpades,
  9: nineOfSpades,
  10: tenOfSpades,
  11: aceOfSpades
}

class Hand {
  constructor(handOwner) {
    this.owner = handOwner;
    this.cards = [];
    this.soft = 0;
    this.blackjack = false;
    this.count = 0;
    this.total = 0;
    this.busted = false;
  }

  addCard(deck) {
    this.cards.push(deck.pop())
    this.getTotalCardValue()
  }

  getTotalCardValue() {
    var total = 0
    this.cards.forEach(card => {
      if (card == 11 && total + card > 21) {
        card = 1
      }
      else if (card == 11 && this.soft == 0) {
        this.soft = 1
      }
      else if (total + card > 21 && this.soft == 1) {
        total -= 10
        this.soft = 0
      }
      total += card
    });

    this.total = total
    if (total > 21) {
      this.busted = true;
    }
    else {
      this.busted = false;
    }
  }
}

const gameStyle = {
  background: 'brown',
  align: 'center',
  display: 'flex'
}

const playerSideStyle = {
  width: '50%',
}

const aiSideStyle = {
  height: '100%',
  width: '50%',
}

const dealerStyle = {
  height: 'auto',
  maxHeight: '25em',
  background: 'blue',
}

const playerStyle = {
  background: 'green',
}

const aiStyle = {
  background: 'gray',
}

const gameButtons = {
  margin: 'auto',
  width: '100%',
  align: 'center',
}

const gameButton = {
  textAlign: 'center',
  height: '10%',
  width: '50%'
}

var deck;
var aiDeck;
var dealerHand = new Hand("dealer");
var playerHand = new Hand("player");
var aiDealerHand = new Hand("dealer");
var aiPlayerHand = new Hand("player");

class BlackjackGame extends React.Component {
  constructor(props) {
    super(props);
    this.startGame();
    this.state = {
      playerHand : [],
      dealerHand: [],
      aiHand: [],
      hitDisabled: false,
      stayDisabled: false,
      restartDisabled: true,
      playerDone: false,
      dealerDone: false,
      message: "hit or stay",
      aiMessage: "",
    }
  }

  checkForBlackjack(dealer, player) {
    if (dealer.total == 21 && player.total == 21) {
      this.setState({
        message: "Push!",
      });
      return true;
    }
    else if (dealer.total == 21) {
      this.setState({
        message: "Dealer has blackjack!"
      })
      return true
    }
    else if (player.total == 21) {
      this.setState({
        message: "Player has blackjack!"
      })
      return true
    }
    else return false
    }

  getCards(hand, playerType) {
    var cards = []
    for (var i=0; i<hand.cards.length; i++) {
        var card = hand.cards[i]
        cards.push(getCard(card, i))
        if (playerType === "dealer" & this.state.playerDone == false) {
          i = hand.cards.length
        }
    }
    return cards;
  }

  getDealerMoves() {
    console.log("starting dealer moves")
    while (dealerHand.total < 17) {
      this.hit("dealer")
    }
    this.getWinner(dealerHand, playerHand)
    this.setState({
      restartDisabled: false
    })
  }

  getWinner(dealer, player) {
    var winnerMessage = ""
    console.log("dealerTotal:", dealer.total)
    if (dealer.busted) {
      winnerMessage = "Dealer Busted! Player Wins!"
    }
    else if (dealer.total > player.total) {
      winnerMessage = "Dealer Wins!"
    }
    else if (player.total > dealer.total) {
      winnerMessage = "Player Wins!"
    }
    else {winnerMessage = "Push!"}
    this.setState({
      message: winnerMessage
    })
  }

  hit(handOwner) {
   switch (handOwner) {
     case "player":
       this.setState({
         playerHand: playerHand.addCard(deck)
       })
       if (playerHand.busted) {
         console.log("bust");
         this.setState({
         hitDisabled: true,
         stayDisabled: true,
         restartDisabled: false,
         playerDone: true,
         dealerDone: true,
         message: "Player busted!"
       })
       }
       break;
     case "dealer":
        console.log("dealer hit")
        this.setState({
          dealerHand: dealerHand.addCard(deck)
        })
        if (dealerHand.busted) {
          this.setState({
            dealerDone: true,
            message: "Dealer Busted! Player Wins!"
          })
        }
        else if (dealerHand.total >= 17 && dealerHand.total <= 21) {
          this.setState({
            dealerDone: true,
            restartDisabled: false,
          })
        }
        break;
     case "aiPlayer":
        break;
     case "aiDealer":
        break;
      }
  }

  startGame() {
    this.setState({
      playerHand: [],
      dealerHand: [],
      playerDone: false,
      dealerDone: false,
      hitDisabled: false,
      stayDisabled: false,
      restartDisabled: true,
      message: "hit or stay",
    })
    buildDeck()
    dealCards()
    if (this.checkForBlackjack(dealerHand, playerHand) == true) {
      this.setState({
        hitDisabled: true,
        stayDisabled: true,
        restartDisabled: false
      })
    }
    else {
      //get player moves until stay or bust
      //get dealer moves
      //let the ai play
      //let the ai's dealer play
      //add scores
      //clear on restart
    }

    console.log('start')
  }

  stay() {
    this.setState({
      hitDisabled: true,
      stayDisabled: true,
      playerDone: true,
    })
    this.getDealerMoves()
  }

  render() {
    return (
      <Box style={gameStyle}>
        <Box style={playerSideStyle}>
          <Box>
            {this.state.message}
          </Box>
          <Box style={dealerStyle}>
            Dealer
            {this.getCards(dealerHand, "dealer")}
          </Box>
        <Box style={playerStyle}>
          Player
          {this.getCards(playerHand, "player")}
          <div style={gameButtons}>
            <button disabled={this.state.hitDisabled} onClick={() => this.hit("player")} style={gameButton}>HIT</button>
            <button disabled={this.state.stayDisabled} onClick={() => this.stay()} style={gameButton}>STAY</button>
            <button disabled={this.state.restartDisabled} onClick={() => this.startGame()} style={gameButton}>PLAY AGAIN</button>
          </div>
          </Box>
        </Box>
        <Box style={aiSideStyle}>
          <Box>
            {this.state.aiMessage}
          </Box>
          <Box style={dealerStyle}>
            AI Dealer
            {this.getCards(aiDealerHand, "dealer")}
          </Box>
          <Box style={aiStyle}>
            AI Player
            {this.getCards(aiPlayerHand, "aiPlayer")}
          </Box>
        </Box>
      </Box>
    )
  }
}

function buildDeck() {
  deck = []
  for (var i = 0; i < 8; i++) {
    for (var j = 2; j < 12; j++) {
      if (j === 10) {
        deck.push(j)
        deck.push(j)
        deck.push(j)
      }
      deck.push(j)
    }
  }
  shuffle(deck)
  aiDeck = deck
  console.log("building deck")
}



function dealCards() {
  playerHand.cards = [];
  dealerHand.cards = [];
  aiPlayerHand.cards = [];
  aiDealerHand.cards = [];
  for (var i = 0; i < 2; i++) {
    playerHand.addCard(deck)
    dealerHand.addCard(deck)
  }
  aiPlayerHand.cards = playerHand.cards.slice()
  aiDealerHand.cards = dealerHand.cards.slice()
  console.log("dealing cards")
}

function getCard(card, index) {
  return (
    <Image key={index.toString()} style={cardStyle} src={cardValues[card]}/>
  );
}



function restart() {

}

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}







// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }


export default BlackjackGame;
