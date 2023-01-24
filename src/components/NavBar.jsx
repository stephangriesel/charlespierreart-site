import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-center justify-between items-center h-20 pl-5 pr-5 md:pl-0 md:pr-0'>
        <div className='flex'>
            Logo
        </div>
        <div>
        <ul className='flex'>
            <li className='m-2'>Home</li>
            <li className='m-2'>About</li>
            <li className='m-2'>Projects</li>
            <li className='m-2'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar