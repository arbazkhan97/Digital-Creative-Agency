import React from "react";
import "./TeamSection.css";

const teamMembers = [
  {
    name: "Arbaz Khan",
    role: "Web Developer",
    image: "/arbaz_khan.jpg", // Placeholder image URL
    
    linkedin: "https://www.linkedin.com/in/arbaz-khan%F0%9F%9A%80-68b732259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    github: "https://github.com/arbazkhan97",
  },
  {
    name: "Jainul Mirza",
    role: "UI/UX Designer",
    image: "/jainul_mirza.jpg", // Placeholder image URL
    
    linkedin: "#",
    github: "#",
  },
  {
    name: "Anuj kumar",
    role: "Backend Developer",
    image: "/anuj.jpg",
   
    linkedin: "#",
    github: "#",
  },

  {
    name: "Aman Chaurasia",
    role: "SEO expert",
    image: "/aman.jpg",
    
    linkedin: "#",
    github: "#",
  },

  {
    name: "ankit kumar",
    role: "Marketing Specialist",
    image: "/ankit.png",
    
    linkedin: "#",
    github: "#",
  },

  {
    name: "Anshika bajpai",
    role: "Content Writer",
    image: "annu.jpg",
    
    linkedin: "#",
    github: "#",
  },

  {
    name: "Abhishek",
    role: "Data Analyst",
    image: "abhishek.png",
    
    linkedin: "#",
    github: "#",
  },

];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} className="team-image" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="social-links">
                
                <a href={member.linkedin} className="social-link">LinkedIn</a>
                <a href={member.github} className="social-link">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;