import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useSticky } from './StickyContext';
import './Navbar.scss';

const Navbar = forwardRef(() => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const navbarRef = useRef(null);
   const spacerRef = useRef(null);
  const { isSticky } = useSticky();
  const { setIsSticky } = useSticky(); 

  useEffect(() => {
     const currentSpacer = spacerRef.current; // Copy to local variable
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting); 
      },
      { threshold: 0.01 } 
    );

    if (currentSpacer) {
      observer.observe(currentSpacer);
    }

    return () => {
      if (currentSpacer) {
        observer.unobserve(currentSpacer);
      }
    };
  }, [setIsSticky]);
 const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
    <div ref={spacerRef} className="navbar-spacer"></div> 
    <nav ref={navbarRef} id="topNav" className={`navbar ${isSticky ? 'sticky' : ''} ${isOpen ? 'open' : ''}`}>
     <div className="menu-toggle" onClick={toggleMenu}>
          ☰ {/* Hamburger icon */}
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
    </>
  );
});

export default Navbar;
