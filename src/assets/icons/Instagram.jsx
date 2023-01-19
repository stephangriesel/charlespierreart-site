import React from 'react';

const Instagram = () => {
  return (
    <div className='m-3'>
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
          r='40'
          fill='none'
          stroke='#000000'
          strokeMiterlimit='10'
          strokeWidth='16'
        ></circle>
        <rect
          x='36'
          y='36'
          width='184'
          height='184'
          rx='48'
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'
        ></rect>
        <circle cx='180' cy='76' r='12'></circle>
      </svg>
    </div>
  );
};

export default Instagram;
