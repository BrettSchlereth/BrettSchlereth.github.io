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
var dealerHand;
var playerHand;
var aiDealerHand;
var aiPlayerHand;

class BlackjackGame extends React.Component {
  constructor(props) {
    startGame()
    super(props);
    this.state = {
      playerHand : [],
      aiHand: []
    }
  }

  hit() {
   console.log("hit")
   console.log('playerHand', playerHand, 'aiHand', aiPlayerHand)
   this.setState({
     playerHand: playerHand.push(deck.pop())
   },
    () => {console.log(deck.length, aiDeck.length)})
  }

  render() {
    return (
      <Box style={gameStyle}>
        <Box style={playerSideStyle}>
          <Box style={dealerStyle}>
            Dealer
            {getCards(dealerHand, "dealer")}
          </Box>
        <Box style={playerStyle}>
          Player
          {getCards(playerHand, "player")}
          <div style={gameButtons}>
            <button onClick={() => this.hit()} style={gameButton}>HIT</button>
            <button onClick={stay} style={gameButton}>STAY</button>
            <button onClick={restart} style={gameButton}>PLAY AGAIN</button>
          </div>
          </Box>
        </Box>
        <Box style={aiSideStyle}>
          <Box style={dealerStyle}>
            AI Dealer
            {getCards(aiDealerHand, "dealer")}
          </Box>
          <Box style={aiStyle}>
            AI Player
            {getCards(aiPlayerHand, "aiPlayer")}
          </Box>
        </Box>
      </Box>
    )
  }
}

function startGame() {
  buildDeck()
  dealCards()
  //check for blackjack
  //get player moves until stay or bust
  //get dealer moves
  //let the ai play
  //let the ai's dealer play
  //add scores
  //clear on restart
  console.log('start')
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
  playerHand = [];
  dealerHand = [];
  aiPlayerHand = [];
  aiDealerHand = [];
  for (var i = 0; i < 2; i++) {
    playerHand.push(deck.pop())
    dealerHand.push(deck.pop())
  }
  aiPlayerHand = playerHand
  aiDealerHand = dealerHand
  console.log("dealing cards")
}

function getCards(hand, playerType) {
  console.log(playerType, hand)
  var cards = []
  for (var i=0; i<hand.length; i++) {
      var card = hand[i]
      cards.push(getCard(card, i))
      if (playerType === "dealer") {
        i = hand.length
      }
  }
  return cards;
}

function getCard(card, index) {
  return (
    <Image key={index.toString()} style={cardStyle} src={cardValues[card]}/>
  );
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

function stay() {

}

function restart() {

}

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }


export default BlackjackGame;
