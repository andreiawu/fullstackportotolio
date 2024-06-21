import AboutMeCircles from "./AboutMeCircles"
import React from 'react';

export default function AboutMe() {
  return (
    <div className="first-section">
      <div className='about-pic-section'>
        <AboutMeCircles />
      </div>
      <div className='about-text-description'>
        <h1 className="about-me">ABOUT ME</h1>
        <p className="about-p">
          👋 Hey! I'm Andreia. I come from a fashion background, but I've decided to change my path and dive into the world of technology. I'm passionate about design and functionality, and I absolutely love front-end development. Anything challenging really gets me excited! But what truly drives and inspires me is seeing the final result of my creations.
        </p>
        <button className="hire-me-btn">HIRE ME</button>
      </div>
    </div>
  )
}