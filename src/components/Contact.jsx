import React from 'react';
import Header from './Header';
import Email from './Email';
// import Sent from './Sent';

export default function Contact() {
  return (
    <div className='contact-wrapper'>
      <Header />
      {/* <Sent /> */}
      <div className="contact-flex">
        <div className="contact-left-section">
          <div className="contact-get-in-touch">
            <div className="touch-touch-box">
              <h2 className="get-in-touch-title">Let’s Get In Touch!</h2>
            </div>
            <div className="touch-touch-box">
              <p className="touch-p">I’d love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to reach out to me. Contact me today and let's start a conversation!</p>
            </div>
          </div>
          <div className="contact-box">
            <div className="touch-contact">
              <h2 className="contact-title">CONTACT</h2>
            </div>
            <div className="touch-contact-span-box">
              <span className="contact-span">Connect with me on my socials</span>
            </div>
            <div className="touch-icon-socials-box">
              <div className="contact-icon">
                <button className="socials-btn">
                  <img src="/images/github.png" alt="github-icon" className="github-icon" />
                </button>
              </div>
              <div className="contact-icon">
                <button className="socials-btn">
                  <img src="/images/linkedin.png" alt="linkedin-icon" className="linkedin-icon" />
                </button>
              </div>
              <div className="contact-icon">
                <button className="socials-btn">
                  <img src="/images/discord.png" alt="discord-icon" className="discord-icon" />
                </button>
              </div>
              <div className="contact-icon">
                <button className="socials-btn">
                  <img src="/images/email.png" alt="email-icon" className="email-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right-section">
          <Email />
        </div>
      </div>
    </div>
  )
}