import React, { useState, useRef } from 'react';
import './App.css';
import CourseHeader from './components/CourseHeader';
import Features from './components/Features';
import VideoPlayer from './components/VideoPlayer';
import Playlist from './components/Playlist';
import RecipeDisplay from './components/RecipeDisplay';
import ConversionTools from './components/ConversionTools';
import Footer from './components/Footer';
import { courses } from './data/courses';
import { recipes } from './data/recipes';

function App() {
  const [currentVideo, setCurrentVideo] = useState(courses[0]);
  const [showRecipe, setShowRecipe] = useState(false);
  const mainContentRef = useRef(null);

  const handleVideoSelect = (course) => {
    setCurrentVideo(course);
    setShowRecipe(false);
  };

  const handleScrollToContent = () => {
    mainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentRecipe = recipes.find(r => r.courseId === currentVideo.id);

  return (
    <div className="App">
      <CourseHeader onGetStarted={handleScrollToContent} />
      <Features />
      
      <div className="main-content" ref={mainContentRef}>
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
            <RecipeDisplay recipe={currentRecipe} />
          )}

          <ConversionTools />
        </div>

        <Playlist 
          courses={courses}
          currentVideo={currentVideo}
          onVideoSelect={handleVideoSelect}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
