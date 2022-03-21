import React from "react";
import "./ProjectList.css";
import Project from "../Project/Project.js";
const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          test
          testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
        </p>
      </div>
      <div className="pl-list">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default ProjectList;
