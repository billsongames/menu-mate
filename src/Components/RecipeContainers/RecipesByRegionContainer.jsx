import React from "react";

import SearchBar from "../Header/SearchBar";
import NavBarRegion from "../Header/NavBarRegion";
import HeaderContainer from "../Header/HeaderContainer";
import RecipesByRegion from "../RecipeComponents/RecipesByRegion";

const RecipesByRegionContainer = () => {

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