import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Journey from './Journey';
import Hobbies from './Hobbies';
// import Scroll from './Scroll';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className='about-wrapper'>
      <AboutMe />
      <Skills />
      <Journey />
      <Hobbies />
      {/* <Scroll /> */}
    </div>
  )
}