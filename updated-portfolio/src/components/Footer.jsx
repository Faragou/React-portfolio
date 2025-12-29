import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import CanvasEmbers from './CanvasEmbers.jsx';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
     <CanvasEmbers /> 
     <div className="footer-content">
      <p>
        Made with <FontAwesomeIcon icon={faHeart} style={{ color: 'blue' }} /> by faragou @2025
      </p>
      <div className="footer-links">
        <a
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/Faragou"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/patrik-bálint-faragó-a47b56281/"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </div>
      </div>
    </footer>
    
  );
};

export default Footer;
