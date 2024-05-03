import React, { useEffect, useState } from "react";

import axios from "axios";

const Test = () => {
  const applicationID = "df6de3de"
  const applicationKey = "25fd4d7a6ce089897106416ec0ed3c1d"

  const [apiResponse, setApiResponse] = useState([])
  const [ingredientFilter, setIngredientFilter] = useState("beef")
  const [mealID, setMealID] = useState("")
  const [recipeSelected, setRecipeSelected] = useState(null)

  const mealIDQuery = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
  const ingredientFilterQuery = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken%20tikka&app_id=${applicationID}&app_key=${applicationKey}`

  const [open, setOpen] = useState(false)


  useEffect(() => {
    async function getRecipeList() {
      axios
        .get(ingredientFilterQuery)
        .then((response)=> {
          console.log(response)
/*           setApiResponse(response.data.meals) */
        })
        .catch ((error) => {
          console.log(error)
        })
      }

    getRecipeList()
  }, [])
  return(
    <div>
      test
    </div>

  )
}

export default Test
