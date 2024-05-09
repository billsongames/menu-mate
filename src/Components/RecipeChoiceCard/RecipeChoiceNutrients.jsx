import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const RecipeChoiceNutrients = ( {nutrients} ) => {

  const nutrient_info = Object.entries(nutrients).forEach(([key, value]) => {
    <div className="recipe-dialog-info-row">
      {value}
    </div>
  })


  return(
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Nutrients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {nutrient_info}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default RecipeChoiceNutrients