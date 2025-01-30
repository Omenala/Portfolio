import React from 'react';
import eazziplug from "../assets/Images/eazziplug.jpg"
import shipping from "../assets/Images/shipping.jpg"
import recorda from "../assets/Images/recorda.jpg"
import novatech from "../assets/Images/novatech.jpg"
import eazzi from "../assets/Images/eazzi.jpg"

// Ensure your images are inside the 'public' folder and update paths accordingly.
const projectsData = [
  { 
    name: 'Project One', 
    description: 'A Multi-vendor Ecommerce Website.', 
    link: 'https://eazziplug.com.ng', // Fixed typo in link
    image: eazziplug // Place images inside the public folder
  },
  { 
    name: 'Project Two', 
    description: 'Shipping Company Website.', 
    link: 'https://shipping-services.netlify.app',
    image: shipping
  },
  { 
    name: 'Project Three', 
    description: 'A Product/Transaction Management Webapp.', 
    link: 'https://rekorda.netlify.app', // Fixed typo in link
    image: recorda
  },
  { 
    name: 'Project Four', 
    description: 'Novatech Business Website.', 
    link: 'https://dev-novatechnology.pantheonsite.io/', // Fixed typo in link
    image: novatech
  },
  { 
    name: 'Project Five', 
    description: 'Riders Eservice Websit.', 
    link: 'https://eazzi.com.ng', // Fixed typo in link
    image: eazzi
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-5 bg-light">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="container">
        <div className="row">
          {projectsData.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="card-img-top" 
                  style={{ height: "200px", objectFit: "cover", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", objectFit: 'cover' }} 
                  onError={(e) => e.target.src = '/assets/Images/placeholder.jpg'} // Fallback image
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
