import React from "react";

import SearchBar from "../Header/SearchBar";
import NavBarRegion from "../Header/NavBarRegion";

import RecipesVegetarian from "../RecipeComponents/RecipesVegetarian";

const RecipesVegetarianContainer = () => {

  return (
    <React.Fragment>
      <SearchBar />
      <NavBarRegion />
      <RecipesVegetarian />
    </React.Fragment>
  )
}

export default RecipesVegetarianContainer