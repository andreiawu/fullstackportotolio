import React from "react";
import { motion } from 'framer-motion';

export default function ProjectCard() {
  return (
    <div className="project-cards">
      <div className="project-img-box">
        <img src="/images/calmly.png" alt="calmly" className="cover" />
      </div>
      <div className="project-mid-section">
        <div className="project-title-box">
          <h3 className="project-title">Mental health platform</h3>
        </div>
        <div className="project-description-box">
          <p className="calmly-description"><span className="calmly-span">CALM.LY</span> is a full-stack project designed to empower individuals and organizations with tools to manage their emotions effectively in daily life.</p>
        </div>
      </div>
      <div className="project-btns-box">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="project-btn-live"
        >
          LIVE PREVIEW
        </motion.button>
        <motion.a
          href="https://github.com/Josuzin/calmly"
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn-code"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/images/github-grey.png" alt="github-icon" className="github-grey" />
          VIEW CODE
        </motion.a>
      </div>
    </div>
  )
}