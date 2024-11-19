import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        
        <div className="footer-content-left">
          <h1>Foodzy</h1>
          <div className="footer-social-icons">
            
            <a
              href="https://x.com/home?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <img src={assets.twitter_icon} alt="Twitter Icon" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/prathmesh-malunjkar-a47a29259/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn Icon" />
            </a>
          </div>
        </div>

       
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>
              <Link to="/">Home</Link> 
            </li>
            <li>
              <Link to="/aboutus">About Us</Link> 
            </li>
            <li>
              <Link to="/policy">Privacy Policy</Link> 
            </li>
          </ul>
        </div>

      
        <div className="footer-content-right">
          <h2>Contact Us</h2>
          <ul>
            <li>+(91) 93567274867</li>
            <li>foodzy@gmail.com</li>
          </ul>
        </div>
      </div>

      
      <hr />
      
      <p className="footer-copyright">Foodzy, All Rights Reserved, &copy; {new Date().getFullYear()}</p>
      
      
    </div>
  );
};

export default Footer;
