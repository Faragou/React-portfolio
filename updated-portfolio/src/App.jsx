import React from 'react';
import About from './components/About.jsx';
import NightSky from './components/NightSky.jsx';
import { StickyProvider } from './components/StickyContext';
import Footer from './components/Footer.jsx';
import Projects from './components/Projects.jsx';
import './App.scss';

const App = () => {

  return (
    <StickyProvider>
     <div className="App">
      <section id="home">
        <NightSky />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects  />
      </section>
    </div>
    <Footer />
    </StickyProvider>
    
  );
};

export default App;
