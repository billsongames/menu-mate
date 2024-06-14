import React from "react";

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const RecipeChoiceNutrients = ({ nutrients }) => {

  const list_jsx = []

  for (const [key, value] of Object.entries(nutrients)) {
    list_jsx.push(
      <React.Fragment key={value.label}>
        <div className="recipe-choice-nutrient-row">
          <div>
            {value.label}
          </div>
          <div>
            {`${Math.round(value.quantity)}${value.unit}`}
          </div>
        </div>
        <Divider />



      </React.Fragment>
    )
  }




  return (
    <div className="recipe-choice-ingredient-nutrients-container">
      <Typography variant="h6" fontWeight="bold" >Nutrients</Typography>
      {list_jsx}
    </div>
  )
}

export default RecipeChoiceNutrients