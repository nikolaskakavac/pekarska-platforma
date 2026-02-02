import React, { useState } from 'react';
import './ContactPage.css';
import SubscriptionPlans from '../components/SubscriptionPlans';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subscription: 'basic',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulacija slanja forme
    console.log('Podaci forme:', formData);
    setSubmitted(true);
    
    // Reset nakon 3 sekunde
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subscription: 'basic',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>📞 Kontaktirajte nas</h1>
        <p>Zainteresovani ste za pretplatu? Popunite formu i kontaktiraćemo vas u najkraćem roku!</p>
      </div>

      <SubscriptionPlans />

      <div className="contact-content">
        <div className="contact-info">
          <h2>Informacije</h2>
          <div className="info-item">
            <span className="icon">📧</span>
            <div>
              <h4>Email</h4>
              <p>info@pekarske-kurseve.rs</p>
            </div>
          </div>
          
          <div className="info-item">
            <span className="icon">📱</span>
            <div>
              <h4>Telefon</h4>
              <p>+381 64 123 4567</p>
            </div>
          </div>
          
          <div className="info-item">
            <span className="icon">🏢</span>
            <div>
              <h4>Adresa</h4>
              <p>Kneza Miloša 15, Beograd</p>
            </div>
          </div>
          
          <div className="info-item">
            <span className="icon">🕒</span>
            <div>
              <h4>Radno vreme</h4>
              <p>Ponedeljak - Petak: 09:00 - 17:00</p>
              <p>Subota: 10:00 - 14:00</p>
            </div>
          </div>

          <div className="payment-methods">
            <h4>Načini plaćanja</h4>
            <div className="payment-icons">
              <span>💳 Kartica</span>
              <span>🏦 Uplata</span>
              <span>💰 Keš</span>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Pošaljite upit</h2>
          
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Hvala na kontaktu!</h3>
              <p>Vaš upit je primljen. Kontaktiraćemo vas u roku od 24 sata.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ime i prezime *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Unesite vaše ime i prezime"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="vas.email@primer.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefon *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+381 64 123 4567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subscription">Tip pretplate *</label>
                <select
                  id="subscription"
                  name="subscription"
                  value={formData.subscription}
                  onChange={handleChange}
                  required
                >
                  <option value="basic">Basic - 500 RSD/mesec</option>
                  <option value="premium">Premium - 1000 RSD/mesec</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Poruka (opciono)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Dodatne napomene ili pitanja..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Pošalji upit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
