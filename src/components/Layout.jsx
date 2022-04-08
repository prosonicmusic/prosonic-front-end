import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import SocialMedia from './SocialMedia'

function Layout(props) {
  return (
    <div>
    {/* <SocialMedia></SocialMedia> */}
      <Navbar/>
      
      <div className='content'>
            {props.children}
      </div>
      
      <Footer/>
      
    </div>
  )
}

export default Layout