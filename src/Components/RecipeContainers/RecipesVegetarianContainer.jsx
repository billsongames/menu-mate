import React from "react";

import SearchBar from "../Header/SearchBar";
import NavBarRegion from "../Header/NavBarRegion";
import HeaderContainer from "../Header/HeaderContainer";

import RecipesVegetarian from "../RecipeComponents/RecipesVegetarian";

const RecipesVegetarianContainer = () => {

  return (
    <React.Fragment>
      <HeaderContainer />
      <main className="main">
        <RecipesVegetarian />
      </main>
    </React.Fragment>
  )
}

export default RecipesVegetarianContainer