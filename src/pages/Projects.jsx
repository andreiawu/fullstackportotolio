import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectCardTwo from "../components/ProjectCardTwo";
import ProjectCardThree from "../components/ProjectCardThree";
import ProjectCardFour from "../components/ProjectCardFour";
import Scroll from "../components/Scroll";
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="projects-box">
        <div className="projects-fst-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="projects-title-box"
          >
            <h2 className="projects-title">PROJECTS</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="projects-p-box"
          >
            <p className="projects-p">Here, you'll find a showcase of my projects highlighting my expertise in both front-end and back-end development. Explore my work to see how I build efficient, innovative, and user-friendly applications.</p>
          </motion.div>
        </div>
        <div className="projects-sec-section">
          <div className="project-flexbox">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ProjectCard />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <ProjectCardTwo />
            </motion.div>
          </div>
          <div className="project-flexbox-two">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <ProjectCardThree />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <ProjectCardFour />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="scroll-box">
        <Scroll />
      </div>
    </div>
  );
}
