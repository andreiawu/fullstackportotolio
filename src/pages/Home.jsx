import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="home">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          src='/images/ilustration.png'
          alt='ilustration'
          className='ilustration'
        />
        <div className="home-firstrow">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="home-slogan"
          >
            dream, design, deliver<br />
            – my mission:<br />
            ideas to <span className='home-products'>products</span>.
          </motion.h1>
        </div>
        <Link to="/projects">
          <div className="home-secrow">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className='home-projects'>VIEW PROJECTS</motion.button>
          </div>
        </Link>
        <div className="home-thrdrow">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="home-text"
          >
            Hey! I'm Andreia, a full-stack developer who loves building digital products that make everyday life better for people, turning the ordinary into something enjoyable.
          </motion.p>
        </div>
      </div>
    </div>
  );
}