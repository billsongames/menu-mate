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

import RecipeCard from "../RecipeCard/RecipeCard";

import { test_recipe } from "../../data/recipes"

import "./recipeSelection.css"

const RecipeSelection = () => {

    const testMode = false

    const [apiResponse, setApiResponse] = useState([])

    const [mealID, setMealID] = useState("52827")

    const [ingredientFilter, setIngredientFilter] = useState("beef")

    const [recipeSelected, setRecipeSelected] = useState(null)

    const mealIDQuery = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    const ingredientFilterQuery = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientFilter}`

    useEffect(() => {
      async function getRecipe() {
        axios
          .get(ingredientFilterQuery)
          .then((response)=> {
            setApiResponse(response.data.meals)
          })
          .catch ((error) => {
            console.log(error)
          })
        }

      getRecipe()
    }, [])

    const handleRecipeClick = (event) => {
      event.preventDefault()
      setRecipeSelected(event.target.dataset.recipeid)
    }


    return (
      <section>
        <h1>
          Recipe Selection

        </h1>
        <div className="recipe-selection-container">
          {apiResponse.map((recipe) => (

            <Card sx= {{ maxWidth: 300, minWidth: 300 }} className="recipe-selection-card" data-recipeid={recipe.idMeal} >
              <CardMedia
                className="recipe-selection-card-link"
                component="img"
                alt={recipe.strMeal}
                height="200"
                image={recipe.strMealThumb}
                data-recipeid={recipe.idMeal}
                onClick={handleRecipeClick}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" className="recipe-selection-card-link" data-recipeid={recipe.idMeal} onClick={handleRecipeClick}>
                  {recipe.strMeal}   
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" data-recipeid={recipe.idMeal} onClick={handleRecipeClick}>View details</Button>
              </CardActions>
            </Card>
          ))}
        </div>




{/*         <figure onClick = {handleRecipeClick}>
          <img className="recipe-card-image" src={recipe.strMealThumb} data-recipeid={recipe.idMeal}/>
          <figcaption>{recipe.strMeal}</figcaption>
          
          
        </figure> */}
        {recipeSelected !== null
        ? <RecipeCard mealID={recipeSelected} />
        : <></>

        
      }


      

        </section>
    )
}



export default RecipeSelection