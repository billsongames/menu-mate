import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';

const RecipeChoiceNutrients = ( {nutrients} ) => {

  const accordion_jsx =[]

  for (const [key, value] of Object.entries(nutrients)) {
    accordion_jsx.push(
      <React.Fragment>
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
    <div className="recipe-choice-accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Nutrients</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {accordion_jsx}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default RecipeChoiceNutrients