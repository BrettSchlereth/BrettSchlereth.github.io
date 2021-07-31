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

const BlackjackGame = () => {
  startGame()
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
          <Image style={cardStyle} src={blackjackImage}/>
        </Flex>
        <div style={gameButtons}>
          <button onClick={console.log('hello')} style={gameButton}>HIT</button>
          <button onClick={stay()} style={gameButton}>STAY</button>
          <button onClick={restart()} style={gameButton}>PLAY AGAIN</button>
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

function startGame() {
  console.log('start')
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
