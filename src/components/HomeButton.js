import React from 'react';
import {Button} from 'rebass'
import { NavLink } from 'react-router-dom'
import Boop from './Boop.js'

const containerStyle = {
  color: 'white',
  width: '15%',
  float: 'left',
}

const buttonStyle = {
  background: '#45A29E',
  height: '100%',
  borderRadius: '10px'
}

const HomeButton = () => {
  return (
  <Boop scaleAmount={1.1} style={containerStyle}>
    <NavLink exact activeClassName="current" to={'./'}>
      <Button style={buttonStyle}>
        Home
      </Button>
    </NavLink>
  </Boop>
  )
}

export default HomeButton;
