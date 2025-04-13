import React from "react";
import "./BlogPostCard.css"; // Import styling

const BlogPostCard = ({ title, excerpt, image, link }) => {
  return (
    <div className="blog-post-card">
      <img className="blog-image" src={image} alt={title} />
      <div className="blog-content">
        <h2 className="blog-title">{title}</h2>
        <p className="blog-excerpt">{excerpt}</p>
        <a href={link} className="read-more">Read More</a>
      </div>
    </div>
  );
};

export default BlogPostCard;