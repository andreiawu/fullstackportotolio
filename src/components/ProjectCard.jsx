// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Calmly from './Calmly';

// export default function ProjectCard() {

//   const [showVideo, setShowVideo] = useState(false);

//   const handleVideoToggle = () => {
//     setShowVideo(!showVideo);
//   };

//   return (
//     <div className="projects-video">
//       <div className="project-cards">
//         <div className="project-img-box">
//           <img src="/images/calmly.png" alt="calmly" className="cover" />
//         </div>
//         <div className="project-mid-section">
//           <div className="project-title-box">
//             <h3 className="project-title">Mental health platform</h3>
//           </div>
//           <div className="project-description-box">
//             <p className="calmly-description"><span className="calmly-span">CALM.LY</span> is a full-stack project designed to empower individuals and organizations with tools to manage their emotions effectively in daily life.</p>
//           </div>
//         </div>
//         <div className="project-btns-box">
//           <motion.button
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             transition={{ duration: 0.3 }}
//             className="project-btn-live"
//             onClick={handleVideoToggle}
//           >
//             WATCH PREVIEW
//           </motion.button>
//           <motion.a
//             href="https://github.com/Josuzin/calmly"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="project-btn-code"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img src="/images/github-grey.png" alt="github-icon" className="github-grey" />
//             VIEW CODE
//           </motion.a>
//         </div>
//       </div>
//       {showVideo && <Calmly src="/calmly.mp4" onClose={handleVideoToggle} className='video-frame' />}
//     </div>
//   )
// }

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Calmly from './Calmly';

export default function ProjectCard() {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoToggle = () => {
    setShowVideo(!showVideo);
  };

  // Variants for animation
  const videoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="projects-video">
      <div className="project-cards">
        <div className="project-img-box">
          <img src="/images/calmly.png" alt="calmly" className="cover" />
        </div>
        <div className="project-mid-section">
          <div className="project-title-box">
            <h3 className="project-title">Mental health platform</h3>
          </div>
          <div className="project-description-box">
            <p className="calmly-description">
              <span className="calmly-span">CALM.LY</span> is a full-stack project designed to empower individuals and organizations with tools to manage their emotions effectively in daily life.
            </p>
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
            onClick={handleVideoToggle}
          >
            WATCH PREVIEW
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

      {showVideo && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={videoVariants}
          className="video-frame"
        >
          <Calmly src="/calmly.mp4" onClose={handleVideoToggle} />
        </motion.div>
      )}
    </div>
  );
}
