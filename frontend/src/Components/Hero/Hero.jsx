import React from 'react'
import './Hero.css'
import { FaArrowCircleRight } from 'react-icons/fa'
import hand from '../Assets/HomeImages/hand.png'
import shopping from '../Assets/HomeImages/Girl-Shopping.png'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>new</p>
                    <img src={hand} alt="HandImage" />
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div><FaArrowCircleRight size={22}/>
            </div>
        </div>
        <div className="hero-right">
            <img src={shopping} alt="RightImage" />
        </div>
    </div>
  )
}

export default Hero