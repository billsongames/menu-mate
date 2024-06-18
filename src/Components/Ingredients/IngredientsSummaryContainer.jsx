import React, { useContext, useEffect } from "react";

import { DisplayModeContext } from "../../context/DisplayModeContext"

import MenuChoices from "../MenuChoices/MenuChoices";
import IngredientsMenuDisplay from "./IngredientsMenuDisplay";

import {
  Button,
  Card
  } from "@mui/material";

const IngredientsSummaryContainer = () => {
  const {displayMode, toggleDisplayMode} = useContext(DisplayModeContext)

  useEffect(() => {
    toggleDisplayMode("ingredients")
  },[])




  return(
    <React.Fragment>
      <div>
        <Button sx={{color: "black"}}>BACK TO RECIPES</Button>
      </div>
      
      <IngredientsMenuDisplay />

      

      
      

    </React.Fragment>
  )
}

export default IngredientsSummaryContainer