import React from 'react';
import { Box, Image } from'rebass'
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

const cardsDisplayStyle = {
  display: 'block',
  height: '100%',
  margin: 'auto',
}

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

class CardsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hand: []
    }
  }
  render() {
    console.log("rendering")
    return (
      <Box style={cardsDisplayStyle}>
        {getCards(this.props.hand, this.props.playerType)}
      </Box>
    );
  }
}

function getCard(card, index) {
  return (
    <Image key={index.toString()} style={cardStyle} src={cardValues[card]}/>
  );
}

function getCards(hand, playerType) {
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

// function hit() {
//  console.log("hit")
//  hand.push(deck.pop())
// }
//
// function stay() {
//
// }
//
// function restart() {
//
// }

export default CardsDisplay;
