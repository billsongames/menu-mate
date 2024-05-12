import React from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const RecipeChoiceNutrients = ( {nutrients} ) => {

  const list_jsx =[]

  for (const [key, value] of Object.entries(nutrients)) {
    list_jsx.push(
      <React.Fragment key = {value.label}>
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




  return(
    <div className="recipe-choice-ingredient-nutrients-container">
      <Typography>Nutrients</Typography>
      {list_jsx}
    </div>
  )
}

export default RecipeChoiceNutrients