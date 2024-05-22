import React, { useEffect, useRef, useState } from "react";

import SearchBar from "../Header/SearchBar";
import NavBarRegion from "../Header/NavBarRegion";
import RecipesHome from "../RecipeComponents/RecipesHome";
import RecipesVegetarian from "../RecipeComponents/RecipesVegetarian";

const RecipesDefaultContainer = () => {

  return (
    <React.Fragment>
      <SearchBar />
      <NavBarRegion />
      <RecipesHome />
      <RecipesVegetarian />
  </React.Fragment>
  )
}

export default RecipesDefaultContainer