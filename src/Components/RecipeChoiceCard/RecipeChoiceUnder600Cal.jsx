import React from "react";

import { Chip } from "@mui/material";

import { IoIosTimer } from "react-icons/io";

import "./recipeChoiceCard.css"

const RecipeChoiceUnder600Cal = ({calorieCount}) => {
  const calories = Number(calorieCount)

  if (calories < 600) {
    return(
      <div className="recipe-dialog-details">
        Less than 600 calories
      </div>
    )
  } else {
    return(
      <div className="recipe-dialog-details">
        Lard
      </div>
    )
  }
}

export default RecipeChoiceUnder600Cal