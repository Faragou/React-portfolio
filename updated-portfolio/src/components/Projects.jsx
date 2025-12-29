import React from 'react';
import ProjectCard from './ProjectCard';
import { FaHouse, FaCarrot, FaCheck, FaBasketShopping, FaImage } from 'react-icons/fa6'; // Example SVG icons from react-icons
import './Projects.scss';
import ShoppingListImage from '../assets/Shopping_List.png';
import ToDoListImage from '../assets/ToDo_List.png';
import SharedLifeImage from '../assets/SharedLife_1.png';

const projectData = [
  {
    title: 'SharedLife',
    description: 'A web application created with React and Firebase that is used by two users. In this application the users have a shared calendar that they can export out into their native calendar application. They also have a shared shopping list and a shared financial tracker to track their expenses together, and individually as well.',
    icon: <FaHouse size={40} color="#61DAFB" />,
    image: SharedLifeImage, 
  },
  {
    title: 'DietWeb',
    description: 'A dietetic website built with React and styled-components. (Click me to view the demo!)',
    icon: <FaCarrot size={40} color="#61DAFB" />,
    url: 'https://dietweb.netlify.app',
  },
  {
    title: 'Shopping list',
    description: 'A shopping list for personal use, built with HTML/CSS and JavaScript that is connected to a Firebase database.',
    icon: <FaBasketShopping size={40} color="#61DAFB" /> ,
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
    description: 'A university project that is picture gallery built with Java that is generating a HTML page with the images in the project. (Click me to navigate to the github repository!)',
    icon: <FaImage size={40} color="#61DAFB" />, 
    url: 'https://github.com/Faragou/Prog2_Projekt'
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
