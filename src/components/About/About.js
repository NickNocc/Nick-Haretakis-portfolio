import React from "react";
import "./about.css";
import Checkmark from "../../assets/img/Checkmark.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-skills">
          <h1 className="about-title">Skills</h1>
          <div className="about-skill-item">
            <img className="about-icon" src={Checkmark} alt="" />
            Javascript
          </div>
          <div className="about-skill-item">
            <img className="about-icon" src={Checkmark} alt="" />
            SQL
          </div>
          <div className="about-skill-item">
            <img className="about-icon" src={Checkmark} alt="" />
            NoSQL
          </div>
          <div className="about-skill-item">
            <img className="about-icon" src={Checkmark} alt="" />
            Express
          </div>
          <div className="about-skill-item">
            <img className="about-icon" src={Checkmark} alt="" />
            Node.js
          </div>
          <div className="about-skill-item">
            <img className="about-icon" src={Checkmark} alt="" />
            React
          </div>
          <div className="about-skill-item">
            <img className="about-icon" src={Checkmark} alt="" />
            MERN
          </div>
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          While my journey with web development has only just started, I am
          confident in my ability to expand my knowledge going into the future.
        </p>
        <p className="about-desc">
          Computers have been a huge part of my life ever since I was a child,
          so after graduating from UCLA I decided I wanted to take this interest
          to the next level and learn computer programming. This took me on a
          challenging and satisfying journey to become a Full Stack Developer. I
          have recently earned a certificate in full stack development from the
          University Coding, with newly developed skills in JavaScript, CSS,
          React.js, and responsive web design. Known as a problem solver who
          works as a team player to develop applications. With each project I
          aim to develop an application with practical and easy use to reach as
          many users as possible.I lead a team of three to develop a single-page
          MERN app that tracks media consumption for users so that they may more
          effectively use their free time. As a part of a team I bring clear and
          concise communication skills from my time in food service, my holistic
          understanding of applications and those who use them, and my emphasis
          on synergy and working as a team to deliver an excellent product.
        </p>        <p className="about-desc">
          Computers have been a huge part of my life ever since I was a child,
          so after graduating from UCLA I decided I wanted to take this interest
          to the next level and learn computer programming. This took me on a
          challenging and satisfying journey to become a Full Stack Developer. I
          have recently earned a certificate in full stack development from the
          University Coding, with newly developed skills in JavaScript, CSS,
          React.js, and responsive web design. Known as a problem solver who
          works as a team player to develop applications. With each project I
          aim to develop an application with practical and easy use to reach as
          many users as possible.I lead a team of three to develop a single-page
          MERN app that tracks media consumption for users so that they may more
          effectively use their free time. As a part of a team I bring clear and
          concise communication skills from my time in food service, my holistic
          understanding of applications and those who use them, and my emphasis
          on synergy and working as a team to deliver an excellent product.
        </p>
      </div>
    </div>
  );
};

export default About;
