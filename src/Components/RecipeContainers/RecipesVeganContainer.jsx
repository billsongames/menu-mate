import React, { useContext, useEffect } from "react";

import { DisplayModeContext } from "../../context/DisplayModeContext"

import HeaderContainer from "../Header/HeaderContainer";

import RecipesVegan from "../RecipeComponents/RecipesVegan";

const RecipesVeganContainer = () => {
  const { displayMode, toggleDisplayMode } = useContext(DisplayModeContext)

  useEffect(() => {
    toggleDisplayMode("recipes")
  }, [])

  return (
    <React.Fragment>
      <HeaderContainer />
      <main className="main">
        <RecipesVegan />
      </main>
    </React.Fragment>
  )
}

export default RecipesVeganContainer