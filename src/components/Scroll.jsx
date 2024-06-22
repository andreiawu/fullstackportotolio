import React from 'react';
import { motion } from 'framer-motion';

export default function Scroll() {
  return(
    <div className="scroll-btn">
      <button className="scroll-top">
        <img src="/images/arrow-up.png" alt="arrow-icon" className="arrow-up" />
      </button>
    </div>
  )
}