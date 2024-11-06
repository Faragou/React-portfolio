import React from 'react';
import './NightSky.scss';

const NightSky = () => {
  const shootingStars = Array.from({ length: 20 });

  return (
    <div className="night-container">
      <section className="night">
        {shootingStars.map((_, i) => (
          <div key={i} className="shooting_star"></div>
        ))}
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Patrik Bálint Faragó</h1>
          <p className="hero-tagline">I am currently a Data Analyst</p>
        </div>
      </section>
    </div>
  );
};

export default NightSky;
