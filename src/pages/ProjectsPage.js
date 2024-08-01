

import React from "react";
import { projects } from "../data/projects";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const handleRequestToJoin = (projectId) => {
    console.log(`Request to join project with ID: ${projectId}`);
    
  };

  const handleBuyProject = (projectId) => {
    console.log(`Request to buy project with ID: ${projectId}`);
    
  };

  return (
    <div className="projects-page">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Skills:</strong> {project.skills.join(", ")}</p>
            <p><strong>Collaborators:</strong> {project.collaborators.join(", ")}</p>
            <p><strong>Price:</strong> ${project.price}</p>
            <div className="project-actions">
              <button onClick={() => handleRequestToJoin(project.id)}>Request to Join</button>
              <button onClick={() => handleBuyProject(project.id)}>Buy Project</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
