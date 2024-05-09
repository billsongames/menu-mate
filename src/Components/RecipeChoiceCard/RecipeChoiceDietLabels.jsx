import React from "react";

import { Chip } from "@mui/material";

import RestaurantIcon from '@mui/icons-material/Restaurant';

import "./recipeChoiceCard.css"

const RecipeChoiceDietLabels = ({dietLabels}) => {
  if (dietLabels.length > 0) {
    return(
      <div className="recipe-dialog-info-row">
        <RestaurantIcon className="recipe-dialog-icon" />
        {dietLabels.map((label) => (
          <Chip key={label} label={label} sx={{marginRight: "0.5em"}} />
          ))}
    </div>
    )
  } else {
    return(
      <></>     
    )
  }
}

export default RecipeChoiceDietLabels