import React from "react";

import NavBarRegion from "../Header/NavBarRegion";
import SearchBar from "../Header/SearchBar";
import RecipesLessThan600Calories from "../RecipeComponents/RecipesLessThan600Calories";

const RecipesLessThan600CaloriesContainer = () => {

  return (
    <React.Fragment>
      <SearchBar />
      <NavBarRegion />
      <RecipesLessThan600Calories />
    </React.Fragment>
  )
}

export default RecipesLessThan600CaloriesContainer