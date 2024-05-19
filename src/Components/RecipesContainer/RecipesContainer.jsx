import React, { useEffect, useRef, useState } from "react";

import SearchBar from "../Header/SearchBar";
import NavBarRegion from "../Header/NavBarRegion";
import RecipesHome from "../RecipeComponents/RecipesHome";
import RecipesVegetarian from "../RecipeComponents/RecipesVegetarian";

import RecipesByRegion from "../RecipeComponents/RecipesByRegion";

const RecipesContainer = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const [recipeType, setRecipeType] = useState("Random")
  const [searchURL, setSearchURL] = useState("")

  const [searchQuery, setSearchQuery] = useState("")

  const [regionQuery, setRegionQuery] = useState("")

  const handleSearchRequest = (searchQuery) => {
    setSearchQuery(searchQuery)
    setRegionQuery("")
    setSearchURL(`https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&q=${searchQuery}`)
  }
  
  const handleRegionRequest = (regionQuery) => {
    setRegionQuery(regionQuery)
    setSearchQuery("")
    setSearchURL(`https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&cuisineType=${regionQuery}`)
  }





  return(
    <div>
      <SearchBar onSearchSubmit={handleSearchRequest} />
      <NavBarRegion onRegionSubmit={handleRegionRequest} />

      {regionQuery
      ?
      <RecipesByRegion searchURL={searchURL} region={regionQuery} />
      :
      <>
        <RecipesHome />
        <RecipesVegetarian />
      </>
      }
      

    </div>
  )
}

export default RecipesContainer