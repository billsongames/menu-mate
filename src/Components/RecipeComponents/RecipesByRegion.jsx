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

import "../RecipeChoiceCard/recipeChoiceCard.css";
import "./recipeComponents.css";

import { paginationData } from "../../api/paginationData";


const RecipesByRegion = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const recipesPerLoad = 12
  const [next, setNext] = useState(recipesPerLoad)

  const handleLoadMoreRecipes = () => {
    setNext(next + recipesPerLoad)
  }

  const [page, setPage] = React.useState(1);
  const [listStart, setListStart] = useState(0)
  const [listEnd, setListEnd] = useState(12)

  const handlePageChange = (event, value) => {
    setPage(value)
    setListStart(paginationData[value].listStart)
    setListEnd(paginationData[value].listEnd)
  }

  const from = 0
  const to = 96

  const { region } = useParams()
  const [regionHeading, setRegionHeading] = useState(null)

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

  const sx_pagination = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em"
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
          console.log(response.data)
          setRegionHeading(region)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getRecipeList()
  }, [region])


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);


  return (
    <section>

      {recipeList.length > 0
        ?
        <React.Fragment>
          <Typography sx={sx_title}>{regionHeading} recipes</Typography>
          Page {page} / 8
          <div className="recipe-selection-container">


            {recipeList.slice(listStart, listEnd).map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
          <div>
            <Stack sx={sx_pagination} spacing={2}>
              <Pagination count={8} page={page} showFirstButton showLastButton onChange={handlePageChange} />
            </Stack>
            {/*             {next < recipeList.length && (
              <Button onClick={handleLoadMoreRecipes}>Load more</Button>
            )} */}
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