import React, { useRef, useState } from 'react';
import './VideoPlayer.css';

function VideoPlayer({ video }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleProgress = () => {
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    setProgress((current / duration) * 100);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={video.videoUrl}
        onTimeUpdate={handleProgress}
        onClick={togglePlay}
        className="video-element"
      />
      
      <div className="video-controls">
        <button onClick={togglePlay} className="control-btn play-btn" title="Reproduciraj/Pauziruj">
          <span className="btn-icon">{isPlaying ? '⏸' : '▶'}</span>
        </button>
        
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="progress-bar"
          title="Napredak videa"
        />
        
        <div className="volume-control">
          <span className="volume-icon">🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-bar"
            title="Jačina zvuka"
          />
        </div>
        
        <button onClick={toggleFullscreen} className="control-btn fullscreen-btn" title="Prikazi na pun ekran">
          <span className="btn-icon">⛶</span>
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
