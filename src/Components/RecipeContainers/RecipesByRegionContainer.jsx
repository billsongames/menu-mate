import React, { useEffect, useRef, useState } from "react";

import SearchBar from "../Header/SearchBar";
import NavBarRegion from "../Header/NavBarRegion";
import RecipesHome from "../RecipeComponents/RecipesHome";
import RecipesVegetarian from "../RecipeComponents/RecipesVegetarian";

import RecipesByRegion from "../RecipeComponents/RecipesByRegion";
import RecipesByIngredient from "../RecipeComponents/RecipesByIngredient";

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