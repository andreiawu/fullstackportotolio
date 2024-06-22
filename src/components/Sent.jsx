import React from 'react';
import { motion } from 'framer-motion';

export default function Sent() {
  return(
    <div className="sent-wrapper">
      <div className="sent-icon-box">
        <img src="/images/sent-icon.png" alt="sent-icon" className="sent-icon" />
      </div>
      <div className="sent-submit-box">
        <p className="sent-p">Your email was succesfully
        submitted!</p>
      </div>
    </div>
  )
}