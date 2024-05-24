import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Components/Home/Home";

import TopBar from "./Components/Header/TopBar";
import RecipesDefaultContainer from "./Components/RecipeContainers/RecipesDefaultContainer.jsx";
import RecipesByIngredientContainer from "./Components/RecipeContainers/RecipesByIngredientContainer";
import RecipesByRegionContainer from "./Components/RecipeContainers/RecipesByRegionContainer";


import './App.css';

const App = () => {

  return (
    <React.Fragment>
      <TopBar />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="recipes" element={<RecipesDefaultContainer />} />
            <Route path="recipes/region/:region" element={<RecipesByRegionContainer />} />
            <Route path="recipes/ingredient/:ingredient" element={<RecipesByIngredientContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
