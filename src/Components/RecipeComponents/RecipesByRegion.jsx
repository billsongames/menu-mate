import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import RecipeCard from "./RecipeCard";
import ProgressDisplay from "./ProgressDisplay";

import "../RecipeChoiceCard/recipeChoiceCard.css";
import "./recipeComponents.css";


const RecipesByRegion = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const { region } = useParams()
  const [regionHeading, setRegionHeading] = useState(null)

  const searchURL = `https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&cuisineType=${region}`

  const [recipeList, setRecipeList] = useState([])

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
          setRegionHeading(region)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getRecipeList()
  }, [region])


  return (
    <section>

      {recipeList.length > 0
        ?
        <React.Fragment>
          <Typography sx={sx_title}>{regionHeading} recipes</Typography>
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

export default RecipesByRegion