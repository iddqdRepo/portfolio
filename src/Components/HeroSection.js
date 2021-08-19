import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import ReactParticles from "react-particles-js";
import particlesConfig from "../particles-config.js";
import "../styles.css";
import Navbar from "./Navbar";
import Typing from "react-typing-animation";
import VerticalTimeline from "./VerticalTimeline.js";

function Particles({ children }) {
  return (
    <>
      <div style={{ position: "relative" }}>
        <ReactParticles
          params={particlesConfig}
          style={{
            position: "absolute",
            zIndex: 1,
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
          }}
        />
        {children && <div style={{ position: "relative" }}>{children}</div>}
      </div>
    </>
  );
}

function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 1000 + "%",
          }}
        >
          <div className="ratio-inner">
            <img src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}
const AnimatedTypingComponent = () => (
  <Typing speed={150}>
    {/* <span>This span will get typed.</span>
    <Typing.Backspace count={25} /> */}
    <span className="typed-text">I am ade</span>
    <Typing.Backspace count={4} />
    <span className="typed-text"> a Developer</span>
    <Typing.Backspace count={10} />
    <span className="typed-text"> Software Engineer.</span>
    {/* <Typing.Backspace count={18} /> */}
  </Typing>
);
function CodingAnimation() {
  return (
    <>
      <div className="loader-container">
        <div className="group-1">
          <div className="line line1">
            <div className="dash dash-1 exp-40 div"></div>
            <div className="dash dash-2 exp-70 class-name"></div>
            <div className="dash dash-3 exp-110 class"></div>
            <div className="dash dash-4 exp-70 class"></div>
          </div>
          <div className="line line2">
            <div className="dash dash-1 exp-40 div"></div>
            <div className="dash dash-2 exp-70 class-name"></div>
            <div className="dash dash-3 exp-90 class"></div>
          </div>
          <div className="line line3">
            <div className="dash dash-1 exp-300 par"></div>
          </div>
          <div className="line line4">
            <div className="dash dash-1 exp-200 par"></div>
          </div>
          <div className="line line5">
            <div className="dash dash-1 exp-40 div"></div>
          </div>
          <div className="line line6">
            <div className="dash dash-1 exp-40 div"></div>
          </div>
        </div>

        <div className="group-2">
          <div className="line line1">
            <div className="dash dash-1 div"></div>
            <div className="dash dash-2 class-name"></div>
            <div className="dash dash-3 class"></div>
            <div className="dash dash-4 class"></div>
          </div>
          <div className="line line2">
            <div className="dash dash-1 div"></div>
            <div className="dash dash-2 exp70 class-name"></div>
            <div className="dash dash-3 exp90 class"></div>
          </div>
          <div className="line line3">
            <div className="dash dash-1 par"></div>
          </div>
          <div className="line line4">
            <div className="dash dash-1 par"></div>
          </div>
          <div className="line line5">
            <div className="dash dash-1 div"></div>
          </div>
          <div className="line line6">
            <div className="dash dash-1 div"></div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
function Info() {
  return (
    <div className="info-container">
      <div className="typing">
        <div className="introduction">I'm Chris Walker</div>
        <AnimatedTypingComponent />
      </div>
      <div className="info">
        <CodingAnimation />
      </div>
    </div>
  );
}

const Background = () => {
  return (
    <div className="main">
      <Particles>
        <Hero>
          <div className="container">
            <Info />
          </div>
        </Hero>
      </Particles>
    </div>
  );
};

export default Background;
