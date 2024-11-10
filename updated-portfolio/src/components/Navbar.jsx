import React, { forwardRef, useEffect, useRef } from 'react';
import { useSticky } from './StickyContext';
import './Navbar.scss';

const Navbar = forwardRef(() => {
  const navbarRef = useRef(null);
   const spacerRef = useRef(null);
  const { isSticky } = useSticky();
  const { setIsSticky } = useSticky(); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting); 
      },
      { threshold: 0.01 } 
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
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
    </>
  );
});

export default Navbar;
