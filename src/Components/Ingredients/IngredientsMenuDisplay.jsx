import React, { useContext, useState } from "react";

import { MenuChoicesContext } from "../../context/MenuChoicesContext";

import { Button } from "@mui/material";

import ClearIcon from '@mui/icons-material/Clear';

import defaultMenuChoiceImage from "../../assets/img/emptyMenuSlot.png"

import "./ingredients.css"




const IngredientsMenuDisplay = () => {

  const { menuChoices } = useContext(MenuChoicesContext)

  return (
    <div>
      {menuChoices
        ?
        <React.Fragment>
          <div className="ingredients-menuChoices-container">
            {menuChoices.map((choice, index) => (
              <div key={index} className="ingredients-menuChoices-slot">
                {choice.complete === true
                  ?
                  <img
                    src={choice.recipe.image}
                    title={choice.recipe.label}
                    data-recipelink={choice.recipe.uri}
                    data-completerecipe={JSON.stringify(choice.recipe)}
                  /*                   onClick={handleOpenRecipeCard} */
                  />
                  :
                  <img src={defaultMenuChoiceImage} title="Choose a recipe" />
                }
                <div className="ingredients-menuChoices-drawer-label">
                  {choice.recipe.label}
                </div>

              </div>
            ))}
            <div>
              <Button>Generate Shopping List</Button>
            </div>
          </div>

        </React.Fragment>
        :
        <></>
      }
    </div>
  )
}

export default IngredientsMenuDisplay