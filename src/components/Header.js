import React from 'react';
import '../App.css';
import HomeButton from './HomeButton.js'

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  background: '#1F2833',
  color: '#66FCF1',
  fontSize: '300%',
  borderRadius: '10px',
  fontStyle: 'oblique',
}

const Header = ({pageName}) => {
  return (
    <div className="container">
      <HomeButton/>
      <div style={headerStyle}>{pageName}</div>
    </div>
  )
}

export default Header;
