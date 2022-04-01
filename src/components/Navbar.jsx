import React from 'react'

function Navbar() {
    const aStyle = "pt-[3px] pr-[8px] pb-[3px] pl-[8px] mr-3 mt-0 opacity-95 hover:bg-slate-700 hover:bg-opacity-50 transition-color duration-200 rounded"
    const loginStyle = "pt-[6px] pr-[16px] pb-[6px] pl-[16px]  mt-0 ml-[10px] opacity-95 bg-slate-700 bg-opacity-50 hover:bg-slate-600 hover:bg-opacity-60 transition-color duration-200 rounded-[30px]"
  return (
    <div className='navbar bg-[#06151f] flex items-center justify-between px-[3rem] opacity-95 w-full h-16 '>
      {/* Logo */}
      <img src={require("../img/prosonic-icon-white.png")} alt="prosonic" className='w-40 pointer-events-none' />
      {/* Menu */}
      <div className='list-none menu'>
          <nav className='top-0 flex items-center justify-between pt-0 pages '>
              <li className={aStyle}><a href="#">Home</a></li>
              <li className={aStyle}><a href="#">Tracks</a></li>
              <li className={aStyle}><a href="#">Packages</a></li>
              <li className={aStyle}><a href="#">Services</a></li>
              <li className={aStyle}><a href="#">Contact</a></li>
              <button className={loginStyle}>Login</button>
          </nav>
      </div>
    </div>
  )
}

export default Navbar;