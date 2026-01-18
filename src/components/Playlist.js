import React from 'react';
import './Playlist.css';
import VideoListItem from './VideoListItem';

function Playlist({ courses, currentVideo, onVideoSelect }) {
  return (
    <div className="playlist">
      <h3>📚 Lista lekcija</h3>
      <div className="playlist-items">
        {courses.map((course) => (
          <VideoListItem
            key={course.id}
            course={course}
            isActive={currentVideo.id === course.id}
            onClick={() => onVideoSelect(course)}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
