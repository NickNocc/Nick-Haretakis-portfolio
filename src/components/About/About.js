import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-skills">
        <h1 className="about-title">Skills</h1>
          <div className="about-skill-item">Javascript</div>
          <div className="about-skill-item">SQL</div>
          <div className="about-skill-item">NoSQL</div>
          <div className="about-skill-item">Express</div>
          <div className="about-skill-item">Node.js</div>
          <div className="about-skill-item">React</div>
          <div className="about-skill-item">MERN</div>
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="about-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default About;
