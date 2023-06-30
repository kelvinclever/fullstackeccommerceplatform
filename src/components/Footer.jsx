
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
          <p>Our vision is to become the go-to online shopping destination for customers in Kutus, Kirinyaga, and beyond.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: kelvin.nzioka@thejitu.com</p>
          <p>Phone: 0794937897</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com"></a>
            <a href="https://www.twitter.com"></a>
            <a href="https://www.instagram.com"></a>
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
