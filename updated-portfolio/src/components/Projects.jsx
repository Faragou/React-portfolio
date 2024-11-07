import React from 'react';
import ProjectCard from './ProjectCard';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Example SVG icons from react-icons
import './Projects.scss';

const projectData = [
  {
    title: 'React Portfolio',
    description: 'A personal portfolio built with React and SCSS.',
    icon: <FaReact size={40} color="#61DAFB" />, // React icon
    url: 'https://your-portfolio-url.com',
  },
  {
    title: 'Node.js API',
    description: 'A RESTful API built with Node.js and Express.',
    icon: <FaNodeJs size={40} color="#68A063" />, // Node.js icon
    url: 'https://your-api-url.com',
  },
  {
    title: 'Database Management',
    description: 'A database management project with SQL and NoSQL databases.',
    icon: <FaDatabase size={40} color="#4DB33D" />, // Database icon
    url: 'https://your-database-url.com',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            icon={project.icon}
            title={project.title}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
