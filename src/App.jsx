import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MoreAbout from './Components/MoreAbout';

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/more-about" element={<MoreAbout />} />
          {/* Redirect unknown routes to Home (/) */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
        </div>
        
    </Router>
  );
};

export default App;
