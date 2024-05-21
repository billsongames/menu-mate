import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Components/Home/Home";

import TopBar from "./Components/Header/TopBar";
import SearchBar from './Components/Header/SearchBar';
import NavBarRegion from './Components/Header/NavBarRegion';
import RecipesContainer from "./Components/RecipesContainer/RecipesContainer";
import RecipesHome from "./Components/RecipeComponents/RecipesHome";
import RecipesByRegion from "./Components/RecipeComponents/RecipesByRegion";

import RecipesLessThan600Calories from "./Components/RecipeComponents/RecipesLessThan600Calories";
import RecipesVegetarian from "./Components/RecipeComponents/RecipesVegetarian";
import Test from "./Components/Test/Test";

import { setRef } from "@mui/material";

import './App.css';

const App = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const [recipeType, setRecipeType] = useState("Random")
  const [searchURL, setSearchURL] = useState("")

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
    <BrowserRouter>
    <TopBar />
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path = "recipes" element = {<RecipesContainer queryType={"default"}/>} />      
      <Route path= "recipes/ingredient/*" element = {<RecipesContainer queryType = "ingredient" />} />
      <Route path= "recipes/*" element= {<RecipesContainer queryType = "region" />} />
          



    </Routes>

  {/*       <RecipeCardContainer searchURL={searchURL} recipeType={recipeType[0].toUpperCase() + recipeType.slice(1)}/> */}
  {/*       <LessThan600CaloriesContainer />
        <VegetarianContainer /> */}


    </BrowserRouter>
    </div>
  );
}

export default App;
