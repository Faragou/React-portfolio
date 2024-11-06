import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar.jsx';
import { useSticky } from './StickyContext';
import './NightSky.scss';

const NightSky = () => {
 const navbarRef = useRef(null);
  const { setIsSticky } = useSticky(); // Access setIsSticky from context
  const shootingStars = Array.from({ length: 20 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting); // Set sticky when navbar is out of view
      },
      { threshold: 0.01 } // Trigger when any part of the navbar leaves the viewport
    );

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, [setIsSticky]);

  return (
    <div className="night-container">
      <section className="night">
        {shootingStars.map((_, i) => (
          <div key={i} className="shooting_star"></div>
        ))}
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Patrik Bálint Faragó</h1>
          <p className="hero-tagline">I work as a Data Analyst</p>
        </div>
      </section>
      <Navbar ref={navbarRef}/>
    </div>
  );
};

export default NightSky;