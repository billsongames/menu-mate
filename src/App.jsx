import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MenuChoicesProvider } from "./context/MenuChoicesContext";
import { DisplayModeProvider } from "./context/DisplayModeContext";

import Home from "./Components/Home/Home";
import TopBar from "./Components/TopBar/TopBar";
import TopBarContainer from "./Components/TopBar/TopBarContainer";
import TopBarIngredients from "./Components/TopBar/TopBarIngredients";
import RecipesHomeContainer from "./Components/RecipeContainers/RecipesHomeContainer";
import RecipesByIngredientContainer from "./Components/RecipeContainers/RecipesByIngredientContainer";
import RecipesByRegionContainer from "./Components/RecipeContainers/RecipesByRegionContainer";
import RecipesVegetarianContainer from "./Components/RecipeContainers/RecipesVegetarianContainer";
import RecipesLessThan600CaloriesContainer from "./Components/RecipeContainers/RecipesLessThan600CaloriesContainer";
import IngredientsSummaryContainer from "./Components/Ingredients/IngredientsSummaryContainer";

import './App.css';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <DisplayModeProvider>
          <MenuChoicesProvider>

            <TopBar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<RecipesHomeContainer />} />
              <Route path="/recipes/region/:region" element={<RecipesByRegionContainer />} />
              <Route path="/recipes/ingredient/:ingredient" element={<RecipesByIngredientContainer />} />
              <Route path="/recipes/vegetarian" element={<RecipesVegetarianContainer />} />
              <Route path="/recipes/less-than-600-calories" element={<RecipesLessThan600CaloriesContainer />} />

              <Route path="/ingredients-summary" element={<IngredientsSummaryContainer />} />
            </Routes>

          </MenuChoicesProvider>
        </DisplayModeProvider>
      </BrowserRouter>

    </div>

  );
}

export default App;
