import React from "react";

import Typography from '@mui/material/Typography';

const RecipeChoiceIngredients = ({ ingredients }) => {
  return (
    <div className="recipe-choice-ingredient-nutrients-container">
      <Typography>Ingredients</Typography>
      {ingredients.map((ingredient) => (
        <div key={ingredient} className="recipe-choice-ingredient-row">
          {ingredient}
        </div>
      ))}
    </div>
  )
}

export default RecipeChoiceIngredients