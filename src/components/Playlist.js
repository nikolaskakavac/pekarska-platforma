import React from 'react';
import './Playlist.css';
import VideoListItem from './VideoListItem';
import { subscriptionPlans } from '../data/subscriptions';

function Playlist({ courses, currentVideo, onVideoSelect, currentPlan = 'free' }) {
  const planData = subscriptionPlans.find(p => p.id === currentPlan);
  
  return (
    <div className="playlist">
      <h3>📚 Lista lekcija</h3>
      <div className="playlist-info">
        <span className={`plan-badge plan-${currentPlan}`}>{planData?.name || 'Besplatno'}</span>
      </div>
      <div className="playlist-items">
        {courses.map((course) => (
          <VideoListItem
            key={course.id}
            course={course}
            isActive={currentVideo.id === course.id}
            onClick={() => onVideoSelect(course)}
            currentPlan={currentPlan}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
