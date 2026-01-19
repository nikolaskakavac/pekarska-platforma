import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import CourseHeader from './components/CourseHeader';
import Features from './components/Features';
import Pricing from './components/Pricing';
import VideoPlayer from './components/VideoPlayer';
import Playlist from './components/Playlist';
import RecipeDisplay from './components/RecipeDisplay';
import ConversionTools from './components/ConversionTools';
import Footer from './components/Footer';
import { courses } from './data/courses';
import { recipes } from './data/recipes';
import { subscriptionPlans } from './data/subscriptions';

function App() {
  const [currentVideo, setCurrentVideo] = useState(courses[0]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [currentPlan, setCurrentPlan] = useState('free');
  const mainContentRef = useRef(null);

  // Učitaj pretplatu iz localStorage
  useEffect(() => {
    const savedPlan = localStorage.getItem('userSubscription');
    if (savedPlan) {
      setCurrentPlan(savedPlan);
    }
  }, []);

  // Spremi pretplatu u localStorage
  const handlePlanSelect = (planId) => {
    setCurrentPlan(planId);
    localStorage.setItem('userSubscription', planId);
  };

  const handleVideoSelect = (course) => {
    setCurrentVideo(course);
    setShowRecipe(false);
  };

  const handleScrollToContent = () => {
    mainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Pronađi dostupne kurseve na osnovu pretplate
  const currentPlanData = subscriptionPlans.find(p => p.id === currentPlan);
  const accessibleCourses = courses.filter(c => currentPlanData?.accessCourses.includes(c.id));
  
  // Ako trenutni video nije dostupan, prebaci na prvi dostupan
  if (!accessibleCourses.find(c => c.id === currentVideo.id)) {
    setCurrentVideo(accessibleCourses[0] || courses[0]);
  }

  const currentRecipe = recipes.find(r => r.courseId === currentVideo.id);

  return (
    <div className="App">
      <CourseHeader onGetStarted={handleScrollToContent} />
      <Features />
      <Pricing currentPlan={currentPlan} onPlanSelect={handlePlanSelect} />
      
      <div className="main-content" ref={mainContentRef}>
        <div className="video-section">
          {accessibleCourses.length === 0 ? (
            <div className="no-access">
              <h3>Nema pristupa kursevima</h3>
              <p>Odaberite pretplatu da bi ste pristupili kursevima</p>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>

        <Playlist 
          courses={accessibleCourses}
          currentVideo={currentVideo}
          onVideoSelect={handleVideoSelect}
          currentPlan={currentPlan}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
