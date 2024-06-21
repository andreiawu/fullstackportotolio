import React from "react";


export default function ProjectCard() {
  return (
    <div className="project-cards">
      <div className="project-img-box">
        <img src="/images/calmly.png" alt="calmly" className="cover" />
      </div>
      <div className="project-mid-section">
        <div className="project-title-box">
          <h3 className="project-title">asassassdrm</h3>
        </div>
        <div className="project-description-box">
          <p className="calmly-description"><span className="calmly-span">sddsdd</span> is a full-stack project designed to empower individuals and organizations with tools to manage their emotions effectively in daily life.</p>
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