import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
      <Accordion slotProps={{ heading: { component: 'h6' } }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
        >
          <b>Nutrients</b>
        </AccordionSummary>
        <AccordionDetails>
          {list_jsx}
        </AccordionDetails>
      </Accordion>


    </div>
  )
}

export default RecipeChoiceNutrients