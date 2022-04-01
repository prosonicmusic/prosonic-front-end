import React from 'react'
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='relative before:absolute before:left-0 before:top-0 before:w-full before:h-full content-none'>
      <Navbar/>
    </div>
    
  )
}

export default Header;