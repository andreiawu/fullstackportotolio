import React from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import ProjectCardTwo from "./ProjectCardTwo";
import ProjectCardThree from "./ProjectCardThree";
import ProjectCardFour from "./ProjectCardFour";
import Scroll from "./Scroll";

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <Header />
      <div className="projects-box">
        <div className="projects-fst-section">
          <div className="projects-title-box">
            <h2 className="projects-title">PROJECTS</h2>
          </div>
          <div className="projects-p-box">
            <p className="projects-p">Here, you'll find a showcase of my projects highlighting my expertise in both front-end and back-end development. Explore my work to see how I build efficient, innovative, and user-friendly applications.</p>
          </div>
        </div>
        <div className="projects-sec-section">
          <div className="project-flexbox">
            <ProjectCard />
            <ProjectCardTwo />
          </div>
          <div className="project-flexbox-two">
            <ProjectCardThree />
            <ProjectCardFour />
          </div>
        </div>
      </div>
      <div className="scroll-box">
        <Scroll />
      </div>
    </div>
  )
}