import React from 'react';
import Dp from '../assets/Images/Dp.jpg';
import { FaLaptopCode, FaChartLine, FaCogs, FaTrophy, FaCheckCircle } from 'react-icons/fa'; // Added FaCheckCircle

const MoreAbout = () => {
  return (
    <section className="container my-5">
      {/* Hero Section */}
      <div className="row align-items-center justify-content-center mb-5">
        <div className="col-lg-4 text-center mb-4 mb-lg-0">
          <img
            src={Dp}
            alt="Anosike Somadina Augustine"
            className="rounded-circle shadow-lg"
            style={{ width: '250px', height: '250px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-lg-6">
          <h1 className="fw-bold text-dark">More About Me</h1>
          <p className="lead">
            I am a passionate Full-Stack Developer specializing in building modern web applications. With expertise in React, Django, and JavaScript, I create scalable and efficient solutions.
          </p>
          <p className="mb-3">
            I love problem-solving and designing user-friendly interfaces that enhance user experience. My journey in tech has allowed me to work on multiple projects, improving businesses and personal brands.
          </p>
          <a href="/Anosike Somadina CV.pdf" download className="btn btn-primary mt-3">
            Download Resume
          </a>
        </div>
      </div>

      {/* My Expertise Section */}
      <div className="row align-items-center justify-content-between mt-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h2 className="fw-bold text-dark mb-4">My Expertise</h2>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <FaLaptopCode className="me-3 text-info" style={{ fontSize: '1.8rem' }} />
              <div>
                <strong>Frontend Development:</strong>
                <p>Crafting responsive and dynamic user interfaces using React, Bootstrap, and Tailwind CSS, ensuring a smooth user experience across all devices.</p>
              </div>
            </li>
            <li className="d-flex align-items-center mb-3">
              <FaCogs className="me-3 text-info" style={{ fontSize: '1.8rem' }} />
              <div>
                <strong>Backend Development:</strong>
                <p>Building robust and secure backend solutions with Django, Python, and REST APIs, focusing on scalability, security, and performance.</p>
              </div>
            </li>
            <li className="d-flex align-items-center mb-3">
              <FaLaptopCode className="me-3 text-info" style={{ fontSize: '1.8rem' }} />
              <div>
                <strong>Full-Stack Integration:</strong>
                <p>Developing end-to-end web solutions, ensuring seamless functionality across both frontend and backend components to deliver cohesive applications.</p>
              </div>
            </li>
            <li className="d-flex align-items-center mb-3">
              <FaChartLine className="me-3 text-info" style={{ fontSize: '1.8rem' }} />
              <div>
                <strong>Optimization & Performance:</strong>
                <p>Improving web applications for efficiency, speed, and scalability, ensuring optimal performance even under heavy traffic conditions.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-5 text-center">
          <img
            src={Dp}
            alt="Anosike Somadina Augustine"
            className="rounded shadow-lg"
            style={{ width: '280px', height: '280px', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Professional Experience Section */}
      <div className="mt-5">
        <h2 className="fw-bold text-center text-dark mb-4">Professional Experience</h2>
        <ul className="list-unstyled text-center">
          <li><FaTrophy className="me-2 text-warning" /> Worked on multi-vendor eCommerce platforms, enhancing user experience and security.</li>
          <li><FaTrophy className="me-2 text-warning" /> Developed and maintained enterprise-level web applications, ensuring high performance and reliability.</li>
          <li><FaTrophy className="me-2 text-warning" /> Implemented data analytics dashboards, helping businesses make data-driven decisions.</li>
        </ul>
      </div>

      {/* Why Work With Me? Section */}
      <div className="mt-5">
        <h2 className="fw-bold text-center text-dark mb-4">Why Work With Me?</h2>
        <div className="row text-center">
          <div className="col-md-4 d-flex justify-content-center align-items-stretch">
            <div className="p-3 shadow-sm rounded bg-light w-100">
              <FaCheckCircle className="me-2 text-success" />
              <strong>Problem-Solver:</strong> Passionate about tackling complex challenges with innovative solutions.
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-stretch">
            <div className="p-3 shadow-sm rounded bg-light w-100">
              <FaCheckCircle className="me-2 text-success" />
              <strong>Detail-Oriented:</strong> Focused on writing clean, maintainable, and efficient code.
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-stretch">
            <div className="p-3 shadow-sm rounded bg-light w-100">
              <FaCheckCircle className="me-2 text-success" />
              <strong>Fast Learner:</strong> Constantly exploring new technologies to stay ahead in the industry.
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-5">
        <h3>Let's Work Together</h3>
        <p>I'm open to collaborations and freelance projects.</p>
        <a href="/contact" className="btn btn-dark">Contact Me</a>
      </div>
    </section>
  );
};

export default MoreAbout;
