import axios from "axios";
import React, { useEffect, useState } from "react";

import RecipeCard from "../RecipeCard/RecipeCard";

import { test_recipe } from "../../data/recipes"

import "./recipeSelection.css"

const RecipeSelection = () => {

    const testMode = false

    const [apiResponse, setApiResponse] = useState([])

    const [mealID, setMealID] = useState("52827")
    const [ingredientFilter, setIngredientFilter] = useState("beef")

    const [recipeSelected, setRecipeSelected] = useState(null)

    const mealIDQuery = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    const ingredientFilterQuery = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientFilter}`

    useEffect(() => {
      async function getRecipe() {

        if (testMode) {
          console.log("test mode")
          setApiResponse(test_recipe.meals[0])          

        } else {
          axios
            .get(ingredientFilterQuery)
            .then((response)=> {
              console.log(response.data.meals)
              setApiResponse(response.data.meals)
            })
            .catch ((error) => {
              console.log(error)
          })
        }} 

      getRecipe()
    }, [])

    const handleRecipeClick = (event) => {
      event.preventDefault()
      setRecipeSelected(event.target.dataset.recipeid)
      console.log(recipeSelected)
    }








    return (
      <section>
        <h1>
          Recipe Selection
        </h1>
        <div className="recipe-selection-container">
          {apiResponse.map((recipe) => (
            <figure key={recipe.idMeal}>
              <img src={recipe.strMealThumb} className="recipe-selection-meal-image" data-recipeid={recipe.idMeal} onClick={handleRecipeClick}/>
              <figcaption>{recipe.strMeal}</figcaption>
            </figure>
          ))}
        </div>




{/*         <figure onClick = {handleRecipeClick}>
          <img className="recipe-card-image" src={recipe.strMealThumb} data-recipeid={recipe.idMeal}/>
          <figcaption>{recipe.strMeal}</figcaption>
          
          
        </figure> */}
        {recipeSelected !== null
        ? <RecipeCard mealID={recipeSelected} />
        : <></>

        
      }


      

        </section>
    )
}



export default RecipeSelection