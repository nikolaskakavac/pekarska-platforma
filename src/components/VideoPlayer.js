import React from 'react';
import './VideoPlayer.css';

function VideoPlayer({ video }) {
  return (
    <div className="video-player">
      <iframe
        width="100%"
        height="600"
        src={video.videoUrl}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="youtube-iframe"
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
