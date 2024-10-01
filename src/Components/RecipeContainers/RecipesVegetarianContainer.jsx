import React, { useContext, useEffect } from "react";

import { DisplayModeContext } from "../../context/DisplayModeContext"

import HeaderContainer from "../Header/HeaderContainer";

import RecipesVegetarian from "../RecipeComponents/RecipesVegetarian";

const RecipesVegetarianContainer = () => {
  const {displayMode, toggleDisplayMode} = useContext(DisplayModeContext)

  useEffect(() => {
    toggleDisplayMode("recipes")
  },[])

  return (
    <React.Fragment>
      <HeaderContainer />
      <main className="main">
        <RecipesVegetarian />
      </main>
    </React.Fragment>
  )
}

export default RecipesVegetarianContainer