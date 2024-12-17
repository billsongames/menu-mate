import React, { useContext, useEffect, useRef, useState } from "react";

import { DisplayModeContext } from "../../context/DisplayModeContext"

import NavBarRegion from "../Header/NavBarRegion";
import SearchBar from "../Header/SearchBar";
import HeaderContainer from "../Header/HeaderContainer";

import RecipesByIngredient from "../RecipeComponents/RecipesByIngredient";

const RecipesByIngredientContainer = () => {
  const { displayMode, toggleDisplayMode } = useContext(DisplayModeContext)

  useEffect(() => {
    toggleDisplayMode("recipes")
  }, [])

  return (
    <React.Fragment>
      <HeaderContainer />
      <main className="main">
        <RecipesByIngredient />
      </main>
    </React.Fragment>
  )
}

export default RecipesByIngredientContainer