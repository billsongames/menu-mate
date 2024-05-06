import React from "react";

import { Chip } from "@mui/material";

import { IoIosTimer } from "react-icons/io";

import "./recipeChoiceCard.css"

const RecipeChoiceCalorieCount = ({calorieCount}) => {
  return(
    <div className="recipe-dialog-details">
      {calorieCount} calories per serving
    </div>
  )
}

export default RecipeChoiceCalorieCount