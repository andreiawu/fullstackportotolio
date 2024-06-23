import AboutMeCircles from "./AboutMeCircles"
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
        <Link to='/contact'>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className="hire-me-btn">HIRE ME</motion.button>
        </Link>
      </div>
    </div>
  )
}