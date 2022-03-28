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
              <div className="intro-title-item">Forever Student</div>
              <div className="intro-title-item">Critical Thinker</div>
              <div className="intro-title-item">Anthropologist</div>
            </div>
          </div>
          <p className="intro-description">
            Hello my name is Nick Haretakis, I am a graduate of UCLA's
            Anthropology program as well as UCLA's full stack web development
            course. I have a passion for learning and improving myself both
            personally and professionally. I'm always excited to broaden my
            horizons in any way that I can.
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
