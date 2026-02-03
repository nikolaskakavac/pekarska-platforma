import React, { useState } from 'react';
import './HomePage.css';
import VideoPlayer from '../components/VideoPlayer';
import Playlist from '../components/Playlist';
import RecipeDisplay from '../components/RecipeDisplay';
import ConversionTools from '../components/ConversionTools';
import ProtectedRecipe from '../components/ProtectedRecipe';
import LoginModal from '../components/LoginModal';
import { courses } from '../data/courses';
import { recipes } from '../data/recipes';
import { useAuth } from '../context/AuthContext';

function HomePage() {
  const [currentVideo, setCurrentVideo] = useState(courses[0]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, login, logout, subscriptionLevel } = useAuth();

  const handleVideoSelect = (course) => {
    setCurrentVideo(course);
    setShowRecipe(false);
  };

  const handleLogin = (level) => {
    login(level);
  };

  const currentRecipe = recipes.find(r => r.courseId === currentVideo.id);

  return (
    <div className="home-page">
      <div className="user-info-bar">
        {user ? (
          <div className="user-status">
            <span className="status-badge">
              ✓ Pretplata: <strong>{subscriptionLevel.toUpperCase()}</strong>
            </span>
            <button className="logout-btn" onClick={logout}>
              Odjavi se
            </button>
          </div>
        ) : (
          <div className="guest-status">
            <span>👤 Gost korisnik</span>
            <button className="login-btn" onClick={() => setShowLoginModal(true)}>
              Kupi pretplatu
            </button>
          </div>
        )}
      </div>

      <div className="main-content">
        <div className="video-section">
          <VideoPlayer video={currentVideo} />
          
          <div className="video-info">
            <h2>{currentVideo.title}</h2>
            <p>{currentVideo.description}</p>
            <button 
              className="recipe-btn"
              onClick={() => setShowRecipe(!showRecipe)}
            >
              {showRecipe ? 'Sakrij recept' : 'Prikaži recept'}
            </button>
          </div>

          {showRecipe && currentRecipe && (
            <ProtectedRecipe recipe={currentRecipe}>
              <RecipeDisplay recipe={currentRecipe} />
            </ProtectedRecipe>
          )}
        </div>

        <div className="playlist-wrapper">
          <Playlist 
            courses={courses}
            currentVideo={currentVideo}
            onVideoSelect={handleVideoSelect}
          />
        </div>

        <div className="converter-wrapper">
          <ConversionTools />
        </div>
      </div>

      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default HomePage;
