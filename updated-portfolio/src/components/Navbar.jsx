import React, { forwardRef } from 'react';
import { useSticky } from './StickyContext';
import './Navbar.scss';

const Navbar = forwardRef((props, ref) => {
  const { isSticky } = useSticky();
  return (
    <nav ref={ref} id="topNav" className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
});

export default Navbar;
