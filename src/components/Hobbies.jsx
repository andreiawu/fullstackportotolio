import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hobbies() {
  return (
    <div className="hobbies-wrapper">
      <div className="hobbies-section-one">
        <h2 className="hobbies-title">MY HOBBIES</h2>
        <p className="hobbies-p">Here’s a peek into the things I love doing in my free time!</p>
      </div>
      <motion.div
        className="hobbies-section-two"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hobbies-icon-box" variants={itemVariants}>
          <div className="hobbies-img-boxbox">
            <img src="/images/brush.png" alt="brush-icon" className="brush-icon" />
          </div>
          <div className="hobbies-words-center">
            <div className="hobbies-text-box">
              <span className="hobbies-word">Drawing</span>
            </div>
          </div>
        </motion.div>
        <motion.div className="hobbies-icon-box" variants={itemVariants}>
          <div className="hobbies-img-boxbox">
            <img src="/images/gaming-icon.png" alt="gaming-icon" className="gaming-icon" />
          </div>
          <div className="hobbies-words-center">
            <div className="hobbies-text-box">
              <span className="hobbies-word">Gaming</span>
            </div>
          </div>
        </motion.div>
        <motion.div className="hobbies-icon-box" variants={itemVariants}>
          <div className="hobbies-img-boxbox">
            <img src="/images/bubbletea.png" alt="bubbletea-icon" className="bubbletea-icon" />
          </div>
          <div className="hobbies-words-center">
            <div className="hobbies-text-box">
              <span className="hobbies-word">Bubble tea</span>
            </div>
          </div>
        </motion.div>
        <motion.div className="hobbies-icon-box" variants={itemVariants}>
          <div className="hobbies-img-boxbox">
            <img src="/images/browser-icon.png" alt="browser-icon" className="browser-icon" />
          </div>
          <div className="hobbies-words-center">
            <div className="hobbies-text-box">
              <span className="hobbies-word">Browsing</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
