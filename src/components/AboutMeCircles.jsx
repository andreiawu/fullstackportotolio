import React from 'react';
import { motion } from 'framer-motion';

export default function AboutMeCircles() {
  return (
    <div className="circles">
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        src="/images/circle.png"
        alt="circle"
        className="circle"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        src="/images/blur-circle.png"
        alt="blur"
        className="blur"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        src="/images/about-ilustration.png"
        alt="about-illustration"
        className="about-ilustration"
      />
    </div>
  );
}
