import React from "react";

import { Chip } from "@mui/material";

import { BsPeopleFill } from "react-icons/bs";

import "./recipeChoiceCard.css"

const RecipeChoiceServings = ({servings}) => {
  return(
    <div className="recipe-dialog-details">
      <BsPeopleFill className="recipe-dialog-icon" />
      <Chip label={`Serves ${servings}`} />
    </div>
  )
}

export default RecipeChoiceServings