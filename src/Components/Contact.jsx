import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //const handleSubmit = (e) => {
    //e.preventDefault();
    //alert('Message sent!');
  //};

  return (
    <section id="contact" className="p-5 bg-white">
      <div className="container shadow-lg p-4 rounded">
        <h2 className="text-center mb-4">Get in Touch</h2>
        
        <p className="text-center text-muted mb-4">
          Have a project in mind or just want to say hello? Feel free to reach out, and I'll get back to you as soon as possible.  
        </p>

        <div className="row">
          {/* Contact Information */}
          <div className="col-md-5 text-center mb-4">
            <h5>Contact Information</h5>
            <p><strong>Email:</strong> anosikesomadina8@gmail.com</p>
            <p><strong>Phone:</strong> +234 814 297 1051</p>
            <p><strong>Location:</strong> Onitsha, Anambra State, Nigeria</p>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <form action="https://formspree.io/f/xbldongd" method="POST" className="p-4 bg-light rounded">
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                className="form-control mb-3" 
                placeholder="Your Name" 
                required 
              />
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                className="form-control mb-3" 
                placeholder="Your Email" 
                required 
              />
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleInputChange} 
                className="form-control mb-3" 
                placeholder="Your Message" 
                rows="4"
                required
              />
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
