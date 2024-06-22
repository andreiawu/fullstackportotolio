import React from "react";
import { motion } from 'framer-motion';

export default function ProjectCard() {
  return (
    <div className="project-cards">
      <div className="project-img-box">
        <img src="/images/footprint-screen.png" alt="footprint" className="footprint-cover" />
        <img src="/images/footprint-login.png" alt="footprint" className="footprint-cover" />
        <img src="/images/footprint-home.png" alt="footprint" className="footprint-cover" />
      </div>
      <div className="project-mid-section">
        <div className="project-title-box">
          <h3 className="project-title">E-commerce app</h3>
        </div>
        <div className="project-description-box">
          <p className="calmly-description"><span className="footprint-span">FOOTPRINT</span> is a full-stack project developed within just 24 hours as part of a Hackathon. It is designed as an innovative and user-friendly sneakers shop.</p>
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
        <motion.button
          className="project-btn-code"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/images/github-grey.png" alt="github-icon" className="github-grey" />
          VIEW CODE
        </motion.button>
      </div>
    </div>
  )
}