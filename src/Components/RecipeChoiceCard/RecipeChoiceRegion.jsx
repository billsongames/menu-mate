import React from "react";

import { Chip } from "@mui/material";

import { FaGlobe } from "react-icons/fa6";

import "./recipeChoiceCard.css"

const RecipeChoiceRegion = ({region}) => {
  return(
    <div className="recipe-dialog-details">
      <FaGlobe className="recipe-dialog-icon" />
      <Chip label={region} />
    </div>
  )
}

export default RecipeChoiceRegion