import React from 'react'
import './style/Navbar.scss'

export default function Navbar() {
  return (
    <>
      <nav>
        <span>NavneetClothing</span>
        <ul>
          <li>Home</li>
          <li>Mens</li>
          <li>Womens</li>
          <li>Kids</li>
        </ul>
        <button>Login</button>
        <i class="fa-solid fa-cart-shopping"></i>
      </nav>
    </>
  )
}
