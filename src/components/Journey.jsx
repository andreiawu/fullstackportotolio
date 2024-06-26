import React, { useState } from 'react';
import { motion } from 'framer-motion';

const initialDetails = [
  { id: 1, title: 'Visual Arts', content: 'From 2015 to 2018, I took a visual arts course from 10th to 12th grade. During this time, I learned to draw, paint, and develop my creativity. Art and design have always been passions of mine, alongside technology.' },
  { id: 2, title: 'Fashion Design', content: 'From 2018 to 2021, I studied fashion design in college, driven by my passion for fashion and clothing. I learned to develop collections, create design concepts, enhance creativity, solve problems, work in teams, handle pressure, and accept criticism.' },
  { id: 3, title: 'Volunteer at Web Summit', content: 'In 2023, to support my decision to transition careers and immerse myself in the tech world, I volunteered at Web Summit. I worked on the measurement team, gaining valuable experience in the tech environment.' },
  { id: 4, title: 'Full-stack Development Bootcamp', content: 'In 2024, I completed an intensive full-stack development bootcamp, where I learned technologies like HTML, CSS, JavaScript, React, Tailwind CSS, Next.js, MongoDB, Node.js, and Figma. It was an amazing journey that I thoroughly enjoyed.' },
];

export default function Journey() {
  const [details, setDetails] = useState(initialDetails);

  const toggleDetails = (id) => {
    const updatedDetails = details.map(detail =>
      detail.id === id ? { ...detail, showDetails: !detail.showDetails } : detail
    );
    setDetails(updatedDetails);
  };

  const maxLength = 100;

  const truncateText = (text) => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <div className="journey-wrapper">
      <div className="journey-section-one">
        <h2 className="journey-title">MY JOURNEY & MORE</h2>
      </div>
      <div className="journey-section-two">
        {details.map(detail => (
          <motion.div className="journey-info-box" key={detail.id}>
            <div className="journey-year">
              <div className="year-limit-box">
                <span className="journey-year-num">{detail.id === 1 ? '2018' : detail.id === 2 ? '2021' : detail.id === 3 ? '2023' : '2024'}</span>
              </div>
              {!detail.showDetails && <div className="journey-line"></div>}
            </div>
            <div className="journey-info-detail">
              <span className="journey-school">{detail.title}</span>
              <motion.p className={`journey-p ${detail.showDetails ? 'show-details' : ''}`}
                initial={{ height: 80, opacity: 0 }}
                animate={{ height: detail.showDetails ? 'auto' : 80, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {detail.showDetails ? (
                  detail.content
                ) : (
                  truncateText(detail.content)
                )}
              </motion.p>
              <button className="read-more-btn" onClick={() => toggleDetails(detail.id)}>
                {detail.showDetails ? 'READ LESS' : 'READ MORE'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
