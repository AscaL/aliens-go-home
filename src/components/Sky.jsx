import React from 'react';
import skydWidth from '../utils/constants';

console.log('skydWidth:', skydWidth);

const Sky = () => {
  const skyStyle = {
    fill: '#30abef',
  };
  const gameHeight = 1200;
  return (
    <rect
      style={skyStyle}
      x={skyWidth / -2}
      y={100 - gameHeight}
      width={skyWidth}
      height={gameHeight}
    />
  );
};

export default Sky;
