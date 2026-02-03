import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import CourseHeader from './components/CourseHeader';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import { useAuth } from './context/AuthContext';

function AppContent() {
  const { subscriptionLevel } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <CourseHeader onGetStarted={handleGetStarted} />
      
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
        <Route path="*" element={<Navigate to="/" replace />} />
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
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
