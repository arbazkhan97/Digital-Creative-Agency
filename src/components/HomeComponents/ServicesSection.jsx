// Services.js
import React from "react";
import "./ServicesSection.css"; // Import the individual CSS file for styles.

function ServicesSection() {
  const services = [
    {
      icon: "🚀",
      title: "Launch Business",
      description: "Start your business journey with us!",
    },
    {
      icon: "💻",
      title: "Online Support Team",
      description: "24/7 dedicated support for your needs.",
    },
    {
      icon: "⏳",
      title: "Time Management",
      description: "Optimize your time and productivity.",
    },
    {
      icon: "💡",
      title: "Innovative Solutions",
      description: "Unlock creative strategies to drive your business forward!",
    },
    {
      icon: "📈",
      title: "Growth & Success",
      description: "Accelerate your business potential with expert guidance!",
    },
    {
      icon: "🔧",
      title: "Customized Solutions",
      description: "Tailored strategies to fit your unique business needs!",
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Expand your business beyond borders with confidence!",
    },

    {
      icon: "🌐",
      title: "Web Development",
      description: "High-quality and responsive web solutions tailored to your needs.",
      
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android platforms.",
      
    },
    {
     
      icon: "📈",
      title: "Digital Marketing",
      description: "Boost your online presence with targeted marketing strategies.",
      
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Intuitive and user-friendly designs to enhance user experiences.",
      
    },
  

  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <span className="icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;