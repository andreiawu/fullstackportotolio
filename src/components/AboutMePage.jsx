import React from "react";
import About from "./About";
import Curriculum from "./Curriculum";
import { motion } from 'framer-motion';

export default function AboutMePage() {
  return(
    <div className="about-me-page">
      <About/>
      <Curriculum/>
    </div>
  )
}