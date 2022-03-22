import React from "react";
import "./intro.css";
import profilePic from "../../assets/img/profilePic.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-name">Nicholas Haretakis</h2>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">Anthropologist</div>
              <div className="intro-title-item">Something else</div>

            </div>
          </div>
          <p className="intro-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        
      </div>

      <div className="intro-right">
        <div className="intro-right-wrapper">
          <div className="intro-bg"></div>
          <img src={profilePic} alt="" className="intro-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
