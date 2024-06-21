import React from "react";

export default function ProjectCard() {
  return (
    <div className="project-cards">
      <div className="project-img-box">
        <img src="/images/spotidados.png" alt="spotidados" className="cover" />
      </div>
      <div className="project-mid-section">
        <div className="project-title-box">
          <h3 className="project-title">Music tracker</h3>
        </div>
        <div className="project-description-box">
          <p className="calmly-description"><span className="spotidados-span">Spotidados</span> is a front-end project that provides detailed statistics on listening habits. Dive into your data to see the total hours listened, your top 50 artists, and more.</p>
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