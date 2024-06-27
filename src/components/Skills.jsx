import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  return (
    <div className="second-section" ref={ref}>
      <div className="skills-title-box">
        <h2 className="skills-title">MY SKILLS</h2>
        <p className="skills-small-p">Technologies I’ve been working with recently</p>
      </div>
      <motion.div
        className="skills-technologies-box"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'} 
      >
        <motion.div className="skills-icon-box" variants={itemVariants}>
          <img src="/images/js-icon.png" alt="js-icon" className="icon-size-js" />
        </motion.div>
        <motion.div className="skills-icon-box" variants={itemVariants}>
          <img src="/images/css-icon.png" alt="css-icon" className="icon-size-css" />
        </motion.div>
        <motion.div className="skills-icon-box" variants={itemVariants}>
          <img src="/images/html-icon.png" alt="html-icon" className="icon-size-html" />
        </motion.div>
        <motion.div className="skills-icon-box" variants={itemVariants}>
          <img src="/images/tailwind-icon.png" alt="tailwind-icon" className="icon-size-tailwind" />
        </motion.div>
        <motion.div className="skills-icon-box" variants={itemVariants}>
          <img src="/images/react-icon.png" alt="react-icon" className="icon-size-react" />
        </motion.div>
        <motion.div className="skills-icon-box" variants={itemVariants}>
          <img src="/images/nodejs-icon.png" alt="nodejs-icon" className="icon-size-nodejs" />
        </motion.div>
        <motion.div className="skills-icon-box" variants={itemVariants}>
          <img src="/images/mongodb-icon.png" alt="mongodb-icon" className="icon-size-mongodb" />
        </motion.div>
        <motion.div className="skills-icon-box" variants={itemVariants}>
          <img src="/images/figma-icon.png" alt="figma-icon" className="icon-size-figma" />
        </motion.div>
        <motion.div className="skills-icon-box" variants={itemVariants}>
          <img src="/images/vscode-icon.png" alt="vscode-icon" className="icon-size-vscode" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
