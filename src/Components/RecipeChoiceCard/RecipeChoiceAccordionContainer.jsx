import React from "react";

import RecipeChoiceIngredients from "./RecipeChoiceIngredients";
import RecipeChoiceNutrients from "./RecipeChoiceNutrients";

const RecipeChoiceAccordionContainer = ( {ingredients, nutrients} ) => {
  return(
    <React.Fragment>
      <RecipeChoiceIngredients ingredients={ingredients}/>
      <RecipeChoiceNutrients nutrients={nutrients} />
    </React.Fragment>
  )


}

export default RecipeChoiceAccordionContainer