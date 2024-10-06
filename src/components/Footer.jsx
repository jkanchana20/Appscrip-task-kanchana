import React from 'react';
import { Instagram, Linkedin } from 'react-bootstrap-icons';
import '../css/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettā muse.</p>
         <div className="subscribe">
         <input type="email" placeholder="Enter your e-mail..." />
         <button>SUBSCRIBE</button>
         </div>
          
        </div>
        <div className="footer-section">
          <h2>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>
      </div>
      <hr/>
      <div className="footer-links">
        <div>
          <h2>METTA MUSE</h2>
          <ul>
            <li>About us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact us</li>
            <li>EU Complain Docs</li>
          </ul>
        </div>
        <div>
          <h2>QUICK LINKS</h2>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy & Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>FOLLOW US</h2>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <Instagram size={30} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={30} />
            </a>
          </div>
          <h4>metta muse ACCEPTS</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
