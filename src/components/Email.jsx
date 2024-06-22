import React from 'react';
import { motion } from 'framer-motion';

export default function Email() {
  return (
    <div className="emailbox-wrapper">
      <div className="emailbox">
        <div className="emailbox-title">
          <h2 className="lets-talk">Let’s talk!</h2>
        </div>
        <div className="emailbox-middle-section">
          <div className="emailbox-info-box">
            <div className="input-container">
              <input type="text" className="name-input" id="name" required placeholder="Your name here..." />
              <label htmlFor="name" className="input-label">Name</label>
            </div>
            <div className="input-container">
              <input type="email" className="email-input" id="email" required placeholder="example@gmail.com" />
              <label htmlFor="email" className="input-label">Email</label>
            </div>
          </div>
          <div className="emailbox-text-box">
            <textarea className="text-box" id="message" required placeholder="Hey let’s collaborate..."></textarea>
            <label htmlFor="message" className="input-label-msg">Message</label>
          </div>
        </div>
        <div className="emailbox-submit">
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className="email-submit-btn">SUBMIT</motion.button>
        </div>
      </div>
    </div>
  )
}