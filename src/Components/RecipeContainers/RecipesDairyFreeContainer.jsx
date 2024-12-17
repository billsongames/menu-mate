import React, { useContext, useEffect } from "react";

import { DisplayModeContext } from "../../context/DisplayModeContext"

import HeaderContainer from "../Header/HeaderContainer";

import RecipesDairyFree from "../RecipeComponents/RecipesDairyFree";

const RecipesDairyFreeContainer = () => {
  const { displayMode, toggleDisplayMode } = useContext(DisplayModeContext)

  useEffect(() => {
    toggleDisplayMode("recipes")
  }, [])

  return (
    <React.Fragment>
      <HeaderContainer />
      <main className="main">
        <RecipesDairyFree />
      </main>
    </React.Fragment>
  )
}

export default RecipesDairyFreeContainer