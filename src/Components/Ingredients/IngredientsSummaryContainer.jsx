import React, { useContext, useEffect } from "react";

import { DisplayModeContext } from "../../context/DisplayModeContext"

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
<<<<<<< HEAD
        <Button sx={{ color: "black" }}>BACK TO RECIPES</Button>
      </div>
      <div className="ingredients-summary-container">
        <IngredientsMenuDisplay />
        <IngredientsShoppingList />
=======
        <Button>BACK TO RECIPES</Button>
>>>>>>> c42b2820a80de8ea00ea5b7a8ed6339cf5128132
      </div>








    </React.Fragment>
  )
}

export default IngredientsSummaryContainer