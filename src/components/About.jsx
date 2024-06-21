import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Journey from './Journey';
import Hobbies from './Hobbies';
import Scroll from './Scroll';

export default function About() {
  return (
    <div className='about-wrapper'>
      <Header />
      <AboutMe />
      <Skills />
      <Journey />
      <Hobbies />
      {/* <Scroll /> */}
    </div>
  )
}