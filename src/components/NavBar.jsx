import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-center justify-between'>
        <div className='flex'>
            Logo
        </div>
        <div>
        <ul className='flex'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar