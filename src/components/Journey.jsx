import React from 'react';
import { motion } from 'framer-motion';

export default function Journey() {
  return (
    <div className="journey-wrapper">
      <div className="journey-section-one">
        <h2 className="journey-title">MY JOURNEY & MORE</h2>
      </div>
      <div className="journey-section-two">
        <div className="journey-info-box">
          <div className="journey-year">
            <div className="year-limit-box">
              <span className="journey-year-num">2018</span>
            </div>
            <div className="journey-line">
            </div>
          </div>
          <div className="journey-info-detail">
            <span className="journey-school">Visual Arts, - Escola secundária D.João II</span>
            <p className="journey-p">From 2015 to 2018, I took a visual arts course from 10th to 12th grade. During this time, I learned to draw, paint, and develop my creativity. Art and design have always been passions of mine, alongside technology.</p>
          </div>
        </div>
        <div className="journey-info-box">
          <div className="journey-year">
            <div className="year-limit-box">
              <span className="journey-year-num">2018</span>
            </div>
            <div className="journey-line">
            </div>
          </div>
          <div className="journey-info-detail">
            <span className="journey-school">Bachelor degree in Fashion Design, - Lisbon School of Architecture</span>
            <p className="journey-p">From 2018 to 2021, I studied fashion design in college, driven by my passion for fashion and clothing. I learned to develop collections, create design concepts, enhance creativity, solve problems, work in teams, handle pressure, and accept criticism.</p>
          </div>
        </div>
        <div className="journey-info-box">
          <div className="journey-year">
            <div className="year-limit-box">
              <span className="journey-year-num">2018</span>
            </div>
            <div className="journey-line">
            </div>
          </div>
          <div className="journey-info-detail">
            <span className="journey-school">Volunteer at Web Summit, - Lisbon</span>
            <p className="journey-p">In 2023, to support my decision to transition careers and immerse myself in the tech world, I volunteered at Web Summit. I worked on the measurement team, gaining valuable experience in the tech environment.</p>
          </div>
        </div>
        <div className="journey-info-box">
          <div className="journey-year">
            <div className="year-limit-box">
              <span className="journey-year-num">2018</span>
            </div>
            <div className="journey-line">
            </div>
          </div>
          <div className="journey-info-detail">
            <span className="journey-school">Full stack developer bootcamp, - Bytes4Future</span>
            <p className="journey-p">In 2024, I completed an intensive full-stack development bootcamp, where I learned technologies like HTML, CSS, JavaScript, React, Tailwind CSS, Next.js, MongoDB, Node.js, and Figma. It was an amazing journey that I thoroughly enjoyed.</p>
          </div>
        </div>
      </div>
    </div>
  )
}