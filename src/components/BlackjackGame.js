import React from 'react';
//import { setState } from 'react'
import '../App.css';
import { Box, Image } from 'rebass'
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
import * as tf from '@tensorflow/tfjs'

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
  constructor(handOwner, ai = false) {
    this.owner = handOwner;
    this.isAi = ai;
    this.cards = [];
    this.soft = 0;
    this.blackjack = false;
    this.count = 0;
    this.total = this.getTotalCardValue();
    this.busted = false;
  }

  addCard(deck) {
    this.cards.push(deck.pop())
    this.getTotalCardValue()
  }

  getTotalCardValue() {
    var total = 0
    var handCount = 0
    this.cards.forEach(card => {
      if (card <= 6) {
        handCount += 1
      }
      else if (card >= 10) {
        handCount -= 1
      }
      this.count = handCount
      if (card === 11 && total + card > 21) {
        card = 1
      }
      else if (card === 11 && this.soft === 0) {
        this.soft = 1
      }
      else if (total + card > 21 && this.soft === 1) {
        total -= 10
        this.soft = 0
      }
      total += card
      this.total = total
    });

    this.total = total
    if (total > 21) {
      console.log(this.owner, "busted!")
      this.busted = true;
    }
    else {
      this.busted = false;
    }
    return total;
  }
}

const gameStyle = {
  background: 'green',
  align: 'center',
  display: 'flex',
  borderRadius: '5px',
  border: '1px solid black'
}

const messageStyle = {
  background: 'DarkGreen',
  textAlign: 'center',
  borderRadius: '20px, 20px, 20px, 20px'
}

const playerSideStyle = {
  width: '50%',
  borderRadius: '5px'
}

const aiSideStyle = {
  height: '100%',
  width: '50%',
}

const dealerStyle = {
  height: 'auto',
  maxHeight: '25em',
  borderRadius: '5px'
}

const playerStyle = {
  background: 'green',
  borderRadius: '5px'
}

const aiStyle = {
  background: 'green',
}

const gameButtons = {
  margin: 'auto',
  width: '100%',
  align: 'center',
}

const gameButtonStyles = {
  false: {
    textAlign: 'center',
    height: '10%',
    width: '50%',
    backgroundColor: "white",
    color: "black",
    fontSize: "1.5em",
    borderRadius: '5px',
    border: '1px solid black'
  },
  true: {
    textAlign: 'center',
    height: '10%',
    width: '50%',
    backgroundColor: "gray",
    color: "black",
    fontSize: "1.5em",
    borderRadius: '5px',
    border: '1px solid black'
  }
};

const scoreStyle = {
  textAlign: 'center'
}

var deck;
var aiDeck;
var dealerHand = new Hand("dealer");
var playerHand = new Hand("player");
var aiDealerHand = new Hand("aiDealer");
var aiPlayerHand = new Hand("player", true);
var model
var playerStats = {
  "win": 0,
  "push": 0,
  "loss": 0
}
var aiStats = {
  "win": 0,
  "push": 0,
  "loss": 0
}
var totalGames = 0

class BlackjackGame extends React.Component {
  constructor(props) {
    super(props);
    model = this.loadTheModel()
    .then(function(result) {
      return result
    })
    .catch(console.log("failure"))
    console.log("model: ", model)
    this.startGame();
    this.state = {
      playerHand : [],
      dealerHand: [],
      aiHand: [],
      aiDealerHand: [],
      hitDisabled: false,
      stayDisabled: false,
      restartDisabled: true,
      playerDone: false,
      dealerDone: false,
      aiPlayerDone: false,
      message: "Hit Or Stay",
      aiMessage: "AI Is Waiting",
      playerWinPercentage: 0,
      playerPushPercentage: 0,
      playerLossPercentage: 0,
      aiWinPercentage: 0,
      aiPushPercentage: 0,
      aiLossPercentage: 0,
    }
  }

  checkForBlackjack(dealer, player) {
    if (dealer.total === 21 && player.total === 21) {
      this.setState({
        message: "Push!",
      });
      this.setStats("push", player.isAi)
      return true;
    }
    else if (dealer.total === 21) {
      this.setState({
        message: "Dealer has blackjack!"
      })
      this.setStats("loss", true)
      this.setStats("loss", false)
      return true
    }
    else if (player.total === 21) {
      this.setState({
        message: "Player has blackjack!"
      })
      this.setStats("win", true)
      this.setStats("win", false)
      return true
    }
    else return false
  }

