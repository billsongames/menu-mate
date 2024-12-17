import React, { useContext, useEffect } from "react";

import { DisplayModeContext } from "../../context/DisplayModeContext"
import { MenuChoicesContext } from "../../context/MenuChoicesContext";

import MenuChoices from "../MenuChoices/MenuChoices";
import IngredientsMenuDisplay from "./IngredientsMenuDisplay";
import IngredientsShoppingList from "./IngredientsShoppingList";

import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const IngredientsSummaryContainer = () => {

  const navigate = useNavigate()

  const { displayMode, toggleDisplayMode } = useContext(DisplayModeContext)

  useEffect(() => {
    toggleDisplayMode("ingredients")
  }, [])

  const handleBackToRecipesClick = () => {
    toggleDisplayMode("recipes")
    navigate("/recipes")
  }




  return (
    <React.Fragment>
      <div className="ingredients-summary">
        <Button onClick={handleBackToRecipesClick}>BACK TO RECIPES</Button>
      </div>
      <div className="ingredients-summary-container">
        {/*         <IngredientsMenuDisplay /> */}
        <IngredientsShoppingList />

      </div>








    </React.Fragment>
  )
}

export default IngredientsSummaryContainer