import React, { useEffect, useRef, useState } from "react";

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography';



import axios from "axios";

import "./recipeSelection.css"

import { recipeSearch } from "../../api/requests";
import { recipeLookUp } from "../../api/requests";

import RecipeChoiceRegion from "../RecipeChoiceCard/RecipeChoiceRegion";
import RecipeChoiceDietLabels from "../RecipeChoiceCard/RecipeChoiceDietLabels";
import RecipeChoiceServings from "../RecipeChoiceCard/RecipeChoiceServings";
import RecipeChoiceCookingTime from "../RecipeChoiceCard/RecipeChoiceCookingTime";
import RecipeChoiceCalorieCount from "../RecipeChoiceCard/RecipeChoiceCalorieCount";
import RecipeChoiceLessThan600Cal from "../RecipeChoiceCard/RecipeChoiceLessThan600Cal"
import RecipeChoiceIngredients from "../RecipeChoiceCard/RecipeChoiceIngredients";
import RecipeChoiceNutrients from "../RecipeChoiceCard/RecipeChoiceNutrients";

const RecipeSelection = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const [recipeSearchText, setRecipeSearchText] = useState("lamb")
  const [recipeList, setRecipeList] = useState([])

  const [recipeChoiceLink, setRecipeChoiceLink] = useState(null)
  const [recipeChoiceDetails, setRecipeChoiceDetails] = useState(null)

  const recipeSearchQuery = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeSearchText}&app_id=${appID}&app_key=${appKey}`


  const [open, setOpen] = useState(false)

  useEffect(() => {
    async function getRecipeList() {
      axios
        .get(recipeSearchQuery)
        .then((response) => {
          setRecipeList(response.data.hits.filter(recipe => recipe.recipe.totalTime > 0))
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getRecipeList()
  }, [])

  const handleRecipeSearchSubmit = async (event) => {
    event.preventDefault()
    setRecipeList(await recipeSearch(recipeSearchText))
  }

  const handleOpenRecipeCard = async (event) => {
    event.preventDefault()
    setRecipeChoiceDetails(await recipeLookUp((event.target.dataset.recipelink).slice(51)))
    setOpen(true);
  }

  const handleCloseRecipeCard = () => setOpen(false)

  const descriptionElementRef = useRef(null)

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement != null) {
        descriptionElement.focus()
      }
    }
  }, [open])


  return (
    <section>
      <h1>
        Recipe Selection
      </h1>
      <div>
        <form onSubmit={handleRecipeSearchSubmit}>
          <input type="text" placeholder="Search recipes..." onChange={(event) => setRecipeSearchText(event.target.value)}></input>
          <Button onClick={handleRecipeSearchSubmit}>Search</Button>
        </form>
      </div>
      <div className="recipe-selection-container">
        {recipeList.map((recipe) => (

          <Card
            key={recipe.recipe.uri}
            sx={{
              margin: "1em",
              maxWidth: "24em",
              minWidth: "24em",
              height: "24em"
            }}
            data-recipelink={recipe.recipe.uri}
          >
            <CardMedia
              className="recipe-selection-card-link"
              component="img"
              alt={recipe.recipe.label}
              height="200"
              image={recipe.recipe.images.REGULAR.url}
              data-recipelink={recipe.recipe.uri}
              onClick={handleOpenRecipeCard}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom className="recipe-selection-card-link" data-recipelink={recipe.recipe.uri} onClick={handleOpenRecipeCard}>
                {recipe.recipe.label}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "right",
                alignItems: "end",
              }}
            
            >
              <Button size="small" data-recipelink={recipe.recipe.uri} onClick={handleOpenRecipeCard}>View details</Button>
            </CardActions>
          </Card>
        ))}

        {recipeChoiceDetails != null
          ?
          <Dialog
            open={open}
            fullWidth={true}
            maxWidth="sm"
            height="400px"
            onClose={handleCloseRecipeCard}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            PaperProps={{ sx : {height: "80%"} }}
          >

            <DialogTitle variant="h4" gutterBottom id="scroll-dialog-title">{recipeChoiceDetails.label}</DialogTitle>
            <DialogContent>
              <div className="recipe-dialog-image-info-container">
                <img src={recipeChoiceDetails.images.REGULAR.url} className="recipe-choice-image"/>
                <div className="recipe-dialog-info-container">
                    <RecipeChoiceRegion region={(recipeChoiceDetails.cuisineType[0]).charAt(0).toUpperCase() + (recipeChoiceDetails.cuisineType[0]).slice(1)} />
                    <RecipeChoiceCalorieCount calorieCount={Math.round((recipeChoiceDetails.totalNutrients.ENERC_KCAL.quantity)/(recipeChoiceDetails.yield))} />
                    <RecipeChoiceCookingTime time={recipeChoiceDetails.totalTime} />
                    <RecipeChoiceServings servings={recipeChoiceDetails.yield} />
                    <RecipeChoiceLessThan600Cal calorieCount={Math.round((recipeChoiceDetails.totalNutrients.ENERC_KCAL.quantity)/(recipeChoiceDetails.yield))} />
                </div>
              </div>
{/*               <RecipeChoiceDietLabels dietLabels={recipeChoiceDetails.dietLabels} /> */}
              <RecipeChoiceIngredients ingredients={recipeChoiceDetails.ingredientLines}/>
              <RecipeChoiceNutrients nutrients={recipeChoiceDetails.totalNutrients} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseRecipeCard}>CLOSE</Button>
            </DialogActions>



          </Dialog>
          : <></>
        }
      </div>
    </section>
  )
}



export default RecipeSelection