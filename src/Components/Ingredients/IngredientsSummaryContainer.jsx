import React, { useContext, useEffect } from "react";

import { DisplayModeContext } from "../../context/DisplayModeContext"
import { MenuChoicesContext } from "../../context/MenuChoicesContext";

import MenuChoices from "../MenuChoices/MenuChoices";
import IngredientsMenuDisplay from "./IngredientsMenuDisplay";
import IngredientsShoppingList from "./IngredientsShoppingList";

import {
  Button,
  Card
} from "@mui/material";

const IngredientsSummaryContainer = () => {
  const { displayMode, toggleDisplayMode } = useContext(DisplayModeContext)

  useEffect(() => {
    toggleDisplayMode("ingredients")
  }, [])




  return (
    <React.Fragment>
      <div>
        <Button sx={{ color: "black" }}>BACK TO RECIPES</Button>
      </div>
      <div className="ingredients-summary-container">
        <IngredientsMenuDisplay />
        <IngredientsShoppingList />
        
      </div>








    </React.Fragment>
  )
}

export default IngredientsSummaryContainer