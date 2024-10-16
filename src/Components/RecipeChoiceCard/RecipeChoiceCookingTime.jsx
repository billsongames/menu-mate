import React from "react";

import { Chip } from "@mui/material";

import TimerIcon from '@mui/icons-material/Timer';

import "./recipeChoiceCard.css"

const RecipeChoiceCookingTime = ({ time }) => {
  return (
    <div className="recipe-dialog-info-row">
      <TimerIcon className="recipe-dialog-icon" />
      {`${time} minutes`}
    </div>
  )
}

export default RecipeChoiceCookingTime