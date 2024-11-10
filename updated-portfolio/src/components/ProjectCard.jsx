import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ icon, title, description, url, image }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className="icon-container">
        {icon}
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description"><b>{description}</b></p>
      {image && <img src={image} alt={title} className="project-image" />}
    </a>
  );
};

export default ProjectCard;
