import React from "react";

import NavBarRegion from "../Header/NavBarRegion";
import SearchBar from "../Header/SearchBar";
import HeaderContainer from "../Header/HeaderContainer";
import RecipesLessThan600Calories from "../RecipeComponents/RecipesLessThan600Calories";

const RecipesLessThan600CaloriesContainer = () => {

  return (
    <React.Fragment>
      <HeaderContainer />
      <main className="main">
        <RecipesLessThan600Calories />
      </main>
    </React.Fragment>
  )
}

export default RecipesLessThan600CaloriesContainer