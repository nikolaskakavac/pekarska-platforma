import React from 'react';
import './VideoListItem.css';

function VideoListItem({ course, isActive, onClick, currentPlan = 'free' }) {
  // Determine if course is accessible based on plan
  const planAccessMap = {
    'free': [1, 2],
    'premium': [1, 2, 3, 4],
    'pro': [1, 2, 3, 4, 5]
  };
  
  const isAccessible = planAccessMap[currentPlan]?.includes(course.id);
  const tierColors = {
    'free': 'gray',
    'premium': 'orange',
    'pro': 'purple'
  };
  
  return (
    <div 
      className={`video-list-item ${isActive ? 'active' : ''} tier-${tierColors[currentPlan]} ${!isAccessible ? 'locked' : ''}`}
      onClick={onClick}
    >
      <div className="thumbnail">
        <span className="play-icon">▶️</span>
        {!isAccessible && <span className="lock-icon">🔒</span>}
      </div>
      
      <div className="item-info">
        <h4>{course.title}</h4>
        <span className="duration">{course.duration}</span>
        {!isAccessible && <span className="locked-label">Zaključano</span>}
      </div>
    </div>
  );
}

export default VideoListItem;
