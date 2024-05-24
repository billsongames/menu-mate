import React from "react";

import NavBarRegion from "../Header/NavBarRegion";
import SearchBar from "../Header/SearchBar";
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