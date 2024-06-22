import React from "react";
import About from "../components/About";
import Curriculum from "../components/Curriculum";
import { motion } from 'framer-motion';

export default function AboutMePage() {
  return (
    <div className="about-me-page">
      <About />
      <Curriculum />
    </div>
  )
}