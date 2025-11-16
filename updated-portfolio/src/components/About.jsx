import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import './About.scss';

const About = () => {
  const [currentText, setCurrentText] = useState('');
  const [interestIndex, setInterestIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
 
  const togglePlaylist = () => {
    setShowPlaylist(!showPlaylist);
  };
  const interests = useMemo(() => ['Web Development', 'Fullstack Development', 'Cloud Engineering'], []);

  

  useEffect(() => {
    const typingSpeed = 150;
    const delayBetweenInterests = 2000;

    if (typingIndex < interests[interestIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentText + interests[interestIndex][typingIndex]);
        setTypingIndex(typingIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText('');
        setTypingIndex(0);
        setInterestIndex((interestIndex + 1) % interests.length);
      }, delayBetweenInterests);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, interestIndex, currentText, interests]);

  return (
    <section className="about-section">
      <h1 className="about-title">Welcome to my portfolio</h1>
      
      
      <h2 className='about-subtitle'>Work experience</h2>
      <br />
      <h3 className='about-subtitle'>2024-2025</h3>
      <p className="about-description">
        I have almost <span className="highlight">1.5 years of experience</span> as a <span className="highlight">Junior Data Analyst</span> in the <span className="highlight">Data Collection & Management team</span> at Dataexpert Services Kft. . In this role, I am responsible for programming surveys using <span className="highlight">IBM SPSS Data Collection / Dimensions script language</span> and developing <span className="highlight">custom solutions with jQuery</span>. I manage <span className="highlight">projects from proposal to invoicing</span>, ensuring smooth execution and delivery. My work involves close communication with <span className="highlight">client project managers</span> to understand their requirements, provide technical support, and align expectations during <span className="highlight">kickoff calls and meetings</span>. I have contributed to <span className="highlight">large-scale projects across Europe and the United States</span>.
      </p>
      <br />
      <h3 className='about-subtitle'>2025 - Present</h3>
      <p className="about-description">
        <span className="highlight">I am now employed at Magna Body & Chassis Kft.</span> as an <span className="highlight">IT Specialist</span>, where I provided technical support and troubleshooting for various IT-related issues. I have created a <span className="highlight">Zabbix monitoring system</span> for our printers and virtual machines to ensure optimal performance and uptime. Additionally, I have been responsible for maintaining and updating the company's <span className="highlight">IT infrastructure</span>, including hardware and software installations, configurations, and upgrades. I have also assisted in the development and implementation of <span className="highlight">IT policies and procedures</span> to ensure data security and compliance with industry standards. I was also responsible for creating the <span className="highlight">WSUS server</span> and managing <span className="highlight">Windows updates</span> for the entire company network.
      </p>

      <p className="about-subtitle">About Me</p>
      <p className="about-description">
        Hey, my name is Faragó Patrik Bálint. I am a graduate of Computer Science Engineering BSc at University of Debrecen.
      </p>
      <p className="about-description">
        I am a coding enthusiast who is interested in every aspect of development and likes to learn new technologies and improve in the ones I have learned so far.
      </p>
      <p className="about-interests">
        I am interested in <span className="typewriter">{currentText}</span>
      </p>
      <div className="spotify-section">
        <button className="spotify-button" onClick={togglePlaylist}>
        <FontAwesomeIcon icon={faSpotify} size="4x" color="green" />
      </button>
      <p className="spotify-description">Click the Spotify icon to see my favorite playlist I listen to when i code!</p>
      </div>
      {showPlaylist && (
        <div className="spotify-iframe-container">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/0Ko9rDLJsfVYeoJFuoMZoq?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist" // Add a unique title here
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default About;
