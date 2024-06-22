import React from 'react';
import { motion } from 'framer-motion';

export default function Hobbies() {
  return (
    <div className="hobbies-wrapper">
      <div className="hobbies-section-one">
        <h2 className="hobbies-title">MY HOBBIES</h2>
        <p className="hobbies-p">Here’s a peek into the things I love doing in my free time!</p>
      </div>
      <div className="hobbies-section-two">
        <div className="hobbies-icon-box">
          <div className="hobbies-img-boxbox">
            <img src="/images/brush.png" alt="brush-icon" className="brush-icon" />
          </div>
          <div className="hobbies-words-center">
            <div className="hobbies-text-box">
              <span className="hobbies-word">Drawing</span>
            </div>
          </div>
        </div>
        <div className="hobbies-icon-box">
          <div className="hobbies-icon-box">
            <div className="hobbies-img-boxbox">
              <img src="/images/gaming-icon.png" alt="gaming-icon" className="gaming-icon" />
            </div>
            <div className="hobbies-words-center">
              <div className="hobbies-text-box">
                <span className="hobbies-word">Gaming</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hobbies-icon-box">
          <div className="hobbies-icon-box">
            <div className="hobbies-img-boxbox">
              <img src="/images/bubbletea.png" alt="bubbletea-icon" className="bubbletea-icon" />
            </div>
            <div className="hobbies-words-center">
              <div className="hobbies-text-box">
                <span className="hobbies-word">Bubble tea</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hobbies-icon-box">
          <div className="hobbies-icon-box">
            <div className="hobbies-img-boxbox">
              <img src="/images/browser-icon.png" alt="browser-icon" className="browser-icon" />
            </div>
            <div className="hobbies-words-center">
              <div className="hobbies-text-box">
                <span className="hobbies-word">Browsing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}