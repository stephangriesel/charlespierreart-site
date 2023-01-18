import React from 'react';

function Facebook() {
  return (
    <div className='cursor-pointer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='35'
        height='35'
        fill='#000000'
        viewBox='0 0 256 256'
      >
        <rect width='256' height='256' fill='none'></rect>
        <circle
          cx='128'
          cy='128'
          r='96'
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'
        ></circle>
        <path
          d='M168,88H152a23.9,23.9,0,0,0-24,24V224'
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'
        ></path>
        <line
          x1='96'
          y1='144'
          x2='160'
          y2='144'
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'
        ></line>
      </svg>
    </div>
  );
}

export default Facebook;
