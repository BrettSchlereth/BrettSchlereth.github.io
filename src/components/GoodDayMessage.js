import React from 'react';

const GoodDayMessage = () => {
  return (
    <div>
      Good {getWelcomeMessage()}
    </div>
  )
}

function getWelcomeMessage() {
  var d = new Date()
  var h = d.getHours()
  if (h < 6) return "Night"
  else if (h >= 6 && h < 10) return "Morning"
  else if (h >= 10 && h < 17) return "Day"
  else if (h >= 17 && h < 21) return "Evening"
  return "Night"
  }

export default GoodDayMessage;
