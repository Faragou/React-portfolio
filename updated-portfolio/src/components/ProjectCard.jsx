import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ icon, title, description, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className="icon-container">
        {icon}
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </a>
  );
};

export default ProjectCard;
