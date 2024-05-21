import React, { useEffect, useRef, useState } from "react";

import SearchBar from "../Header/SearchBar";
import NavBarRegion from "../Header/NavBarRegion";
import RecipesHome from "../RecipeComponents/RecipesHome";
import RecipesVegetarian from "../RecipeComponents/RecipesVegetarian";

import RecipesByRegion from "../RecipeComponents/RecipesByRegion";
import RecipesByIngredient from "../RecipeComponents/RecipesByIngredient";

const RecipesContainer = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const [recipeType, setRecipeType] = useState("Random")
  const [searchURL, setSearchURL] = useState("")

  const [searchQuery, setSearchQuery] = useState("")
  const [regionQuery, setRegionQuery] = useState("")

  const [queryType, setQueryType] = useState("default")

  const handleSearchRequest = (searchQuery) => {
    if (searchQuery) {
      setQueryType("ingredient")
      setSearchQuery(searchQuery)
      setSearchURL(`https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&q=${searchQuery}`)
    }
  }

  const handleRegionRequest = (regionQuery) => {
    if (regionQuery) {
      setQueryType("region")
      setRegionQuery(regionQuery)
      setSearchURL(`https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&cuisineType=${regionQuery}`)
    }
  }

  const renderJSX = () => {

    if (queryType === "default") {
      return (
        <React.Fragment>
          <SearchBar onSearchSubmit={handleSearchRequest} />
          <NavBarRegion onRegionSubmit={handleRegionRequest} />
          <RecipesHome />
          <RecipesVegetarian />
        </React.Fragment>
      )
    } else if (queryType === "region") {
      return (
        <React.Fragment>
          <SearchBar onSearchSubmit={handleSearchRequest} />
          <NavBarRegion onRegionSubmit={handleRegionRequest} />
          <RecipesByRegion searchURL={searchURL} region={regionQuery} />
        </React.Fragment>
      )
    } else if (queryType === "ingredient") {
      return (
        <React.Fragment>
          <SearchBar onSearchSubmit={handleSearchRequest} />
          <NavBarRegion onRegionSubmit={handleRegionRequest} />
          <RecipesByIngredient searchURL={searchURL} ingredient={searchQuery} />
        </React.Fragment>
      )

    }
  }





  return (
    renderJSX()
  )
}

export default RecipesContainer