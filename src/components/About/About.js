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
          While I have only recently developed an understanding of web
          development it has been one of the most interesting and challenging
          endevors I have taken. Thoughtout my studies I've learned technologies
          such as SQL, Express, React to name a few. While web development has
          been a challenging undertaking, it has pushed me to rapidly expand my
          understanding of different technologies and how to implement them. My
          full stack web development journey has reinvogorated my love of
          learning and I am excited to see where this career will take me!
        </p>
        <p className="about-desc">
          While I have only recently developed an understanding of web
          development it has been one of the most interesting and challenging
          endevors I have taken. Thoughtout my studies I've learned technologies
          such as SQL, Express, React to name a few. While web development has
          been a challenging undertaking, it has pushed me to rapidly expand my
          understanding of different technologies and how to implement them. My
          full stack web development journey has reinvogorated my love of
          learning and I am excited to see where this career will take me!
        </p>        <p className="about-desc">
          While I have only recently developed an understanding of web
          development it has been one of the most interesting and challenging
          endevors I have taken. Thoughtout my studies I've learned technologies
          such as SQL, Express, React to name a few. While web development has
          been a challenging undertaking, it has pushed me to rapidly expand my
          understanding of different technologies and how to implement them. My
          full stack web development journey has reinvogorated my love of
          learning and I am excited to see where this career will take me!
        </p>
      </div>
    </div>
  );
};

export default About;
