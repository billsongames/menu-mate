import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

import "../RecipeChoiceCard/recipeChoiceCard.css";
import "./recipeComponents.css";

import RecipeCard from "./RecipeCard";
import ProgressDisplay from "./ProgressDisplay";
import PaginationButtons from "./PaginationButtons";

import { paginationData } from "../../api/paginationData";


const RecipesByIngredient = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const from = 0
  const to = 96

  const recipesPerLoad = 12
  const [next, setNext] = useState(recipesPerLoad)

  const handleLoadMoreRecipes = () => {
    setNext(next + recipesPerLoad)
  }

  const [page, setPage] = React.useState(1);
  const [listStart, setListStart] = useState(0)
  const [listEnd, setListEnd] = useState(to / recipesPerLoad)

  const handlePageChange = (event, value) => {
    setPage(value)
    setListStart(paginationData[value].listStart)
    setListEnd(paginationData[value].listEnd)
  }



  const { ingredient } = useParams()
  const [ingredientHeading, setIngredientHeading] = useState(null)

/*   const searchURL = `https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&q=${ingredient}` */
  const searchURL = 
`https://api.edamam.com/search?
q=${ingredient}
&from=${from}
&to=${to}
&dishType=Main course
&time=1%2B
&app_id=${appID}
&app_key=${appKey}`


  const [recipeList, setRecipeList] = useState({})

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
          setIngredientHeading(ingredient)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getRecipeList()
  }, [ingredient])






























  return (
    <section>
      {recipeList.length > 0
        ?
        <React.Fragment>
          <Typography sx={sx_title}>{ingredientHeading.charAt(0).toUpperCase() + ingredientHeading.slice(1)} recipes</Typography>
          Page {page} / 8
          <div className="recipe-selection-container">
          {recipeList.slice(0, next).map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
          <PaginationButtons count={to / recipesPerLoad} page={page} onPageChange={handlePageChange} />
        </React.Fragment>
        :
        <Box sx={{ margin: 'auto' }}>
          <ProgressDisplay />
        </Box>
      }
    </section>
  )
}



export default RecipesByIngredient