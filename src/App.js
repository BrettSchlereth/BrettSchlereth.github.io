 import React from 'react';
 import { Box, Card} from 'rebass'
 import './App.css';
 import ProjectCards from './components/RebassCard.js'
 import { Switch, Route } from 'react-router-dom'
 import Header from './components/Header.js'


const App = () => (
  <div className='App'>
    <Main />
  </div>
);

const Home = () => (
  <div className='Home'>
    <Box>
      <Card as='h1' mx='auto'>Brett Schlereth</Card>
    </Box>
    <ProjectCards/>
  </div>
)

const BunkerDown = () => (
  <div className='BunkerDown'>
    <Header pageName="Bunker Down"/>
    <div>
      Bunker Down is an arcade-style survival game I developed using the Godot Game Engine.
      The goal is to avoid the bombs falling from the sky, collect coins, and make your way to
      the underground bunker below.
    </div>
  </div>
);

const DInfinity = () => (
  <div className='DInfinity'>
    <Header pageName="DInfinity"/>
    <div>
      content
    </div>
  </div>
)

const Resume = () => (
  <div className='Resume'>
    <Header pageName="Resume"/>
    <div>
      Content

    </div>
  </div>
)

const BlackjackAI = () => (
  <div className='BlackjackAI'>
    <Header pageName="Blackjack AI"/>
    <div>
      content
    </div>
  </div>

)

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/BunkerDown' component={BunkerDown}></Route>
    <Route exact path='/DInfinity' component={DInfinity}></Route>
    <Route exact path='/Resume' component={Resume}></Route>
    <Route exact path='/BlackjackAI' component={BlackjackAI}></Route>
  </Switch>
);

export default App;
