import React, { useContext, useEffect, useRef, useState } from "react";

import { DisplayModeContext } from "../../context/DisplayModeContext"

import RecipesHome from "../RecipeComponents/RecipesHome";
import HeaderContainer from "../Header/HeaderContainer";
import TopBar from "../TopBar/TopBar";
import Menu from "../MenuChoices/MenuChoices";

const RecipesHomeContainer = () => {
  const { displayMode, toggleDisplayMode } = useContext(DisplayModeContext)

  useEffect(() => {
    toggleDisplayMode("recipes")
  }, [])


  return (
    <React.Fragment>
      <HeaderContainer />
      <main className="main">
        <RecipesHome />
      </main>
    </React.Fragment>
  )
}

export default RecipesHomeContainer