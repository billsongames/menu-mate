import React from "react";

import { Chip } from "@mui/material";

import LanguageIcon from '@mui/icons-material/Language';

import "./recipeChoiceCard.css"

const RecipeChoiceRegion = ({ region }) => {
  return (
    <div className="recipe-dialog-info-row">
      <LanguageIcon className="recipe-dialog-icon" />
      <Chip label={region} />
    </div>
  )
}

export default RecipeChoiceRegion