import React from 'react';
import { motion } from 'framer-motion';

export default function Curriculum() {
  return (
    <div className="cv">
      <button
        className="download-cv">
        <div className="center-btn-cv">
          <img src="/images/download-cv.png" alt="download-icon" className="download-icon" />
          <span className="cv-word">CV</span>
        </div>
      </button>
    </div>
  )
}