import axios from "axios";
import React, { useEffect, useState } from "react";

import RecipeCard from "../RecipeCard/RecipeCard";

import { test_recipe } from "../../data/recipes"

import "./recipeSelection.css"

const RecipeSelection = ({id}) => {

    const testMode = false

    const [recipe, setRecipe] = useState([])
    const [recipeSelected, setRecipeSelected] = useState(null)
    const apiQuery = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

    useEffect(() => {
      async function getRecipe() {

        if (testMode) {
          console.log("test mode")
          setRecipe(test_recipe.meals)          

        } else {
          axios
            .get(apiQuery)
            .then((response)=> {
              console.log(response.data.meals[0])
              setRecipe(response.data.meals[0])
            })
            .catch ((error) => {
              console.log(error)
          })
        }} 

      getRecipe()
    }, [])

    const handleRecipeClick = (event) => {
      event.preventDefault()
      setRecipeSelected(recipe)
    }








    return (
      <section>
        Recipe Selection
        <figure onClick = {handleRecipeClick}>
          <img className="recipe-card-image" src={recipe.strMealThumb} data-recipeid={recipe.idMeal}/>
          <figcaption>{recipe.strMeal}</figcaption>
          
          
        </figure>
        {recipeSelected !== null
        ? <RecipeCard recipe={recipeSelected} />
        : <></>
      }


      

        </section>
    )
}

RecipeSelection.defaultProps = {
  recipe: [
    {"strMeal": "Massaman Beef curry tester",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/tvttqv1504640475.jpg",}
  ]
}

export default RecipeSelection