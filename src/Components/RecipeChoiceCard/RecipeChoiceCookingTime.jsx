import React from "react";

import { Chip } from "@mui/material";

import TimerIcon from '@mui/icons-material/Timer';

import "./recipeChoiceCard.css"

const RecipeChoiceCookingTime = ({time}) => {
  return(
    <div className="recipe-dialog-details">
      <TimerIcon className="recipe-dialog-icon" />
      <Chip label={`${time} minutes`} />
    </div>
  )
}

export default RecipeChoiceCookingTime