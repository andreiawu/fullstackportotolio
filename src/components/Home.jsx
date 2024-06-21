import React from 'react';
import Header from './Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <img src='/images/ilustration.png' alt='ilustration' className='ilustration'></img>
        <div className="home-firstrow">
          <h1 className="home-slogan">dream, design, deliver<br></br>
            – my mission:<br></br>
            ideas to <span className='home-products'>products</span>.</h1>
        </div>
        <div className="home-secrow">
          <button className='home-projects'>VIEW PROJECTS</button>
        </div>
        <div className="home-thrdrow">
          <p className="home-text">Hey! I'm Andreia, a full-stack developer who loves building digital products that make everyday life better for people, turning the ordinary into something enjoyable.</p>
        </div>
      </div>
    </div>

  );
}