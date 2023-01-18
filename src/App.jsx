import React, { useEffect, useState } from 'react';
import Facebook from './assets/icons/Facebook';
import Instagram from './assets/icons/Instagram';

const App = () => {
  return (
    <div className='App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center flex-col'>
      <p className='flex text-3xl'>charlespierreart.com</p>
      <ul className='flex row-auto'>
        <li>
          <a href='https://www.facebook.com/profile.php?id=100088490717264'>
            <Facebook />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/charlespierretheron/'>
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default App;
