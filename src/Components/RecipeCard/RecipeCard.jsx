import React from "react";

import { test_recipe } from "../../data/recipes"

import "./recipeCard.css"

const RecipeCard = () => {

  const recipe = test_recipe.meals[0]

    return (
        <section>
            <h2>
                {recipe.strMeal}
            </h2>
            <img className="recipe-card-image" src={recipe.strMealThumb} />
              <ul>
                <li className="recipe-card-ingredients-list-entry">
                    <div className="recipe-card-ingredients-list-entry-measure">
                        {recipe.strMeasure1}
                    </div>
                    <div className="recipe-card-ingredients-list-entry-ingredient">
                        {recipe.strIngredient1}
                    </div>
                    <div>
                        <input type="checkbox" id={recipe.strIngredient1} />
                    </div>

                </li>

            </ul>

        </section>
    )
}

export default RecipeCard