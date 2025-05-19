import React, { useEffect, useRef, useState } from "react";

import { useMediaQuery } from "@mui/material";

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

import axios from "axios";

import RecipeCard from "./RecipeCard";
import ProgressDisplay from "./ProgressDisplay";
import PaginationButtons from "./PaginationButtons";

import { paginationData } from "../../api/paginationData";

import "../RecipeChoiceCard/recipeChoiceCard.css";
import "./recipeComponents.css";


const RecipesHome = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const [resultCount, setResultCount] = useState()

  const [nextURL, setNextURL] = useState()

  const defaultSearchURL = `https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}`

  const [searchURL, setSearchURL] = useState(defaultSearchURL)

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
      setRecipeList([])
      setResultCount(false)
      setNextURL("")

      axios
        .get(defaultSearchURL)
        .then((response) => {
          setRecipeList(response.data.hits)
          setResultCount(response.data.count)
          setNextURL(response.data._links.next.href)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getRecipeList()
  }, [])

  useEffect(() => {
    setRecipeList([])
    
    async function getRecipeList() {
      setRecipeList([])
      setResultCount(false)
      setNextURL("")

      axios
        .get(searchURL)
        .then((response) => {
          setRecipeList(response.data.hits)
          setResultCount(response.data.count)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getRecipeList()
  }, [searchURL])

  const handleNextClick = () => {
    setSearchURL(nextURL)
  }

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
            Recipes, recipes, recipes...
          </Typography>
          <div className="recipe-selection-container">
            {recipeList.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
          <Button onClick={handleNextClick}>Next Page</Button>        
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