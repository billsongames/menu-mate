import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Typography from '@mui/material/Typography';

import RecipeCard from "./RecipeCard";
import ProgressDisplay from "./ProgressDisplay";
import PaginationButtons from "./PaginationButtons";

import { paginationData } from "../../api/paginationData";

import "../RecipeChoiceCard/recipeChoiceCard.css";
import "./recipeComponents.css";


const RecipesByRegion = () => {

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

  const { region } = useParams()

  const searchURL =
    `https://api.edamam.com/search?
q=
&from=${from}
&to=${to}
&dishType=Main course
&excluded=octopus
&excluded=head
&time=1%2B
&cuisineType=${region}
&app_id=${appID}
&app_key=${appKey}`

  const [recipeList, setRecipeList] = useState([])

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
    setListStart(0)
    setListEnd(12)
    setPage(1)
    setRecipeList([])
    async function getRecipeList() {
      setRecipeList([])
      setResultCount(false)

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
  }, [region])

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
          }}
          >
            {region} recipes</Typography>
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
        <ProgressDisplay />

      }
    </section>
  )
}

export default RecipesByRegion