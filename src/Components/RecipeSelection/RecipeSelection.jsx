import axios from "axios";
import React, { useEffect, useState } from "react";

import { test_recipe } from "../../data/recipes"

import "./recipeSelection.css"

const RecipeSelection = ({ id }) => {

    const testMode = true

    const [recipe, setRecipe] = useState([])


    useEffect(() => {
        async function getRecipe() {

            if (testMode) {
                console.log("test mode")
                setRecipe(test_recipe.meals)
                console.log(recipe)

            } else {
                axios
                .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

                .then(function (response) {
                    setRecipe(response.data.meals)
                    console.log(response)
                })

                .catch(function (error) {
                    console.log(error)
                })
                }
            }
        
        getRecipe()

        }, []) 







    return (
        <section>
            Recipe Selection

        </section>
    )
}

export default RecipeSelection