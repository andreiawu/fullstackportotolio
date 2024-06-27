import React from 'react';

export default function Curriculum() {
  const handleDownload = () => {
    const url = process.env.PUBLIC_URL + '/CV_AndreiaWu_.pdf'; 
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'CV_AndreiaWu_.pdf');
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="cv"
    >
      <button
        className="download-cv"
        onClick={handleDownload}
      >
        <div className="center-btn-cv">
          <img src="/images/download-cv.png" alt="download-icon" className="download-icon" />
          <span className="cv-word">CV</span>
        </div>
      </button>
    </div>
  );
}
