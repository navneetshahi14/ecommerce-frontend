import React from 'react'
import './style/Navbar.scss'

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <h3>FlipKart</h3>
        <div className="input">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" name="search" id="search" placeholder='Seacrh here' />
        </div>
        <div className="seller">
            <i class="fa-solid fa-shop"></i>
            <p>Become a Seller</p>
        </div>
        
        <div className="Cart">
            <i class="fa-solid fa-cart-shopping"></i>
            <p>Cart</p>
        </div>
      </div>
    </>
  )
}
