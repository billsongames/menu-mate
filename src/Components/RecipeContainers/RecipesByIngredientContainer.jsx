import React, { useState } from "react";

import NavBarRegion from "../Header/NavBarRegion";
import SearchBar from "../Header/SearchBar";
import HeaderContainer from "../Header/HeaderContainer";

import RecipesByIngredient from "../RecipeComponents/RecipesByIngredient";

const RecipesByIngredientContainer = () => {

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