import React from "react";

import RecipesHome from "../RecipeComponents/RecipesHome";
import HeaderContainer from "../Header/HeaderContainer";
import Menu from "../MenuChoices/MenuChoices";

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