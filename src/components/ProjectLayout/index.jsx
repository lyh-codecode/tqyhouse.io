import React from 'react';
import './style.css';

const ProjectLayout = ({ projects, onProjectClick }) => {
    return (
        <div className="project-layout">
            {projects.map((project, index) => (
                <div className="project-card" key={index} onClick={() => onProjectClick(project.id)}>
                    <div className="project-icon">{project.icon}</div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectLayout; 