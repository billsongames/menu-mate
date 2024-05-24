import React from "react";

import SearchBar from "../Header/SearchBar";
import NavBarRegion from "../Header/NavBarRegion";

import RecipesByRegion from "../RecipeComponents/RecipesByRegion";

const RecipesByRegionContainer = () => {

  return (
    <React.Fragment>
      <SearchBar />
      <NavBarRegion />
      <RecipesByRegion />
    </React.Fragment>
  )
}

export default RecipesByRegionContainer