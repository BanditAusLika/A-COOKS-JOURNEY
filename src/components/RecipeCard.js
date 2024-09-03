import React, { useState } from 'react';
import './RecipeCard.css';

const RecipeCard = ({ image, title, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="recipe-card">
      <img src={image} alt={title} onClick={toggleVisibility} className="recipe-img" />
      {isVisible && (
        <div className="recipe-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
