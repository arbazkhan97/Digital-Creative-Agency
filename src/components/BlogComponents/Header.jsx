import React from "react";
import "./Header.css"; // Import the styling

const Header = () => {
  return (
    <header className="blog-header">
      <div className="background-animation">
        {/* You can add additional styling or elements here */}
      </div>
      <div className="header-content">
        <h1 className="header-title">Welcome to My #Blog</h1>
        <p className="header-subtitle">Your daily dose of inspiration</p>
      </div>
    </header>
  );
};

export default Header;