import React, { useContext, useEffect, useRef, useState } from "react";

import { DisplayModeContext } from "../../context/DisplayModeContext"

import NavBarRegion from "../Header/NavBarRegion";
import SearchBar from "../Header/SearchBar";
import HeaderContainer from "../Header/HeaderContainer";
import RecipesLessThan600Calories from "../RecipeComponents/RecipesLessThan600Calories";
import TopBar from "../TopBar/TopBar";

const RecipesLessThan600CaloriesContainer = () => {
  const {displayMode, toggleDisplayMode} = useContext(DisplayModeContext)

  useEffect(() => {
    toggleDisplayMode("recipes")
  },[])

  return (
    <React.Fragment>
      <HeaderContainer />
      <main className="main">
        <RecipesLessThan600Calories />
      </main>
    </React.Fragment>
  )
}

export default RecipesLessThan600CaloriesContainer