  displayDealerTotal(dealerType = "human") {
    if (dealerHand.cards.length === 2) {
      return dealerHand.cards[0]
    }
    if (dealerType === "ai") {
      return aiDealerHand.getTotalCardValue()
    }
    return dealerHand.getTotalCardValue()
  }

  async getAiDealerMoves() {
    console.log("starting dealer moves")
    console.log("dealer total", aiDealerHand.getTotalCardValue())
    while (aiDealerHand.getTotalCardValue() < 17) {
        console.log("aiDealer is hitting")
        this.hit("aiDealer")
    }
    this.getWinner(aiDealerHand, aiPlayerHand)
    }

  async getAiMoves() {
    while (aiPlayerHand.busted === false) {
      var predictions = await this.getPrediction()
      console.log("predictions: ", predictions)
      if (predictions[0] >= predictions[1] && predictions[0] > 0.5) {
        console.log("ai is hitting")
        this.hit("aiPlayer")
      }
      else {
        console.log("ai is holding")
        break
      }
    }
    this.getAiDealerMoves(aiDealerHand, aiPlayerHand)
  }

  getCards(hand, playerType) {
    var cards = []
    for (var i=0; i<hand.cards.length; i++) {
        var card = hand.cards[i]
        cards.push(getCard(card, i))
        if (playerType === "dealer" & this.state.playerDone === false) {
          i = hand.cards.length
        }
    }
    return cards;
  }

  getCount(hand1, hand2) {
    return hand1.count + hand2.count
  }

  getDealerMoves(dealer, player) {
    while (dealer.getTotalCardValue() < 17) {
      if (dealer.owner === "dealer") {
        this.hit("dealer")
      }
      else {
        this.hit("aiDealer")
      }
    }
    this.getWinner(dealer, player)
    this.getAiMoves()
    this.setState({
      restartDisabled: false
    })
  }

  getPercentage(playerType = "human", endType) {
    if (playerType === "ai") {
      return Math.floor(100 * (aiStats[endType] / (totalGames + 1)))
    }
    return Math.floor(100 * (playerStats[endType] / (totalGames + 1)))
  }

  async getPrediction() {
    model = await tf.loadLayersModel('model.json');
    var hitPredictionInput = tf.tensor([[aiDealerHand.cards[0], aiPlayerHand.getTotalCardValue(), this.getCount(aiDealerHand, aiPlayerHand), aiPlayerHand.soft, 1]])
    var stayPredictionInput = tf.tensor([[aiDealerHand.cards[0], aiPlayerHand.getTotalCardValue(), this.getCount(aiDealerHand, aiPlayerHand), aiPlayerHand.soft, 0]])
    var hitPrediction = model.predict(hitPredictionInput).dataSync()[0]
    var stayPrediction = model.predict(stayPredictionInput).dataSync()[0]
    console.log("hit: ", hitPrediction, " stay: ", stayPrediction)
    return [hitPrediction, stayPrediction]
    }

