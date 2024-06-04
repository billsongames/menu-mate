import React, {createContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const RecipeTypeContext = createContext()

function RecipeTypeProvider(props) {

  

  const [recipeType, setRecipeType] = useState("")
  const switchRecipeType = () => {
    setRecipeType(useParams)
  }
}