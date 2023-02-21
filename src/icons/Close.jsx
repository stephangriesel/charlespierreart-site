import React from 'react';

const Close = () => {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        fill='#000000'
        viewBox='0 0 256 256'
      >
        <rect width='256' height='256' fill='none'></rect>
        <line
          x1='160'
          y1='96'
          x2='96'
          y2='160'
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'
        ></line>
        <line
          x1='160'
          y1='160'
          x2='96'
          y2='96'
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'
        ></line>
        <rect
          x='40'
          y='40'
          width='176'
          height='176'
          rx='8'
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'
        ></rect>
      </svg>
    </div>
  );
};

export default Close;
