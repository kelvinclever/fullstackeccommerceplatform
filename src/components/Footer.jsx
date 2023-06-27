import React from 'react';
import './Footer.css';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <div>
    <div className='footerAll'>
         <div className='wrap'>
            <Wrapper/>
        </div>
   
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
            <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
            <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
      
    </footer>
  
    </div>  
    <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} quickcheckstore. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
