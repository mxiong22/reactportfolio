import React from "react";
import { projectsData } from "./data";

const Projects = () => {
  console.log(projectsData);
  return (
    <div className="projects">
      <h2 className="projects-heading">Projects</h2>
      {projectsData.map((projectValue) => (
        <div className="projects-section">
          <div className="projects-left">
            <h3 className="project-title"> {projectValue.title} </h3>
            <p className="project-description"> {projectValue.description} </p>
            {projectValue.technologies.map((item) => (
              <button className="project-btn"> {item} </button>
            ))}
          </div>
          <div className="projects-right">
            <img className="project-img" src={projectValue.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
