import React, { useEffect, useRef, useState } from "react";

import axios from "axios";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import "../RecipeChoiceCard/recipeChoiceCard.css";
import "./recipeComponents.css";

import RecipeCard from "./RecipeCard";
import ProgressDisplay from "./ProgressDisplay";

const RecipesVegetarian = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const [recipeList, setRecipeList] = useState({})

  const searchURL = `https://api.edamam.com/api/recipes/v2/?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&health=vegetarian`

  const [open, setOpen] = useState(false)

  const descriptionElementRef = useRef(null)

  const sx_title = {
    color: "black",
    fontWeight: "bold",
    fontSize: "2em"
  }

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement != null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  useEffect(() => {
    setRecipeList([])
    async function getRecipeList() {
      axios
        .get(searchURL)
        .then((response) => {
          setRecipeList(response.data.hits)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getRecipeList()
  }, [])


  return (
    <section>

      {recipeList.length > 0
        ?
        <React.Fragment>
          <Typography sx={sx_title}>Vegetarian Recipes</Typography>
          <div className="recipe-selection-container">
            {recipeList.map((recipe) => (
              <RecipeCard key={recipe.recipe.uri} recipe={recipe} />
            ))}
          </div>
        </React.Fragment>
        :
        <Box sx={{ margin: 'auto' }}>
          <ProgressDisplay />
        </Box>
      }
    </section>
  )
}



export default RecipesVegetarian