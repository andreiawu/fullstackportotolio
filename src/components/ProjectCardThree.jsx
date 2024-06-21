import React from "react";

export default function ProjectCard() {
  return (
    <div className="project-cards">
      <div className="project-img-box">
        <img src="/images/footprint-screen.png" alt="footprint" className="footprint-cover" />
        <img src="/images/footprint-login.png" alt="footprint" className="footprint-cover" />
        <img src="/images/footprint-home.png" alt="footprint" className="footprint-cover" />
      </div>
      <div className="project-mid-section">
        <div className="project-title-box">
          <h3 className="project-title">E-commerce app</h3>
        </div>
        <div className="project-description-box">
          <p className="calmly-description"><span className="footprint-span">FOOTPRINT</span> is a full-stack project developed within just 24 hours as part of a Hackathon. It is designed as an innovative and user-friendly sneakers shop.</p>
        </div>
      </div>
      <div className="project-btns-box">
        <button className="project-btn-live">LIVE PREVIEW</button>
        <button className="project-btn-code">
          <img src="/images/github-grey.png" alt="github-icon" className="github-grey" />VIEW CODE
        </button>
      </div>
    </div>
  )
}