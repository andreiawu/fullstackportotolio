import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Journey from './Journey';
import Hobbies from './Hobbies';
// import Scroll2 from './Scroll2';
import Fade from 'react-reveal/Fade'

export default function About() {
  return (
    <div className='about-wrapper'>
      <Fade top distance="10%" duration={1500}>
        <AboutMe />
        <Skills />
        <Journey />
        <Hobbies />
      </Fade>
      {/* <Scroll2 /> */}
    </div>
  )
}