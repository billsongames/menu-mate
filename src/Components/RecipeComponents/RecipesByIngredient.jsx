import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import "../RecipeChoiceCard/recipeChoiceCard.css";
import "./recipeComponents.css";

import RecipeCard from "./RecipeCard";
import ProgressDisplay from "./ProgressDisplay";


const RecipesByIngredient = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const [resultCount, setResultCount] = useState()

  const [nextURL, setNextURL] = useState()

  const { ingredient } = useParams()
  const [ingredientHeading, setIngredientHeading] = useState(null)

  const defaultSearchURL = `https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&q=${ingredient}`

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
          setIngredientHeading(ingredient)
          setNextURL(response.data._links.next.href)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getRecipeList()
  }, [ingredient])


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
          setIngredientHeading(ingredient)
          setNextURL(response.data._links.next.href)
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
            {ingredientHeading.charAt(0).toUpperCase() + ingredientHeading.slice(1)} recipes
          </Typography>
          <div className="recipe-selection-container">
            {recipeList.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
          <Button onClick={handleNextClick}>Next Page</Button>
        </React.Fragment>


        : resultCount === 0
          ?
          <>
            <div>
              <SentimentVeryDissatisfiedIcon sx={{
                color: "#8FBA74",
                width: 80,
                height: 80
              }}
              />
            </div>
            <div>
              <Typography>
                Sorry, no results
              </Typography>

            </div>
          </>
          :
          <Box sx={{ margin: 'auto' }}>
            <ProgressDisplay />
          </Box>
      }
    </section>
  )
}


export default RecipesByIngredient