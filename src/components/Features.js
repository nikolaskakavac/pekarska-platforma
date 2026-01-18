import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      icon: '🎥',
      title: 'Video Kursevi',
      description: 'Detaljni video tutorijali sa jasnim instrukcijama za sve nivoe iskustva'
    },
    {
      icon: '👨‍🍳',
      title: 'Stručni Saveti',
      description: 'Naučite od iskusnih pekara sa godinama praktičnog iskustva'
    },
    {
      icon: '📋',
      title: 'Recepti',
      description: 'Pristup na stotine dokazanih recepata sa tačnim merama'
    },
    {
      icon: '🔧',
      title: 'Konvertori',
      description: 'Lako konvertuj mere i količine između različitih sistema'
    },
    {
      icon: '🏆',
      title: 'Sertifikat',
      description: 'Završi kurseve i dobij digitalni sertifikat'
    },
    {
      icon: '👥',
      title: 'Zajednica',
      description: 'Pridruži se drugim pekarima i deli iskustva'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2>Šta Dobijate</h2>
          <p>Kompletan paket svega što vam treba za uspešno pekarstvo</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
