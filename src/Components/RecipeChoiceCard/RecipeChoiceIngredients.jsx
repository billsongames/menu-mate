import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const RecipeChoiceIngredients = ({ ingredients }) => {
  return (
    <div className="recipe-choice-ingredient-nutrients-container">
{/*       <Typography variant="h6" fontWeight="bold" >Ingredients</Typography>
      {ingredients.map((ingredient) => (
        <div key={ingredient} className="recipe-choice-ingredient-row">
          {ingredient}
        </div>
      ))} */}

      <Accordion slotProps={{ heading: { component: 'h6' } }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
        >
          <b>Ingredients</b>
        </AccordionSummary>
        <AccordionDetails>
          {ingredients.map((ingredient) => (
            <div key={ingredient} className="recipe-choice-ingredient-row">
              {ingredient}
            </div>
          ))}
        </AccordionDetails>
      </Accordion>



    </div>
  )
}

export default RecipeChoiceIngredients