  getWinner(dealer, player) {
    var winnerMessage = ""
    if (player.total > 21) {
      winnerMessage = "Player Busted! Dealer Wins!"
      this.setStats("loss", player.isAi)
    }
    else if (dealer.busted) {
      winnerMessage = "Dealer Busted! Player Wins!"
      this.setStats("win", player.isAi)
    }
    else if (dealer.total > player.total) {
      winnerMessage = "Dealer Wins!"
      this.setStats("loss", player.isAi)
    }
    else if (player.total > dealer.total) {
      winnerMessage = "Player Wins!"
      this.setStats("win", player.isAi)
    }
    else {
      winnerMessage = "Push!"
      this.setStats("push", player.isAi)
      }
    if (dealer.owner === "dealer") {
      this.setState({
        message: winnerMessage
      })
    }
    else {
      this.setState({
        aiMessage: winnerMessage
      })
    }
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
         message: "Player busted! Dealer Wins!"
       })
       this.getDealerMoves(dealerHand, playerHand)
       }
       break;
     case "dealer":
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
        this.setState({
          aiPlayerHand: aiPlayerHand.addCard(aiDeck)
        })
        if (aiPlayerHand.busted) {
          this.setState({
            aiPlayerDone: true,
            aiMessage: "AI Busted! AI Dealer Wins!"
          })
        }
        break;
     case "aiDealer":
       this.setState({
         aiDealerHand: aiDealerHand.addCard(aiDeck)
       })
       if (aiDealerHand.busted) {
         this.setState({
           dealerDone: true,
           aiMessage: "Dealer Busted! Player Wins!"
         })
       }
       else if (aiDealerHand.total >= 17 && aiDealerHand.total <= 21) {
         this.setState({
           dealerDone: true,
           restartDisabled: false,
         })
       }
        break;
     default:
        console.log("Error: Player type not recognized")
        break;
      }
  }

  async loadTheModel () {
    var model
    try {
      model = await tf.loadLayersModel('model.json');
      return model
    }
    catch (err) {
      console.log(err);
      console.log("failed load model");
    }
  }

  setStats(endType, isAi) {
    if (isAi === true) {
      aiStats[endType] += 1;
    }
    else {
      playerStats[endType] += 1
    }
    this.setState({
      playerWinPercentage: this.getPercentage("human", "win"),
      playerPushPercentage: this.getPercentage("human", "push"),
      aiWinPercentage: this.getPercentage("ai", "win"),
      aiPushPercentage: this.getPercentage("ai", "push"),
      playerLossPercentage: 100 - this.getPercentage("human", "win") - this.getPercentage("human", "push"),
      aiLossPercentage: 100 - this.getPercentage("ai", "win") - this.getPercentage("ai", "push")
    })
    console.log("playerStats: ", playerStats, " totalGames: ", totalGames)
    console.log("aiStats: ", aiStats, " totalGames: ", totalGames)
  }

  startGame() {
    totalGames += 1
    this.setState({
      playerHand: [],
      dealerHand: [],
      playerDone: false,
      dealerDone: false,
      hitDisabled: false,
      stayDisabled: false,
      restartDisabled: true,
      message: "hit or stay",
      aiMessage: "AI Side"
    })
    buildDeck()
    dealCards()
    if (this.checkForBlackjack(dealerHand, playerHand) === true) {
      this.setState({
        hitDisabled: true,
        stayDisabled: true,
        restartDisabled: false
      })
    }
    console.log('start')
  }

  stay(hand) {
    switch (hand.owner) {
      case "player":
        this.setState({
          hitDisabled: true,
          stayDisabled: true,
          playerDone: true,
        })
        this.getDealerMoves(dealerHand, playerHand)
      case "aiPlayer":
        console.log("aiPlayer stayed")
      default:
        console.log("unknown player stayed")
    }
  }

  render() {
    return (
      <div>
      <Box style={scoreStyle}>
      Total Games: {totalGames}
      </Box>
      <Box style={scoreStyle}>
        Player Wins: {this.state.playerWinPercentage}% AI Wins: {this.state.aiWinPercentage}%
      </Box>
      <Box style={scoreStyle}>
        Player Pushes: {this.state.playerPushPercentage}% AI Pushes: {this.state.aiPushPercentage}%
      </Box>
      <Box style={scoreStyle}>
        Player Losses: {this.state.playerLossPercentage}% AI Loss: {this.state.aiLossPercentage}%
      </Box>
      <Box style={gameStyle}>
        <Box style={playerSideStyle}>
          <Box style={messageStyle}>
            {this.state.message}
          </Box>
          <Box>
            Dealer: {this.displayDealerTotal()}
          </Box>
          <Box style={dealerStyle}>
            {this.getCards(dealerHand, "dealer")}
          </Box>
          <Box>
            Player: {playerHand.getTotalCardValue()}
          </Box>
        <Box style={playerStyle}>
          {this.getCards(playerHand, "player")}
          <div style={gameButtons}>
            <button disabled={this.state.hitDisabled} onClick={() => this.hit("player")} style={gameButtonStyles[this.state.hitDisabled]}>HIT</button>
            <button disabled={this.state.stayDisabled} onClick={() => this.stay(playerHand)} style={gameButtonStyles[this.state.stayDisabled]}>STAY</button>
            <button disabled={this.state.restartDisabled} onClick={() => this.startGame()} style={gameButtonStyles[this.state.restartDisabled]}>PLAY AGAIN</button>
          </div>
          </Box>
        </Box>
        <Box style={aiSideStyle}>
          <Box style={messageStyle}>
            {this.state.aiMessage}
          </Box>
          <Box>
            AI Dealer: {this.displayDealerTotal("ai")}
          </Box>
          <Box style={dealerStyle}>
            {this.getCards(aiDealerHand, "dealer")}
          </Box>
          <Box>
            AI Player: {aiPlayerHand.getTotalCardValue()}
          </Box>
          <Box style={aiStyle}>
            {this.getCards(aiPlayerHand, "aiPlayer")}
          </Box>
        </Box>
      </Box>
      </div>
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
  aiDeck = deck.slice()
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
    aiPlayerHand.addCard(aiDeck)
    aiDealerHand.addCard(aiDeck)
  }
  aiPlayerHand.getTotalCardValue()
  aiDealerHand.getTotalCardValue()
  console.log("dealing cards")
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

export default BlackjackGame;
