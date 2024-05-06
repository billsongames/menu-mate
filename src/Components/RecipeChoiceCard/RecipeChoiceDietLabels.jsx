import React from "react";

import { Chip } from "@mui/material";

import { GiMeal } from "react-icons/gi";

import "./recipeChoiceCard.css"

const RecipeChoiceDietLabels = ({dietLabels}) => {
  return(
    <div className="recipe-dialog-details">
      <GiMeal className="recipe-dialog-icon" />
      {dietLabels.map((label) => (
        <Chip key={label} label={label} sx={{marginRight: "0.5em"}} />
        ))}
  </div>
  )
}

export default RecipeChoiceDietLabels