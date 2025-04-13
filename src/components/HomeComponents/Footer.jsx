// Footer.js
import React from "react";
import "./Footer.css"; // Import the CSS file


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section company">
          <h3>About Us</h3>
          <p>
            We strive to deliver top-notch services and innovative solutions
            for businesses worldwide.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Services">Services</a>
            </li>
            <li>
              <a href="/OurPages">Our Pages</a>
            </li>
            <li>
              <a href="/Blog">Blog</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/152JbCUa6H/"> 
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://github.com/arbazkhan97">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/arbaz-khan%F0%9F%9A%80-68b732259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/mr.khan_o9dc?igsh=NTVlNzg5bzMybGln">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;