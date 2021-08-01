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

const CardsDisplay = ({hand, playerType}) => {
  var cards = []
  for (var i=0; i<hand.length; i++) {
      var card = hand[i]
      cards.push(getCard(card))
      if (playerType == "dealer") {
        i = hand.length
      }
  }
  return (
    <Box style={cardsDisplayStyle}>
      {cards}
    </Box>
  );
}

function getCard(card) {
  return (
    <Image style={cardStyle} src={cardValues[card]}/>
  );
}

export default CardsDisplay;
