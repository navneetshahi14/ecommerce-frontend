import React from 'react'
import './offer.scss'
import exclusive_img from '../assets/exclusive_image.png'

const Offer = () => {
  return (
    <>
      <div className="offers">
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_img} alt="" />
        </div>
      </div>
    </>
  )
}

export default Offer
