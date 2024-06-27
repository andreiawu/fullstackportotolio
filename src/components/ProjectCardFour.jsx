import React from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectCard() {
  return (
    <div className="project-cards">
      <div className="project-img-box">
        <img src="/images/portofolio-cover.png" alt="calmly" className="cover" />
      </div>
      <div className="project-mid-section">
        <div className="project-title-box">
          <h3 className="project-title">Portofolio</h3>
        </div>
        <div className="project-description-box">
          <p className="calmly-description"><span className="portofolio-span">Andreia Wu</span> is a React project designed to showcase my skills and projects. This was my first project after I finished my full stack course!</p>
        </div>
      </div>
      <div className="project-btns-box">
        <Link to='/home' className="go-home-box">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="project-btn-live"
          >
            GO HOME
          </motion.button>
        </Link>
        <motion.a
          href="https://github.com/andreiawu/fullstackportotolio"
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