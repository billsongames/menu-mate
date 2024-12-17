import React, { useContext, useEffect } from "react";

import { DisplayModeContext } from "../../context/DisplayModeContext"

import HeaderContainer from "../Header/HeaderContainer";

import RecipesGlutenFree from "../RecipeComponents/RecipesGlutenFree";

const RecipesGlutenFreeContainer = () => {
  const { displayMode, toggleDisplayMode } = useContext(DisplayModeContext)

  useEffect(() => {
    toggleDisplayMode("recipes")
  }, [])

  return (
    <React.Fragment>
      <HeaderContainer />
      <main className="main">
        <RecipesGlutenFree />
      </main>
    </React.Fragment>
  )
}

export default RecipesGlutenFreeContainer