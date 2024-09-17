import React, { useEffect, useRef, useState } from "react";

import { useMediaQuery } from "@mui/material";

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

import axios from "axios";

import RecipeCard from "./RecipeCard";
import ProgressDisplay from "./ProgressDisplay";

import "../RecipeChoiceCard/recipeChoiceCard.css";
import "./recipeComponents.css";


const RecipesHome = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const mediaMobile = useMediaQuery("(max-width:480px)")

  const recipesPerLoad = 20
  const [next, setNext] = useState(recipesPerLoad)

  const handleLoadMoreRecipes = () => {
    setNext(next + recipesPerLoad)
  }



  const from = 0
  const to = 100

  const [recipeList, setRecipeList] = useState({})

  /*   const searchURL = `https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&random=true` */

  const searchURL =
    `https://api.edamam.com/search?
q=
&from=${from}
&to=${to}
&dishType=Main course
&time=1%2B
&app_id=${appID}
&app_key=${appKey}`

  const [open, setOpen] = useState(false)

  const descriptionElementRef = useRef(null)

  const sx_title = {
    color: "black",
    fontWeight: "bold"
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
          <Typography sx={{

            "@media screen and (max-width:480px)": {
              fontSize: "1.5em",
              fontWeight: "bold"
            },
            "@media screen and (min-width:768px)": {
              fontSize: "2em",
              fontWeight: "bold"
            }
          }}
          >
            Recipes, recipes, recipes...
          </Typography>
          <div className="recipe-selection-container">
            {recipeList.slice(0, next).map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
          <div>
            {next < recipeList.length && (
              <Button onClick={handleLoadMoreRecipes}>Load more</Button>
            )}
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