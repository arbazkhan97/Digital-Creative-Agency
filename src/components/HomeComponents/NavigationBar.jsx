// NavigationBar.js
import React from "react";
import "./NavigationBar.css"; // Import the CSS file for styling

function NavigationBar() {
  return (
    <nav className="navbar">

      {/* <img src={logo} alt="logo image" className="nav-logo" /> */}

      <ul>
        <li>  <a href="/">Home</a></li>
        <li> <a href="/Blog">Blog</a>  </li>
        <li> <a href="/OurPages">Our Pages</a> </li>
        <li>  <a href="/Services">Services</a> </li>
      </ul>
      <button className="quote-btn"><a className="text-light" href="/">Request a Quote</a></button>
    </nav>
  );
}

export default NavigationBar;