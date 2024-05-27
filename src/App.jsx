import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Components/Home/Home";

import TopBar from "./Components/Header/TopBar";
import RecipesHomeContainer from "./Components/RecipeContainers/RecipesHomeContainer";
import RecipesByIngredientContainer from "./Components/RecipeContainers/RecipesByIngredientContainer";
import RecipesByRegionContainer from "./Components/RecipeContainers/RecipesByRegionContainer";
import RecipesVegetarianContainer from "./Components/RecipeContainers/RecipesVegetarianContainer";
import RecipesLessThan600CaloriesContainer from "./Components/RecipeContainers/RecipesLessThan600CaloriesContainer";


import './App.css';

const App = () => {

  return (
    <React.Fragment>
      <TopBar />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipesHomeContainer />} />
            <Route path="/recipes/region/:region" element={<RecipesByRegionContainer />} />
            <Route path="/recipes/ingredient/:ingredient" element={<RecipesByIngredientContainer />} />
            <Route path="/recipes/vegetarian" element={<RecipesVegetarianContainer />} />
            <Route path="/recipes/less-than-600-calories" element={<RecipesLessThan600CaloriesContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
