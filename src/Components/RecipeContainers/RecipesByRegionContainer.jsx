import React, { useContext, useEffect, useRef, useState } from "react";

import { DisplayModeContext } from "../../context/DisplayModeContext"

import HeaderContainer from "../Header/HeaderContainer";
import RecipesByRegion from "../RecipeComponents/RecipesByRegion";
import TopBar from "../TopBar/TopBar";

const RecipesByRegionContainer = () => {

  const { displayMode, toggleDisplayMode } = useContext(DisplayModeContext)

  useEffect(() => {
    toggleDisplayMode("recipes")
  }, [])

  return (
    <React.Fragment>
      <HeaderContainer />
      <main className="main">
        <RecipesByRegion />
      </main>
    </React.Fragment>
  )
}

export default RecipesByRegionContainer