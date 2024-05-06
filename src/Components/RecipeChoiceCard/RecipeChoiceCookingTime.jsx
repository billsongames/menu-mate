import React from "react";

import { Chip } from "@mui/material";

import { IoIosTimer } from "react-icons/io";

import "./recipeChoiceCard.css"

const RecipeChoiceCookingTime = ({time}) => {
  return(
    <div className="recipe-dialog-details">
      <IoIosTimer className="recipe-dialog-icon" />
      <Chip label={`Cooking time : ${time} minutes`} />
    </div>
  )
}

export default RecipeChoiceCookingTime