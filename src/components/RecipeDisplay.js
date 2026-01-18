import React from 'react';
import './RecipeDisplay.css';

function RecipeDisplay({ recipe }) {
  return (
    <div className="recipe-display">
      <h3>📝 Recept: {recipe.name}</h3>
      
      <div className="recipe-content">
        <div className="ingredients">
          <h4>Sastojci:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.amount} {ingredient.unit} - {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="steps">
          <h4>Koraci pripreme:</h4>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDisplay;
