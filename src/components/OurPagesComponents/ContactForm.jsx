import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (formData.name && formData.email && formData.message) {
      // Add new data to the submittedData array
      setSubmittedData([...submittedData, formData]);
      // Clear the form
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <section className="contact-section   ">
      <div className="container">
        <h2 className="section-title  mt-2 ">Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>

        <h3 className="submitted-data-title mt-3 mb-3 ">Submitted Data</h3>

        <div className="submitted-data">
          
          {submittedData.length > 0 ? (
            submittedData.map((data, index) => (
              <div key={index} className="data-entry">
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Message:</strong> {data.message}</p>
              </div>
            ))
          ) : (
            <p>No data submitted yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;