import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import SearchBar from './Components/Header/SearchBar';
import NavBarRegion from './Components/Header/NavBarRegion';
import RecipeCardContainer from './Components/RecipeCardContainer/RecipeCardContainer';

import { setRef } from "@mui/material";

import { recipeSearch } from "./api/requests";
import { recipeLookUp } from "./api/requests";
import { quickPrepSearch } from "./api/requests";

import './App.css';

const App = () => {

  const [recipeSearchQuery, setRecipeSearchQuery] = useState("random")

  const handleSearchRequest = (searchQuery) => {
    setRecipeSearchQuery(searchQuery)
  }
  






  return (
    <div className="App">
      <SearchBar onSearchSubmit = {handleSearchRequest} />

      <RecipeCardContainer recipeSearchQuery={recipeSearchQuery}/>
    </div>
  );
}

export default App;
