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
      <h2 className="about-subtitle">About Me</h2>
      <p className="about-description">
        Hey, my name is Faragó Patrik Bálint. I am a fresh graduate of Computer Science Engineering BSc at University of Debrecen.
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
