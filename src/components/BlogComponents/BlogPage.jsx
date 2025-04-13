import React, { useState } from "react";
import BlogPostCard from "./BlogPostCard";
import BlogCategoryFilter from "./BlogCategoryFilter";
import "./BlogPage.css"; // Import styling

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Design", "Marketing", "Technology", "Social Media"];
  
  const blogPosts = [
    {
      title:"Empowering Brands with Cutting-Edge Solutions" ,
       category:"Technology",
      excerpt:"Discover how we blend creativity and technology to create innovative campaigns that captivate audiences and elevate your brand to new heights.",
      image:"/blogcard01.png" ,
      link:"https://www.infobool.com/blog/empowering-businesses-with-cutting-edge-it-solutions/" , 
        },

    { 
      title:"The Future of Digital Marketing Strategies" ,
      category:"Marketing",
        excerpt:"Explore the evolving trends in digital marketing and how our data-driven approach can transform your online presence and boost engagement.",
        image:"blogcard02.png" ,
        link:"https://www.wscubetech.com/blog/digital-marketing-future/" 
        },

    {
      title:"Design That Defines Your Brand",
      category:"Design",
      excerpt:"Learn how we craft visually stunning, user-friendly designs that resonate with your audience and set your brand apart in the digital world.",
      image:"/blogcard03.png",
      link:"https://webflow.com/blog/design-brand" ,

         },

    {
      title:"Social Media Success Stories",
      category:"Social Media", 
      excerpt:"Read about our latest success stories in leveraging social media platforms to drive meaningful connections and measurable growth.",
      image:"/blogcard04.png", 
      link:"https://www.socialpilot.co/blog/social-media-case-study" ,

       },

       {
        title:"Why UX Matters: The Power of User-Centered Design" ,
         category:"Design",
        excerpt:"Dive into the importance of user experience and how our meticulous designs create seamless interactions for your customers.",
        image:"/blogcard05.png" ,
        link:"https://applaudo.com/en/insights/articles/designing-for-success-the-transformative-power-of-user-centered-design/" ,
         },
  ];
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page">

      <BlogCategoryFilter 
        categories={categories} 
        onCategorySelect={setSelectedCategory} 
      />
      {filteredPosts.map((post, index) => (
        <BlogPostCard 
          key={index} 
          title={post.title} 
          excerpt={post.excerpt} 
          image={post.image} 
          link={post.link} 
        />
      ))}
    </div>
  );
};

export default BlogPage;