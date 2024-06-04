import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Components/Home/Home";

import TopBar from "./Components/Header/TopBar";
import HeaderContainer from "./Components/Header/HeaderContainer";
import RecipesHomeContainer from "./Components/RecipeContainers/RecipesHomeContainer";
import RecipesByIngredientContainer from "./Components/RecipeContainers/RecipesByIngredientContainer";
import RecipesByRegionContainer from "./Components/RecipeContainers/RecipesByRegionContainer";
import RecipesVegetarianContainer from "./Components/RecipeContainers/RecipesVegetarianContainer";
import RecipesLessThan600CaloriesContainer from "./Components/RecipeContainers/RecipesLessThan600CaloriesContainer";


import './App.css';

const App = () => {

  return (
    <div className="App">
      <TopBar />
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:home" element={<RecipesHomeContainer />} />
          <Route path="/recipes/region/:region" element={<RecipesByRegionContainer />} />
          <Route path="/recipes/ingredient/:ingredient" element={<RecipesByIngredientContainer />} />
          <Route path="/recipes/vegetarian" element={<RecipesVegetarianContainer />} />
          <Route path="/recipes/less-than-600-calories" element={<RecipesLessThan600CaloriesContainer />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
