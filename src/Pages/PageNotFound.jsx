import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1 className="animated-title">404</h1>
      <p className="animated-text">Oops! Page Not Found</p>
      <a href="/" className="back-home">Go Back Home</a>
    </div>
  );
};

export default PageNotFound;