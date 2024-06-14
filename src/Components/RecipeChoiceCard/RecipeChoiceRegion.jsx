import React from "react";

import { Chip } from "@mui/material";

import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';

import "./recipeChoiceCard.css"

const RecipeChoiceRegion = ({ region }) => {
  return (
    <div className="recipe-dialog-info-row">
      <PublicIcon className="recipe-dialog-icon" />
      {region}
    </div>
  )
}

export default RecipeChoiceRegion