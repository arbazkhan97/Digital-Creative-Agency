import React from "react";
import "./BlogCategoryFilter.css"; // Import styling

const BlogCategoryFilter = ({ categories, onCategorySelect }) => {
  return (
    <div className="category-filter">
      <h3 className="filter-title">Filter by Category</h3>
      <div className="filter-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            className="filter-button"
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogCategoryFilter;