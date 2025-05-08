import React from 'react';
import ProjectCard from './ProjectCard';
import { FaCarrot, FaCheck, FaShoppingBag, FaImage, FaCrosshairs } from 'react-icons/fa'; // Example SVG icons from react-icons
import './Projects.scss';
import ShoppingListImage from '../assets/Shopping_List.png';
import ToDoListImage from '../assets/ToDo_List.png';

const projectData = [
  {
    title: 'DietWeb',
    description: 'A dietetic website built with React and styled-components. (Click me to view the demo!)',
    icon: <FaCarrot size={40} color="#61DAFB" />,
    url: 'https://dietweb.netlify.app',
  },
  {
    title: 'Shopping list',
    description: 'A shopping list for personal use, built with HTML/CSS and JavaScript that is connected to a Firebase database.',
    icon: <FaShoppingBag size={40} color="#61DAFB" /> ,
    image: ShoppingListImage, 

  },
  {
    title: 'ToDo list',
    description: 'A todo app for personal use built with React that is connected to a Firebase database for mobile devices.',
    icon: <FaCheck size={40} color="#61DAFB" />, 
    image: ToDoListImage, 
  },
  {
    title: 'Picture gallery',
    description: 'A university project that is picture gallery built with Java that is generating a HTML page with the images in the project.',
    icon: <FaImage size={40} color="#61DAFB" />, 
    url: 'https://github.com/Faragou/Prog2_Projekt'
  },
  {
    title: 'ManageYself',
    description: 'A soccer management web application built with React and Spring Boot.',
    icon: <FaCrosshairs size={40} color="#61DAFB" />, 
    url: 'https://manageyself.com'
  },
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
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
