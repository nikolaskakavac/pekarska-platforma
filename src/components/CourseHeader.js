import React from 'react';
import './CourseHeader.css';

function CourseHeader({ onGetStarted }) {
  return (
    <header className="course-header">
      <div className="header-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="header-content">
        <div className="header-top">
          <div className="header-badge">Naučite Pekarstvo Online</div>
          <h1>Postanite Profesionalni Pekar</h1>
          <p>Detaljni video kursevi sa receptima i naprednim tehnikama za hleb, peciva i kolače</p>
          <button className="cta-button" onClick={onGetStarted}>Počni Besplatno</button>
        </div>
      </div>
    </header>
  );
}

export default CourseHeader;
