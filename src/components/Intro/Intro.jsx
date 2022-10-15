import React, { useEffect } from "react";
// import { gsap, Draggable, TweenLite, Linear, TimelineMax } from "gsap/all";

import backgroundBlurLight from "../../assets/bg_blur_light.jpg";

import "./intro.css";

const Intro = () => {
  useEffect(() => {}, []);

  return (
    <section className="intro-container">
      <div className="intro">
        <div className="intro-section-text">
          <div className="title">
            Because Audio
            <br /> NFTs Are The
            <br /> Future
          </div>
          <div className="subtitle">
            Are You Ready To Join The Next Revolution?
          </div>
          <button>Join Waitlist</button>
        </div>
        <div id="picker" className="picker">
          <div className="bg-blur_light"></div>
          <div className="cell">card 1</div>
          <div className="cell">card 2</div>
          <div className="cell">card 3</div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
