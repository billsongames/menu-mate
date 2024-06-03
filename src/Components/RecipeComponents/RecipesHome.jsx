import React, { useEffect, useRef, useState } from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import axios from "axios";

import RecipeCard from "./RecipeCard";
import ProgressDisplay from "./ProgressDisplay";

import "../RecipeChoiceCard/recipeChoiceCard.css";
import "./recipeComponents.css";


const RecipesHome = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const [recipeList, setRecipeList] = useState({})

  const searchURL = `https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&random=true`

  const [open, setOpen] = useState(false)

  const descriptionElementRef = useRef(null)

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
          <Typography variant="h5">Recipes, recipes, recipes...</Typography>
          <div className="recipe-selection-container">
            {recipeList.map((recipe) => (
              <RecipeCard recipe={recipe} />
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



export default RecipesHome