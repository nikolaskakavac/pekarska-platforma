import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>📍 O Platformi</h3>
          <p>Pekarska Platforma je vaš najbolji izbor za učenje profesionalnog pekarstva. Učite od kuće u vlastitom tempu sa detaljnim video kursevima, receptima i savete od stručnjaka.</p>
          <div className="social-links">
            <a href="https://facebook.com" className="social-icon" title="Facebook" target="_blank" rel="noopener noreferrer">f</a>
            <a href="https://instagram.com" className="social-icon" title="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
            <a href="https://youtube.com" className="social-icon" title="YouTube" target="_blank" rel="noopener noreferrer">▶</a>
            <a href="https://linkedin.com" className="social-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>🎓 Kursevi</h3>
          <ul className="footer-links">
            <li><a href="#beli-hleb">Klasični Beli Hleb</a></li>
            <li><a href="#kiflice-sir">Kiflice sa Sirom</a></li>
            <li><a href="#pogaca">Srpska Pogača</a></li>
            <li><a href="#cokolada">Čokoladne Kiflice</a></li>
            <li><a href="#baklava">Medena Baklava</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>📚 Resursi</h3>
          <ul className="footer-links">
            <li><a href="#recepti">Recepti sa Detaljima</a></li>
            <li><a href="#konvertori">Konvertori Mernih Jedinica</a></li>
            <li><a href="#saveti">Saveti i Trikovi</a></li>
            <li><a href="#faq">Česta Pitanja</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>📞 Kontakt</h3>
          <ul className="contact-info">
            <li><span className="icon">📧</span> <a href="mailto:info@pekarskakursa.rs">info@pekarskakursa.rs</a></li>
            <li><span className="icon">📱</span> <a href="tel:+381641234567">+381 64 123 4567</a></li>
            <li><span className="icon">📍</span> <span>Beograd, Srbija</span></li>
            <li><span className="icon">🕐</span> <span>Pon-Pet: 09:00 - 18:00</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="footer-credit">
          <p>&copy; {currentYear} Pekarska Platforma. Sva prava rezervisana. | Postale lepše sa pečenjem 🍞</p>
          <div className="footer-links-bottom">
            <a href="#privatnost">Privatnost</a>
            <span className="separator">•</span>
            <a href="#uslovi">Uslovi Korišćenja</a>
            <span className="separator">•</span>
            <a href="#cookies">Kolačići</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
