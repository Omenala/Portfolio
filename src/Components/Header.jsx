import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white p-3" style={{ borderBottom: '2px solid #f8f9fa' }}>
      <nav className=" container navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Portfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" style={{ marginLeft: '20px' }}>
              <Link to="/" className="nav-link text-white" style={{ fontSize: '1.1rem' }}>About</Link>
            </li>
            <li className="nav-item" style={{ marginLeft: '20px' }}>
              <Link to="/skills" className="nav-link text-white" style={{ fontSize: '1.1rem' }}>Skills</Link>
            </li>
            <li className="nav-item" style={{ marginLeft: '20px' }}>
              <Link to="/projects" className="nav-link text-white" style={{ fontSize: '1.1rem' }}>Projects</Link>
            </li>
            <li className="nav-item" style={{ marginLeft: '20px' }}>
              <Link to="/contact" className="nav-link text-white" style={{ fontSize: '1.1rem' }}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;