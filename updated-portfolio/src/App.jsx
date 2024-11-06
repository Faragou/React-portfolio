import React from 'react';
import About from './components/About.jsx';
import NightSky from './components/NightSky.jsx';
import { StickyProvider } from './components/StickyContext';
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
      <br />
    </div>
    </StickyProvider>
  );
};

export default App;
