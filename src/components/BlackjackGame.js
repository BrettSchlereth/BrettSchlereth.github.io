import React from 'react';
import '../App.css';
import { Flex, Box, Image } from 'rebass'
import blackjackImage from '../images/BlackjackImage.png'
import CardsDisplay from './CardsDisplay.js'

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
  background: 'red',
}

const aiStyle = {
  background: 'gray',
}

const cardsDisplayStyle = {
  display: 'block',
  height: '100%',
  margin: 'auto',
}

const cardStyle = {
  height: 'auto',
  maxWidth: '20%',
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
var aiHand;

const BlackjackGame = () => {
  startGame()
  return (
    <Box style={gameStyle}>
      <Box style={playerSideStyle}>
        <Box style={dealerStyle}>
          Dealer
          <CardsDisplay hand={dealerHand} playerType="dealer"/>
        </Box>
      <Box style={playerStyle}>
        Player
        <CardsDisplay hand={playerHand}/>
        <div style={gameButtons}>
          <button onClick={hit()} style={gameButton}>HIT</button>
          <button onClick={stay()} style={gameButton}>STAY</button>
          <button onClick={restart()} style={gameButton}>PLAY AGAIN</button>
        </div>
        </Box>
      </Box>
      <Box style={aiSideStyle}>
        <Box style={dealerStyle}>
          AI Dealer
          <CardsDisplay hand={aiDealerHand} playerType="dealer"/>
        </Box>
        <Box style={aiStyle}>
          AI Player
          <CardsDisplay hand={aiHand}/>
        </Box>
      </Box>
    </Box>
)
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
      if (j == 10) {
        deck.push(j)
        deck.push(j)
        deck.push(j)
      }
      deck.push(j)
    }
  }
  shuffle(deck)
  aiDeck = deck
}

function dealCards() {
  playerHand = [];
  dealerHand = [];
  aiHand = [];
  aiDealerHand = [];
  for (var i = 0; i < 2; i++) {
    playerHand.push(deck.pop())
    dealerHand.push(deck.pop())
  }
  aiHand = playerHand
  aiDealerHand = dealerHand
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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function hit() {
  console.log('hit')
}

function stay() {
  console.log('stay')
}

function restart() {
  console.log('restart')
}

export default BlackjackGame;
