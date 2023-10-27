import React from 'react'
import './Hero.scss'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="HeroLeft">
            <h2>NEEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="hand" />
                </div>
                <p>Collection</p>
                <p>For EveryOne</p>
            </div>
            <div className="HeroLatestBtn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="arrow" />
            </div>
        </div>
        <div className="HeroRight">
            <img src={hero_image} alt="hero" />
        </div>
    </div> 
    </>
  )
}

export default Hero
