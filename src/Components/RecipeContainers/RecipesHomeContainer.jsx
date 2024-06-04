import React from "react";

import NavBarRegion from "../Header/NavBarRegion";
import SearchBar from "../Header/SearchBar";
import RecipesHome from "../RecipeComponents/RecipesHome";
import HeaderContainer from "../Header/HeaderContainer";

const RecipesHomeContainer = () => {

  return (
    <React.Fragment>
      <HeaderContainer />
      <main className="main">
        <RecipesHome />
      </main>
    </React.Fragment>
  )
}

export default RecipesHomeContainer