import React, { useEffect, useRef, useState } from "react";

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

import axios from "axios";

import "../RecipeChoiceCard/recipeChoiceCard.css";
import "./recipeComponents.css";

import RecipeCard from "./RecipeCard";
import ProgressDisplay from "./ProgressDisplay";
import PaginationButtons from "./PaginationButtons";

import { paginationData } from "../../api/paginationData";


const RecipesLessThan600Calories = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const from = 0
  const to = 96

  const recipesPerLoad = 12
  const [resultCount, setResultCount] = useState()

  const [page, setPage] = React.useState(1);
  const [listStart, setListStart] = useState(0)
  const [listEnd, setListEnd] = useState(to / recipesPerLoad)

  const handlePageChange = (event, value) => {
    setPage(value)
    setListStart(paginationData[value].listStart)
    setListEnd(paginationData[value].listEnd)
  }

  const [recipeList, setRecipeList] = useState({})

  const searchURL =
    `https://api.edamam.com/search?
q=
&calories=600
&from=${from}
&to=${to}
&dishType=Main course
&excluded=head
&time=1%2B
&app_id=${appID}
&app_key=${appKey}`

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);


  return (
    <section>
      {recipeList.length > 0
        ?
        <React.Fragment>
          <Typography sx={{
            "@media screen and (max-width:768px)": {
              fontSize: "1.5em",
              fontWeight: "bold"
            },
            "@media screen and (min-width:768px)": {
              fontSize: "2em",
              fontWeight: "bold"
            }
          }}>
            Less than 600 calories
          </Typography>
          Page {page} / 8
          <div className="recipe-selection-container">
            {recipeList.slice(listStart, listEnd).map((recipe, index) => (
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

export default RecipesLessThan600Calories