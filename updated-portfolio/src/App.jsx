import React from 'react';
import About from './components/About.jsx';
import NightSky from './components/NightSky.jsx';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <NightSky /> {/* This will render the HeroSection component, which includes NightSky */}
      <About /> {/* This will render the About component */}
    </div>
  );
};

export default App;
