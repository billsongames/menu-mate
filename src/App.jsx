import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import SearchBar from './Components/Header/SearchBar';
import NavBarRegion from './Components/Header/NavBarRegion';
import RecipeCardContainer from './Components/RecipeCardContainer/RecipeCardContainer';
import LessThan600CaloriesContainer from "./Components/RecipeCardContainer/LessThan600Calories";
import VegetarianContainer from "./Components/RecipeCardContainer/VegetarianContainer";

import { setRef } from "@mui/material";

import './App.css';

const App = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const [searchURL, setSearchURL] = useState(
    `https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&random=true`)

  const [recipeType, setRecipeType] = useState("Random")
  
  
  const handleSearchRequest = (searchQuery) => {
    setRecipeType(searchQuery)
    setSearchURL(`https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&q=${searchQuery}`)
  }

  const handleRegionRequest = (regionQuery) => {
    setRecipeType(regionQuery)
    setSearchURL(`https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&cuisineType=${regionQuery}`)
  }


  return (
    <div className="App">
      <SearchBar onSearchSubmit = {handleSearchRequest} />
      <NavBarRegion onRegionSubmit = {handleRegionRequest} />

      <RecipeCardContainer searchURL={searchURL} recipeType={recipeType[0].toUpperCase() + recipeType.slice(1)}/>
{/*       <LessThan600CaloriesContainer />
      <VegetarianContainer /> */}

    </div>
  );
}

export default App;
