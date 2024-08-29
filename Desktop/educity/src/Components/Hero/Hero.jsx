import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure a Better Education For a Better World</h1>
        <p>Our cutting-edge curriculum desinged to empower students with the 
            knowledge,experience and skills needed to excel in the dynamic field of education
        </p>
        <button className='btn'>Explore More <img src={arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
