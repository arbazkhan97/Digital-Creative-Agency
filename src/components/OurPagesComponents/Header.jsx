import React from "react";
import "./Header.css"; // Separate stylesheet import

const Header = () => {
  return (
    <header className="header1">
      <div className="overlay">
        <div className="content">
          <h1> Welcome to my  #Our Pages</h1>
          <p>Discover amazing content and experiences</p>
          <a href="#explore" className="btn">Explore Now</a>
        </div>
      </div>
    </header>
  );
};

export default Header;