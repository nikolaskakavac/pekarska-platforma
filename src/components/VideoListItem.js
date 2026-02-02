// src/components/VideoListItem.js
import React from 'react';
import './VideoListItem.css';

function VideoListItem({ course, isActive, isLocked, onClick }) {
  const handleClick = () => {
    if (isLocked) return;  // zaštita i u samoj komponenti
    onClick && onClick();
  };

  return (
    <div 
      className={`video-list-item ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
      onClick={handleClick}
    >
      <div className="thumbnail">
        <span className="play-icon">{isLocked ? '🔒' : '▶️'}</span>
      </div>
      
      <div className="item-info">
        <h4>{course.title}</h4>
        <div className="meta">
          <span className="duration">{course.duration}</span>
          {isLocked && <span className="locked-label">Samo za pretplatu</span>}
        </div>
      </div>
    </div>
  );
}

export default VideoListItem;
