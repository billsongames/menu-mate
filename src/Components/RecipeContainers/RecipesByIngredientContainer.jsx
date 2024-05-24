import React, { useState } from "react";

import NavBarRegion from "../Header/NavBarRegion";
import SearchBar from "../Header/SearchBar";

import RecipesByIngredient from "../RecipeComponents/RecipesByIngredient";

const RecipesByIngredientContainer = () => {

  return (
    <React.Fragment>
      <SearchBar />
      <NavBarRegion />
      <RecipesByIngredient />
    </React.Fragment>
  )
}

export default RecipesByIngredientContainer