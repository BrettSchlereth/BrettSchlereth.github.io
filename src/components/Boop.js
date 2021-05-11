import React from 'react';

const Boop = ({ moveAmount = 0, scaleAmount = 0, timing = 150, children }) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = {
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? `translate(${moveAmount}px) scale(${scaleAmount}, ${scaleAmount})`
      : `translate(0px) scale(1, 1)`,
    transition: `transform ${timing}ms`,
  };

  const onTrigger = () => {
    setIsBooped(true);
  };
  const offTrigger = () => {
    setIsBooped(false);
  };
  
  return (
    <span onMouseEnter={onTrigger} onMouseLeave={offTrigger} style={style}>
      {children}
    </span>
  );
};

export default Boop;
