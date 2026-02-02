import React from 'react';
import './ProtectedRecipe.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function ProtectedRecipe({ recipe, children }) {
  const { user, subscriptionLevel } = useAuth();
  const navigate = useNavigate();

  const canAccess = user && (subscriptionLevel === 'basic' || subscriptionLevel === 'premium');

  if (!canAccess) {
    return (
      <div className="recipe-locked">
        <div className="lock-icon">🔒</div>
        <h3>Recepti su dostupni samo sa pretplatom</h3>
        <p>Da biste pristupili receptima, potrebna vam je Basic ili Premium pretplata.</p>
        <button 
          className="subscribe-btn"
          onClick={() => navigate('/contact')}
        >
          Kontaktirajte nas za pretplatu
        </button>
      </div>
    );
  }

  return <>{children}</>;
}

export default ProtectedRecipe;
