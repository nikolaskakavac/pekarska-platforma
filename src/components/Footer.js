import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>O Platformi</h3>
          <p>Naučite profesionalno pekarstvo sa našim detaljnim video kursevima. Od osnovnih tehnika do naprednih tehnika dekoracije.</p>
          <div className="social-links">
            <a href="https://facebook.com" className="social-icon" title="Facebook" target="_blank" rel="noopener noreferrer">f</a>
            <a href="https://instagram.com" className="social-icon" title="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
            <a href="https://youtube.com" className="social-icon" title="YouTube" target="_blank" rel="noopener noreferrer">▶</a>
            <a href="https://linkedin.com" className="social-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Kursevi</h3>
          <ul className="footer-links">
            <li><a href="#video-1">Osnove Mesenja Testa</a></li>
            <li><a href="#video-2">Kvasac i Fermentacija</a></li>
            <li><a href="#video-3">Oblikovanje Hleba</a></li>
            <li><a href="#video-4">Pečenje i Temperatura</a></li>
            <li><a href="#video-5">Kolači i Dekoracija</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Ressursi</h3>
          <ul className="footer-links">
            <li><a href="#recipes">Recepati</a></li>
            <li><a href="#converters">Konvertori Mere</a></li>
            <li><a href="#tips">Saveti i Trikovi</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Kontakt</h3>
          <ul className="contact-info">
            <li><span className="icon">📧</span> <a href="mailto:info@pekarskekurseve.com">info@pekarskekurseve.com</a></li>
            <li><span className="icon">📱</span> <a href="tel:+381234567890">+381 23 456 7890</a></li>
            <li><span className="icon">📍</span> <span>Beograd, Srbija</span></li>
            <li><span className="icon">🕐</span> <span>Pon-Pet: 09:00 - 18:00</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="footer-credit">
          <p>&copy; {currentYear} Pekarske Kurseve Platforma. Sva prava rezervisana.</p>
          <div className="footer-links-bottom">
            <a href="#privacy">Privatnost</a>
            <a href="#terms">Uslovi Korišćenja</a>
            <a href="#cookies">Kolačići</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
