import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { ToastContainer } from 'react-toastify'


function Layout(props) {
  return (
    <div>
      <Navbar/>
      
      <div className='content'>
            {props.children}
      </div>
      
      <Footer/>
      
    </div>
  )
}

export default Layout