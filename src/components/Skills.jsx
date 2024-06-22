import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <div className="second-section">
      <div className="skills-title-box">
        <h2 className="skills-title">MY SKILLS</h2>
        <p className="skills-small-p">Technologies I’ve been working with recently</p>
      </div>
      <div className="skills-technologies-box">
        <div className="skills-icon-box">
          <img src="/images/js-icon.png" alt="js-icon" className="icon-size-js" />
        </div>
        <div className="skills-icon-box">
          <img src="/images/css-icon.png" alt="css-icon" className="icon-size-css" />
        </div>
        <div className="skills-icon-box">
          <img src="/images/html-icon.png" alt="html-icon" className="icon-size-html" />
        </div>
        <div className="skills-icon-box">
          <img src="/images/tailwind-icon.png" alt="tailwind-icon" className="icon-size-tailwind" />
        </div>
        <div className="skills-icon-box">
          <img src="/images/react-icon.png" alt="react-icon" className="icon-size-react" />
        </div>
        <div className="skills-icon-box">
          <img src="/images/nodejs-icon.png" alt="nodejs-icon" className="icon-size-nodejs" />
        </div>
        <div className="skills-icon-box">
          <img src="/images/mongodb-icon.png" alt="mongodb-icon" className="icon-size-mongodb" />
        </div>
        <div className="skills-icon-box">
          <img src="/images/figma-icon.png" alt="figma-icon" className="icon-size-figma" />
        </div>
        <div className="skills-icon-box">
          <img src="/images/vscode-icon.png" alt="vscode-icon" className="icon-size-vscode" />
        </div>
      </div>
    </div>
  )
}