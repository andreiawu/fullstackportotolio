import React from 'react';
import { motion } from 'framer-motion';

export default function Scroll() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-btn">
      <motion.button
        className="scroll-top"
        onClick={scrollToTop}
        whileHover={{ y: -10 }}
        transition={{ type: 'spring', stiffness: 300 }} >
        <img
          src="/images/arrow-up.png" alt="arrow-icon"
          className="arrow-up"
        />
      </motion.button>
    </div>
  )
}