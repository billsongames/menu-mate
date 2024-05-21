import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Components/Home/Home";

import TopBar from "./Components/Header/TopBar";
import RecipesContainer from "./Components/RecipeContainers/RecipesContainer";

import Test from "./Components/Test/Test";

import './App.css';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="recipes" element={<RecipesContainer />} />
        </Routes>




      </BrowserRouter>
    </div>
  );
}

export default App;
