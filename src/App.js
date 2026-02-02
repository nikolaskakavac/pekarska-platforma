import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CourseHeader from './components/CourseHeader';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import { useAuth } from './context/AuthContext';

function App() {
  const { subscriptionLevel } = useAuth();

  return (
    <Router>
      <div className="App">
        <CourseHeader />
        
        <nav className="main-nav">
          <Link to="/" className="nav-link">🏠 Početna</Link>
          <Link to="/blog" className="nav-link">
            📝 Blog {subscriptionLevel !== 'premium' && <span className="premium-badge">Premium</span>}
          </Link>
          <Link to="/contact" className="nav-link">📞 Kontakt</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <footer className="app-footer">
          <div className="footer-content">
            <p>© 2026 Video Platforma za Pekare i Poslastičare. Sva prava zadržana.</p>
            <div className="footer-links">
              <a href="#privacy">Politika privatnosti</a>
              <a href="#terms">Uslovi korišćenja</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
