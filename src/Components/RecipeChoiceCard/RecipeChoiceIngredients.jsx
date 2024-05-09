import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const RecipeChoiceIngredients = ( {ingredients} ) => {
  return(
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {ingredients.map((ingredient) => (
          <div className="recipe-dialog-info-row">
            {ingredient}
          </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default RecipeChoiceIngredients