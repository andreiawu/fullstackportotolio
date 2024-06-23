import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: form.current['user_name']?.value,
      user_email: form.current['user_email']?.value,
      message: form.current['message']?.value,
      from_email: form.current['user_email']?.value
    };

    if (!templateParams.user_name || !templateParams.user_email || !templateParams.message) {
      alert("Please fill out all fields.");
      return;
    }

    emailjs.send('service_cekokga', 'template_dgmm8w8', templateParams, 'mvkSEKkjPahIlP07Z')
      .then((result) => {
        console.log(result.text);
        alert("Email sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error('Email Error:', error);
        alert("Failed to send email, please try again.");
      });
  };

  return (
    <div className="emailbox-wrapper">
      <div className="emailbox">
        <div className="emailbox-title">
          <h2 className="lets-talk">Let’s talk!</h2>
        </div>
        <div className="emailbox-middle-section">
          <form ref={form} onSubmit={sendEmail} className='email-form'>
            <div className="emailbox-info-box">
              <div className="input-container">
                <input type="text" className="name-input" id="name" name="user_name" required placeholder="Your name here..." />
                <label htmlFor="name" className="input-label">Name</label>
              </div>
              <div className="input-container">
                <input type="email" className="email-input" id="email" name="user_email" required placeholder="example@gmail.com" />
                <label htmlFor="email" className="input-label">Email</label>
              </div>
            </div>
            <div className="emailbox-text-box">
              <textarea className="text-box" id="message" name="message" required placeholder="Hey let’s collaborate..."></textarea>
              <label htmlFor="message" className="input-label-msg">Message</label>
            </div>
            <div className="emailbox-submit">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="email-submit-btn"
              >
                SUBMIT
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
