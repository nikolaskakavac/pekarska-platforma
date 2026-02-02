import React, { useState } from 'react';
import './LoginModal.css';

function LoginModal({ isOpen, onClose, onLogin }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  if (!isOpen) return null;

  const handleLogin = (level) => {
    setSelectedPlan(level);
    setTimeout(() => {
      onLogin(level);
      onClose();
      setSelectedPlan(null);
    }, 300);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-header">
          <h2>🎓 Odaberite pretplatu</h2>
          <p>Pristupite svim video lekcijama, receptima i dodatnim sadržajima</p>
        </div>
        
        <div className="subscription-options">
          <div 
            className={`subscription-card basic ${selectedPlan === 'basic' ? 'selected' : ''}`} 
            onClick={() => handleLogin('basic')}
          >
            <div className="card-header">
              <h3>Basic</h3>
              <span className="price">500 RSD</span>
              <span className="period">/mesec</span>
            </div>
            
            <ul className="features-list">
              <li>
                <span className="check">✓</span>
                <span>Sve video lekcije</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>Pristup svim receptima</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>Konvertor mernih jedinica</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>Osnovna podrška</span>
              </li>
            </ul>
            
            <button className="select-btn">Odaberi</button>
          </div>
          
          <div 
            className={`subscription-card premium ${selectedPlan === 'premium' ? 'selected' : ''}`} 
            onClick={() => handleLogin('premium')}
          >
            <div className="popular-badge">Najpopularnije</div>
            
            <div className="card-header">
              <h3>Premium</h3>
              <span className="price">1000 RSD</span>
              <span className="period">/mesec</span>
            </div>
            
            <ul className="features-list">
              <li>
                <span className="check">✓</span>
                <span>Sve iz Basic paketa</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>Ekskluzivni kulinarski blog</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>Sertifikat završetka</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>Prioritetna podrška</span>
              </li>
            </ul>
            
            <button className="select-btn">Odaberi</button>
          </div>
        </div>
        
        <div className="modal-footer">
          <p className="footer-text">Bilo koji plan možete otkazati bez penala na Kontakt stranici</p>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
