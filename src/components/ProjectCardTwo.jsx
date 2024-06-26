import React from "react";
import { motion } from 'framer-motion';

export default function ProjectCard() {
  return (
    <div className="project-cards">
      <div className="project-img-box">
        <img src="/images/spotidados.png" alt="spotidados" className="cover" />
      </div>
      <div className="project-mid-section">
        <div className="project-title-box">
          <h3 className="project-title">Music tracker</h3>
        </div>
        <div className="project-description-box">
          <p className="calmly-description"><span className="spotidados-span">Spotidados</span> is a front-end project that provides detailed statistics on listening habits. Dive into your data to see the total hours listened, your top 50 artists, and more.</p>
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
          WATCH PREVIEW
        </motion.button>
        <motion.a
          href="https://github.com/b4f-bootcamp-8/SpotiDados-Grupo1"
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