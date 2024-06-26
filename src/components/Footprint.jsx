import React from 'react';

export default function VideoPlayer({ src, onClose }) {
  return (
    <div className="video-overlay">
      <div className="video-container-two">
        <button className="close-button" onClick={onClose}>Close</button>
        <video controls className='video-two'>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}