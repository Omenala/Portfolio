import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Dp from '../assets/Images/Dp.jpg';

const About = () => {
  return (
    <section id="about" className="d-flex flex-column align-items-center p-5 bg-light">
      <img
        src={Dp}
        alt="Profile"
        className="rounded-circle mb-4 shadow-lg"
        style={{
          width: '230px',
          height: '230px',
          objectFit: 'cover',
          transform: 'rotate(30deg)',
          transition: 'transform 0.3s ease-in-out',
          border: '5px solid white',
        }}
      />
      <div className="text-center">
        <h2>About Me</h2>
        <p>Hello, I'm Anosike Somadina Augustine, a passionate web developer with expertise in React, Django, and more.</p>
        <p>I enjoy creating clean, efficient, and beautiful websites and applications.</p>

        {/* More About Button */}
        <Link to="/more-about" className="btn btn-primary mt-3">
          More About Me
        </Link>
      </div>
    </section>
  );
};

export default About;
