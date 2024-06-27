import React from 'react';
import { motion } from 'framer-motion';

export default function Curriculum() {
  const handleDownload = () => {
    const url = process.env.PUBLIC_URL + '/CV_AndreiaWu_.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'CV_AndreiaWu_.pdf');
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="cv"
      initial={{ opacity: 0, y: -100 }}  
      animate={{ opacity: 1, y: 0 }}     
      transition={{ duration: 0.9, delay: 0.1 }}
    >
      <button
        className="download-cv"
        onClick={handleDownload}
      >
        <div className="center-btn-cv">
          <img src="/images/download-cv.png" alt="download-icon" className="download-icon" />
          <span className="cv-word">CV</span>
        </div>
      </button>
    </motion.div>
  );
}
