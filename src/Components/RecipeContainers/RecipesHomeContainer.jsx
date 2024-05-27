import React from "react";

import NavBarRegion from "../Header/NavBarRegion";
import SearchBar from "../Header/SearchBar";
import RecipesHome from "../RecipeComponents/RecipesHome";

const RecipesHomeContainer = () => {

  return (
    <React.Fragment>
      <SearchBar />
      <NavBarRegion />
      <RecipesHome />
    </React.Fragment>
  )
}

export default RecipesHomeContainer