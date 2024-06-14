import React from "react";

import { Chip } from "@mui/material";

import PeopleIcon from '@mui/icons-material/People';

import "./recipeChoiceCard.css"

const RecipeChoiceServings = ({ servings }) => {
  return (
    <div className="recipe-dialog-info-row">
      <PeopleIcon className="recipe-dialog-icon" />
      {`Serves ${servings}`}
    </div>
  )
}

export default RecipeChoiceServings