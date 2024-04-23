import React, { useState } from "react";

import ToAddToShoppingList from "../ToAddToShoppingList/ToAddToShoppingList";

import { test_recipe } from "../../data/recipes"

import "./recipeCard.css"

const RecipeCard = () => {

  const recipe = test_recipe.meals[0]

  const [toAddtoList, setToAddtoList] = useState([])


  const handleIngredientToggle = () => {
    const form = document.getElementById("ingredientSelector")
    const inputs = form.getElementsByTagName("input")
    let ingredientsArray =[]
    

    for (var i=0, max=inputs.length; i < max; i += 1) {
      if (inputs[i].type === "checkbox" && inputs[i].checked) {
        ingredientsArray.push(inputs[i].value)
      }
    setToAddtoList(ingredientsArray)  
    }


  }

  return (
    <section>
      <h2>
        {recipe.strMeal}
      </h2>
      <img className="recipe-card-image" src={recipe.strMealThumb} />
      <form id="ingredientSelector">
      {recipe.strIngredient1 !== null
      ?
      <ul>
        <li className="recipe-card-ingredients-list-entry">
          <div className="recipe-card-ingredients-list-entry-measure">
            {recipe.strMeasure1}
          </div>
          <div className="recipe-card-ingredients-list-entry-ingredient">
            {recipe.strIngredient1}
          </div>
          <input type="checkbox"
            value={recipe.strIngredient1}
            onClick={handleIngredientToggle}
          />
        </li>
      </ul>
      : <></>
      }

      {recipe.strIngredient2 !== null
      ?
      <ul>
        <li className="recipe-card-ingredients-list-entry">
          <div className="recipe-card-ingredients-list-entry-measure">
            {recipe.strMeasure2}
          </div>
          <div className="recipe-card-ingredients-list-entry-ingredient">
            {recipe.strIngredient2}
          </div>
          <input type="checkbox"
            value={recipe.strIngredient2}
            onClick={handleIngredientToggle}
          />
        </li>
      </ul>
      : <></>
      }
      </form>

      {toAddtoList}
    </section>

  )
}

export default RecipeCard