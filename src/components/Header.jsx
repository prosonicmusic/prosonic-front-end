import React from "react";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <header className="header header__home">
      <div className="header__container">
        <Navbar />
      </div>

      <div className="content">
        <h1>Listen, Pickup,  Order</h1>
        <p>Sound Like a Pro With Prosonic</p>
      </div>
    </header>
  )
}

export default Header