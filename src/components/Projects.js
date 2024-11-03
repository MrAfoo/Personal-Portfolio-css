import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="project-grid">
                <div className="project-card">
                    <h3>Project 1</h3>
                    <p>A brief description of Project 1.</p>
                    <a href="https://yourprojectlink1.com" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>
                <div className="project-card">
                    <h3>Project 2</h3>
                    <p>A brief description of Project 2.</p>
                    <a href="https://yourprojectlink2.com" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>
                {/* Add more projects as needed */}
            </div>
        </section>
    );
}

export default Projects;
