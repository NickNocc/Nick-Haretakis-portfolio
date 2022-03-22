import React from "react";
import "./Project.css";

function Project({img, link}) {
  return (
    <div className="project">
      <div className="project-browser">
        <div className="project-circle"></div>
        <div className="project-circle"></div>
        <div className="project-circle"></div>
      </div>
      <a href="link" target="_blank" rel="noreferrer">
        <img className="project-img" src={img} alt=""/>
      </a>
    </div>
  );
}

export default Project;
