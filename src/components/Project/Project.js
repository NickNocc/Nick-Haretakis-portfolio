import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="project">
      <div className="project-browser">
        <div className="project-circle"></div>
        <div className="project-circle"></div>
        <div className="project-circle"></div>
      </div>
      <a href="Youtube.com" target="_blank" rel="noreferrer">
        <img className="project-img" />
      </a>
    </div>
  );
}

export default Project;

{
  /* <div className="flex-row">
card
card
{projectList.map((image, i) => (
    <img
        src={toBeRequired(`../../assets/small/projects/${i}.jpg`)}
        alt={image.name}
        className="img-thumbnail mx-1"
        key={image.name}
     />
))}
</div> */
}
