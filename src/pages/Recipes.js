import React, { useState, useEffect } from 'react';
import './Recipes.css';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [newRecipe, setNewRecipe] = useState({ title: '', ingredients: '', instructions: '' });
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/recipes')
            .then(response => response.json())
            .then(data => setRecipes(data));
    }, []);

    const handleAddRecipe = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/recipes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newRecipe)
            });

            if (response.ok) {
                const addedRecipe = await response.json();
                setFeedback('Recipe added successfully!');
                setNewRecipe({ title: '', ingredients: '', instructions: '' });
                setRecipes([...recipes, addedRecipe]);
            } else {
                setFeedback('Failed to add recipe.');
            }
        } catch (error) {
            setFeedback('Error adding recipe. Please try again later.');
        }
    };

    const handleDeleteRecipe = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/recipes/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setRecipes(recipes.filter(recipe => recipe._id !== id));
            } else {
                setFeedback('Failed to delete recipe.');
            }
        } catch (error) {
            setFeedback('Error deleting recipe.');
        }
    };

    return (
        <div className="recipes-page">
            <h1>Add a New Recipe</h1>
            <form onSubmit={handleAddRecipe}>
                <input
                    type="text"
                    placeholder="Recipe Title"
                    value={newRecipe.title}
                    onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Ingredients"
                    value={newRecipe.ingredients}
                    onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Instructions"
                    value={newRecipe.instructions}
                    onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
                    required
                />
                <button type="submit">Add Recipe</button>
            </form>
            {feedback && <p className="feedback">{feedback}</p>}
            <h2>Recipes</h2>
            <div className="recipes-list">
                {recipes.map(recipe => (
                    <div key={recipe._id} className="recipe-card">
                        <h3>{recipe.title}</h3>
                        <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                        <p><strong>Instructions:</strong> {recipe.instructions}</p>
                        <button
                            onClick={() => handleDeleteRecipe(recipe._id)}
                            className="delete-recipe-button"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recipes;
