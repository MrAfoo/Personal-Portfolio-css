import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css';

function App() {
    return (
        <Router>
            <header className="navbar">
                <div className="navbar-title">Syed Affan Ali's Resume</div>
                <nav className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>
            </header>
            
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            
            <footer className="footer">
                <p>&copy; 2024 Syed Affan Ali. All Rights Reserved.</p>
                <div className="footer-links">
                    <a href="https://github.com/MrAfoo?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/affoo-bhai-37b929300/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://vercel.com/syed-affan-alis-projects" target="_blank" rel="noopener noreferrer">Vercel</a>
                </div>
            </footer>
        </Router>
    );
}

export default App;
