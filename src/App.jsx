import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import Home from "./Components/Home/Home";

import TopBar from "./Components/Header/TopBar";
import RecipesContainer from "./Components/RecipeContainers/RecipesContainer";
import RecipesDefaultContainer from "./Components/RecipeContainers/RecipesDefaultContainer.jsx";
import RecipesByIngredientContainer from "./Components/RecipeContainers/RecipesByIngredientContainer";
import RecipesByRegionContainer from "./Components/RecipeContainers/RecipesByRegionContainer";

import Test from "./Components/Test/Test";

import './App.css';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="recipes" element={<RecipesDefaultContainer />} />
          <Route path="recipes/region/:region" element={<RecipesByRegionContainer />} />
          <Route path="recipes/ingredient/:ingredient" element={<RecipesByIngredientContainer />} />
        </Routes>




      </BrowserRouter>
    </div>
  );
}

export default App;
