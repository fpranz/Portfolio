import React, { useState } from 'react';
import './NavBar.css'; 
import Logo from '../../assets/icons/Logo.png'; 

const NavBar = () => {
  // State to track the currently active menu item
  const [menu, setMenu] = useState('home');
  // State to manage whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to scroll to a specific section and update the menu state
  const scrollToSection = (sectionId, menuItem) => {
    const element = document.getElementById(sectionId); // Get the element by its ID
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
    setMenu(menuItem); // Update the current menu item
    // Close the menu if the screen width is 768px or less (for mobile view)
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  // Function to toggle the mobile menu open/closed
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className='navbar'> 
      <a className='anchorlink' href='#home'> {/* Link to the home section */}
        <img src={Logo} alt="Logo" className="logo" /> 
        <div className={`open-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}> {/* Toggle menu button */}
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}> {/* Navigation menu list */}
        <div className="close-toggle" onClick={toggleMenu}></div> {/* Close menu button */}
        {/* Menu items for Home, About, Projects, and Contact */}
        <li 
          onClick={() => scrollToSection('home', 'home')} 
          className={menu === 'home' ? 'active' : ''}
        >
          <a className='anchorlink' href='#home'>
            <p>Home</p>
          </a>
        </li>
        <li 
          onClick={() => scrollToSection('about', 'about')} 
          className={menu === 'about' ? 'active' : ''}
        >
          <a className='anchorlink' href='#about'>
            <p>About</p>
          </a>
        </li>
        <li 
          onClick={() => scrollToSection('projects', 'projects')} 
          className={menu === 'projects' ? 'active' : ''}
        >
          <a className='anchorlink' href='#projects'>
            <p>Projects</p>
          </a>
        </li>
        <li 
          onClick={() => scrollToSection('contact', 'contact')} 
          className={menu === 'contact' ? 'active' : ''}
        >
          <a className='anchorlink' href='#contact'>
            <p>Contact</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar; 
