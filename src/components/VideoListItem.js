import React from 'react';
import './VideoListItem.css';

function VideoListItem({ course, isActive, onClick }) {
  return (
    <div 
      className={`video-list-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="thumbnail">
        <span className="play-icon">▶️</span>
      </div>
      
      <div className="item-info">
        <h4>{course.title}</h4>
        <span className="duration">{course.duration}</span>
      </div>
    </div>
  );
}

export default VideoListItem;
