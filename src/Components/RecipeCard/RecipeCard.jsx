import React, { useEffect, useState } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import axios from "axios";

import {areaFlagURLs} from "../../data/areaFlagURLs"

import ToAddToShoppingList from "../ToAddToShoppingList/ToAddToShoppingList";

import "./recipeCard.css"

const RecipeCard = ( {mealID} ) => {

  const [recipe, setRecipe] = useState([])
  const [flagURL, setFlagURL] = useState("")

  const mealIDQuery = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`

  useEffect(() => {
    async function getRecipe() {

      axios
        .get(mealIDQuery)
        .then((response)=> {
          setRecipe(response.data.meals[0])
        })
        .catch ((error) => {
          console.log(error)
      })
    }

    getRecipe()
  }, [mealIDQuery])


  const [toAddtoList, setToAddtoList] = useState([])

  const handleIngredientToggle = () => {
    const form = document.getElementById("ingredientSelector")
    const inputs = form.getElementsByTagName("input")
    let ingredientsArray =[]
    

    for (var i=0, max=inputs.length; i < max; i += 1) {
      if (inputs[i].type === "checkbox" && inputs[i].checked) {
        ingredientsArray.push(inputs[i].value)
      }
    setToAddtoList(ingredientsArray)  
    }
  }

  return (
    <Card>
      <CardMedia
        component="img"
        alt={recipe.strMeal}
        image={recipe.strMealThumb}
      />
      <CardContent>
        <Typography id="modal-modal-title" gutterBottom variant="h6" component="div">
          {recipe.strMeal}
          {recipe.strInstructions}
        </Typography>

      </CardContent>
{/*       <CardActions>
        <Button size="small">View details</Button>
      </CardActions>  */} 
      <Stack direction="row" spacing={1} color="primary">
        <Chip sx={{ fontSize: 16 }} label={recipe.strArea} />
        <Chip sx={{ fontSize: 16 }} label={recipe.strCategory} />
      </Stack>
    </Card>

  )
}

export default RecipeCard