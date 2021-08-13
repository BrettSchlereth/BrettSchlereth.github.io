import React from 'react';
import { useState } from 'react';
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
      hand: this.props.hand
    }
    this.setState = this.setState.bind(this);
  }
  render() {
    console.log("rendering")
    var cards = onChange(this.props.hand, this.props.playerType)
    return (
      <Box style={cardsDisplayStyle}>
        {cards}
      </Box>
    );
  }
}

function getCard(card, index) {
  return (
    <Image key={index.toString()} style={cardStyle} src={cardValues[card]}/>
  );
}

function onChange(hand, playerType) {
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

function getButtons(playerType) {
  // if (playerType === "player") {
  //   return (
  //     // <div style={gameButtons}>
  //     //   <button onClick={hit} style={gameButton}>HIT</button>
  //     //   <button onClick={stay} style={gameButton}>STAY</button>
  //     //   <button onClick={restart} style={gameButton}>PLAY AGAIN</button>
  //     // </div>
  //   );
  // }
}

export default CardsDisplay;
