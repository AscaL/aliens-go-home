import React from 'react';
import groundWidth from '../utils/constants';

const Ground = () => {
  const groundStyle = {
    fill: '#59a941',
  };
  const division = {
    stroke: '#458232',
    strokeWidth: '3px',
  };
  return (
    <g id="ground">
      <rect
        id="ground-2"
        data-name="ground"
        style={groundStyle}
        x={groundWidth / -2}
        y={0}
        width={groundWidth}
        height={100}
      />
      <line x1={groundWidth / 2} x2={groundWidth / 2} y1={0} y2={0} />
    </g>
  );
};

export default Ground;
