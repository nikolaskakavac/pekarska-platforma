import React from 'react';
import './VideoPlayer.css';
import { useAuth } from '../context/AuthContext';

function VideoPlayer({ video }) {
  const { subscriptionLevel, user } = useAuth();
  
  // Samo Basic i Premium mogu da gledaju videoe
  const canWatchVideo = user && (subscriptionLevel === 'basic' || subscriptionLevel === 'premium');

  if (!canWatchVideo) {
    return (
      <div className="video-player video-locked">
        <div className="lock-overlay">
          <div className="lock-content">
            <div className="lock-icon">🔒</div>
            <h3>Videi su dostupni samo sa pretplatom</h3>
            <p>Nabavite Basic ili Premium pretplatu da gledate sve video lekcije</p>
            <button className="unlock-btn" onClick={() => window.scrollTo(0, 0)}>
              Kupi pretplatu
            </button>
          </div>
        </div>
      </div>
    );
  }

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
