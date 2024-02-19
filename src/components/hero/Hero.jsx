import React from 'react';
import './Hero.css';
import  hand_icon  from '../assets/Ecommerce_Frontend_Assets/Assets/hand_icon.png';
import  arrow_icon  from '../assets/Ecommerce_Frontend_Assets/Assets/arrow.png';
import  hero_image from '../assets/Ecommerce_Frontend_Assets/Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrivals Only</h2>
            <div className="">
                <div className="hero-hand-icon">
                    <p> new</p>
                    <img src= {hand_icon} alt="" />
                </div>
                <p>collectios</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                Lastest Collection
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt="" />
        </div>
      
    </div>
  )
}

export default Hero;
