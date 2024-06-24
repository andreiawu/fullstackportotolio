import React from 'react';
import { motion } from 'framer-motion';

export default function Scroll() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-box-two">
      <motion.button
        type="button"
        className="scroll-top-two"
        onClick={scrollToTop}
        whileHover={{ y: -10 }}
        transition={{ type: 'spring', stiffness: 300 }} >
        <img
          src="/images/arrow-up.png" alt="arrow-icon"
          className="arrow-up-two"
        />
      </motion.button>
    </div>
  )
}