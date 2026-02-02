// src/components/Playlist.js
import React from 'react';
import './Playlist.css';
import VideoListItem from './VideoListItem';
import { useAuth } from '../context/AuthContext';

function Playlist({ courses, currentVideo, onVideoSelect }) {
  const { subscriptionLevel } = useAuth();

  // pravilo: guest vidi sve, ali samo prva lekcija je otključana
  const isCourseLocked = (course) => {
    if (subscriptionLevel === 'basic' || subscriptionLevel === 'premium') {
      return false; // sve otključano za pretplaćene
    }
    // guest: dozvoli samo prvu lekciju (id === 1)
    return course.id !== 1;
  };

  return (
    <div className="playlist">
      <h3>📚 Lista lekcija</h3>
      <div className="playlist-items">
        {courses.map((course) => (
          <VideoListItem
            key={course.id}
            course={course}
            isActive={currentVideo.id === course.id}
            isLocked={isCourseLocked(course)}
            onClick={() => {
              if (!isCourseLocked(course)) {
                onVideoSelect(course);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
