import React, { useState, useEffect } from 'react';
import './About.scss';

const About = () => {
  const [currentText, setCurrentText] = useState('');
  const interests = ['Web Development', 'Fullstack Development', 'Cloud Engineering'];
  const [interestIndex, setInterestIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);

  // Typewriter effect
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
        Hey, my name is Patrik Bálint Faragó. I'm studying Computer Science Engineering BSc at University of Debrecen.
      </p>
      <p className="about-description">
        I am a beginner developer who is interested in every aspect of development and likes to learn new technologies and improve in the ones I have learned so far.
      </p>
      <p className="about-interests">
        I am interested in <span className="typewriter">{currentText}</span>
      </p>
    </section>
  );
};

export default About;
