import React from 'react';
import Email from '../components/Email';
import { motion } from 'framer-motion';

export default function Contact() {

  const handleEmailClick = () => {
    window.location.href = 'mailto:andreia.12345@hotmail.com';
  };

  return (
    <div className='contact-wrapper'>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="contact-flex"
      >
        <div className="contact-left-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="contact-get-in-touch"
          >
            <div className="touch-touch-box">
              <h2 className="get-in-touch-title">Let’s Get In Touch!</h2>
            </div>
            <div className="touch-touch-box">
              <p className="touch-p">I’d love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to reach out to me. Contact me today and let's start a conversation!</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="contact-box"
          >
            <div className="touch-contact">
              <h2 className="contact-title">CONTACT</h2>
            </div>
            <div className="touch-contact-span-box">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="contact-span"
              >
                Connect with me on my socials
              </motion.span>
            </div>
            <div className="touch-icon-socials-box">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="contact-icon"
              >
                <a
                  href="https://github.com/andreiawu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='social-a'>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="socials-btn"
                  >
                    <img src="/images/github.png" alt="github-icon" className="github-icon" />
                  </motion.button>
                </a>

              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="contact-icon"
              >
                <a href="https://www.linkedin.com/in/andreia-wu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='social-a'>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="socials-btn"
                  >
                    <img src="/images/linkedin.png" alt="linkedin-icon" className="linkedin-icon" />
                  </motion.button>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="contact-icon"
              >
                <a
                  href="https://discord.gg/AbTn2rUqNC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='social-a'
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="socials-btn"
                  >
                    <img src="/images/discord.png" alt="discord-icon" className="discord-icon" />
                  </motion.button>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="contact-icon"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="socials-btn"
                  onClick={handleEmailClick}
                >
                  <img src="/images/email.png" alt="email-icon" className="email-icon" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Email />
    </div>
  )
}
