
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <img src="https://via.placeholder.com/280x150" alt="Project 1" />
        <div className="project-card-content">
          <h3 className="project-card-title">Project 1</h3>
          <p className="project-card-description">A brief description of the project.</p>
        </div>
      </div>
      <div className="project-card">
        <img src="https://via.placeholder.com/280x150" alt="Project 2" />
        <div className="project-card-content">
          <h3 className="project-card-title">Project 2</h3>
          <p className="project-card-description">A brief description of the project.</p>
        </div>
      </div> 
    </section>
  );
};

export default Projects;
