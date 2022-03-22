import React from "react";
import "./ProjectList.css";
import Project from "../Project/Project.js";
// import { projects } from "../../assets/data"

const ProjectList = (props) => {
  const { projects } = props;

  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
