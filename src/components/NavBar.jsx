import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex justify-center justify-between items-center h-20 pl-5 pr-5 md:pl-0 md:pr-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <div className='flex'>Logo</div>
      <div>
        <ul className='flex'>
          <li className='m-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='m-2'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
