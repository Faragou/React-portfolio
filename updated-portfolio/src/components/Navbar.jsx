import React, { forwardRef, useEffect, useRef } from 'react';
import { useSticky } from './StickyContext';
import './Navbar.scss';

const Navbar = forwardRef((props, ref) => {
  const navbarRef = useRef(null);
   const spacerRef = useRef(null);
  const { isSticky } = useSticky();
  const { setIsSticky } = useSticky(); // Access setIsSticky from context

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting); // Set sticky when navbar is out of view
      },
      { threshold: 0.01 } // Trigger when any part of the navbar leaves the viewport
    );

    if (spacerRef.current) {
      observer.observe(spacerRef.current);
    }

    return () => {
      if (spacerRef.current) {
        observer.unobserve(spacerRef.current);
      }
    };
  }, [setIsSticky]);

  return (
    <>
    <div ref={spacerRef} className="navbar-spacer"></div> 
    <nav ref={navbarRef} id="topNav" className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
    </>
  );
});

export default Navbar;
