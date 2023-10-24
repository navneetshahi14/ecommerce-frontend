import React from 'react'
import './style/Navbar.scss'

export default function Navbar() {
  return (
    <>
      <nav>
        <span>NavneetClothing</span>
        <ul>
          <li><div>Home</div></li>
          <li><div>Mens</div></li>
          <li><div>Womens</div></li>
          <li><div>Kids</div></li>
        </ul>
        <i class="fa-solid fa-cart-shopping"></i>
        <button>Login</button>
      </nav>
    </>
  )
}
