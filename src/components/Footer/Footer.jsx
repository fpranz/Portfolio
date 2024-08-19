import React from 'react';
import './Footer.css'; 
import Logo3 from '../../assets/icons/Logo3.png'; 

const Footer = () => {
  return (
    <div className='footer'> 
      <hr />
      <div className="footer-details"> 
        <div className="footer-left"> 
          <img 
            src={Logo3} 
            alt="Logo" 
            className="logo-image"
          />
          <p>@ 2024 Franz Patrick Lariba. All rights reserved.</p> 
        </div>
        <div className="footer-right">
          <a href="https://policies.google.com/terms?hl=en-US">
            <p>Terms of Services</p> 
          </a>
          <a href="https://policies.google.com/privacy?hl=en-US">
            <p>Privacy Policy</p> 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
