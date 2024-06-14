import React from "react";

import GppGoodIcon from '@mui/icons-material/GppGood';
import { Chip } from "@mui/material";

import "./recipeChoiceCard.css";

const RecipeChoiceLessThan600Cal = ({ calorieCount }) => {
  const calories = Number(calorieCount)

  if (calories < 600) {
    return (
      <div className="recipe-dialog-info-row">
        <GppGoodIcon className="recipe-dialog-icon" />
        Less than 600 calories
      </div>
    )
  } else {
    return (
      <div className="recipe-dialog-info-row">
      </div>
    )
  }
}

export default RecipeChoiceLessThan600Cal