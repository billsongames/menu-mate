import React from "react";

import { Chip } from "@mui/material";

import BarChartIcon from '@mui/icons-material/BarChart';

import "./recipeChoiceCard.css"

const RecipeChoiceCalorieCount = ({ calorieCount }) => {
  return (
    <div className="recipe-dialog-info-row">
      <BarChartIcon className="recipe-dialog-icon" />
      {`${calorieCount} calories`}
    </div>
  )
}

export default RecipeChoiceCalorieCount