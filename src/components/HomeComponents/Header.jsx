// Header.js
import React from "react";
import "./Header.css"; // Import the CSS file for styling

function Header() {
  return (
    <header className="header">
      <h1>CREATIVE DIGITAL AGENCY</h1>
      <p>
      Welcome to our innovative organization, where ideas meet execution. <br /> Discover exceptional solutions, crafted to transform your business and unlock new possibilities. <br /> Let's shape the future together!
      </p>
      <button className="read-more">Read More</button>
      <button className="request-quote">Request a Quote</button>
    </header>
  );
}

export default Header;