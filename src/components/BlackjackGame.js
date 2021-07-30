import React from 'react';
import '../App.css';
import { Flex, Box, Image } from 'rebass'
import blackjackImage from '../images/BlackjackImage.png'

const gameStyle = {
  background: 'brown',
  align: 'center',
  display: 'flex'
}

const playerSideStyle = {
  width: '50%',
}

const aiSideStyle = {
  width: '50%',
}

const dealerStyle = {
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
  display: 'flex',
  height: '25em',
}

const cardStyle = {
  maxHeight: '15em',
  width: 'auto',
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

const BlackjackGame = () => {
  return (
    <Box style={gameStyle}>
      <Box style={playerSideStyle}>
        <Box style={dealerStyle}>
          Dealer
          <Box style={cardsDisplayStyle}>
            <Image style={cardStyle} src={blackjackImage}/>
            <Image style={cardStyle} src={blackjackImage}/>
            <Image style={cardStyle} src={blackjackImage}/>
          </Box>
        </Box>
      <Box style={playerStyle}>
        Player
        <Flex style={cardsDisplayStyle}>
          <Image style={cardStyle} src={blackjackImage}/>
          <Image style={cardStyle} src={blackjackImage}/>
          <Image style={cardStyle} src={blackjackImage}/>
          <Image style={cardStyle} src={blackjackImage}/>
          <Image style={cardStyle} src={blackjackImage}/>
        </Flex>
        <div style={gameButtons}>
          <button style={gameButton}>HIT</button>
          <button style={gameButton}>STAY</button>
          <button style={gameButton}>PLAY AGAIN</button>
        </div>
        </Box>
      </Box>
      <Box style={aiSideStyle}>
        <Box style={dealerStyle}>
          AI Dealer
          <Box style={cardsDisplayStyle}>
            <Image style={cardStyle} src={blackjackImage}/>
            <Image style={cardStyle} src={blackjackImage}/>
          </Box>
        </Box>
        <Box style={aiStyle}>
          AI Player
          <Box style={cardsDisplayStyle}>
            <Image style={cardStyle} src={blackjackImage}/>
            <Image style={cardStyle} src={blackjackImage}/>
            <Image style={cardStyle} src={blackjackImage}/>
            <Image style={cardStyle} src={blackjackImage}/>
          </Box >
        </Box>
      </Box>
    </Box>
)
}

export default BlackjackGame;
