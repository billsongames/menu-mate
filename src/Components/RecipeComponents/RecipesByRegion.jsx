import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import RecipeCard from "./RecipeCard";
import ProgressDisplay from "./ProgressDisplay";
import PaginationButtons from "./PaginationButtons";

import "../RecipeChoiceCard/recipeChoiceCard.css";
import "./recipeComponents.css";

import { paginationData } from "../../api/paginationData";


const RecipesByRegion = () => {

  const [foodCategories, setFoodCategories] = useState([])

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

  const { region } = useParams()

  /*   const [regionHeading, setRegionHeading] = useState(region) */

  /*   const searchURL = `https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&cuisineType=${region}` */
  const searchURL =
    `https://api.edamam.com/search?
q=
&from=${from}
&to=${to}
&dishType=Main course
&time=1%2B
&cuisineType=${region}
&app_id=${appID}
&app_key=${appKey}`

  const [recipeList, setRecipeList] = useState([])

  const [open, setOpen] = useState(false)

  const descriptionElementRef = useRef(null)

  const sx_title = {
    color: "black",
    fontWeight: "bold",
    fontSize: "2em"
  }

  const sx_paginationStack = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em"
  }

  const sx_paginationButton = {
    button: { color: "#8FBA74" }
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
    setListStart(0)
    setListEnd(12)
    setPage(1)
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
  }, [region])

  const foodCategoriesFunc = (recipe) => {
    const length = recipe.ingredients.length
    for (let i=0; i<length; i++) {
      foodCategories.push(recipe.ingredients[i].foodCategory)
      } 
    }

  const foodCategoriesPopulate = () => {
    recipeList.map((recipe) => {
      foodCategoriesFunc(recipe.recipe)
    })
    const list = [...new Set(foodCategories)]
    console.log(list)
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);


  return (
    <section>
      {recipeList.length > 0
        ?
        <React.Fragment>
          <Typography sx={sx_title}>{region} recipes</Typography>
          Page {page} / 8
          <div>
            

            {/*             {next < recipeList.length && (
              <Button onClick={handleLoadMoreRecipes}>Load more</Button>
            )} */}
          </div>
          <div className="recipe-selection-container">


            {recipeList.slice(listStart, listEnd).map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
          <PaginationButtons count={to / recipesPerLoad} page={page} onPageChange={handlePageChange} />

        </React.Fragment>
        :
        <Box sx={{ margin: 'auto' }}>
          <Typography sx={sx_title}>{region} recipes</Typography>
          <ProgressDisplay />
        </Box>
      }
    </section>
  )
}

export default RecipesByRegion