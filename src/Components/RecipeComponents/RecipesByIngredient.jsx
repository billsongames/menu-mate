import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import "../RecipeChoiceCard/recipeChoiceCard.css";
import "./recipeComponents.css";

import { recipeLookUp } from "../../api/requests";

import RecipeChoiceCalorieCount from "../RecipeChoiceCard/RecipeChoiceCalorieCount";
import RecipeChoiceCookingTime from "../RecipeChoiceCard/RecipeChoiceCookingTime";
import RecipeChoiceIngredients from "../RecipeChoiceCard/RecipeChoiceIngredients";
import RecipeChoiceLessThan600Cal from "../RecipeChoiceCard/RecipeChoiceLessThan600Cal";
import RecipeChoiceNutrients from "../RecipeChoiceCard/RecipeChoiceNutrients";
import RecipeChoiceRegion from "../RecipeChoiceCard/RecipeChoiceRegion";
import RecipeChoiceServings from "../RecipeChoiceCard/RecipeChoiceServings";


const RecipesByIngredient = () => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const { ingredient } = useParams()
  const [ingredientHeading, setIngredientHeading] = useState(null)

  const searchURL = `https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&q=${ingredient}`

  const [recipeList, setRecipeList] = useState({})
  const [recipeChoiceDetails, setRecipeChoiceDetails] = useState(null)

  const [open, setOpen] = useState(false)

  const handleOpenRecipeCard = async (event) => {
    event.preventDefault()
    setRecipeChoiceDetails(await recipeLookUp((event.target.dataset.recipelink).slice(51)))
    setOpen(true);
  }

  const handleCloseRecipeChoiceCard = () => setOpen(false)

  const descriptionElementRef = useRef(null)

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement != null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  useEffect(() => {

    setRecipeList([])
    async function getRecipeList() {
      axios
        .get(searchURL)
        .then((response) => {
          setRecipeList(response.data.hits)
          setIngredientHeading(ingredient)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getRecipeList()
  }, [ingredient])






























  return (
    <section>
      {recipeList.length > 0
        ?
        <div>
          <Typography variant="h5">{ingredientHeading.charAt(0).toUpperCase() + ingredientHeading.slice(1)} recipes</Typography>

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
          </div>

          {recipeChoiceDetails != null
            ?
            <Dialog
              open={open}
              fullWidth={true}
              maxWidth="sm"
              height="400px"
              onClose={handleCloseRecipeChoiceCard}
              scroll="paper"
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
              PaperProps={{ sx: { height: "80%" } }}
            >

              <DialogTitle variant="h4" gutterBottom id="scroll-dialog-title">{recipeChoiceDetails.label}</DialogTitle>
              <DialogContent>
                <div className="recipe-dialog-image-info-container">
                  <img src={recipeChoiceDetails.images.REGULAR.url} className="recipe-dialog-image" />
                  <div className="recipe-dialog-info-container">
                    <RecipeChoiceRegion region={(recipeChoiceDetails.cuisineType[0]).charAt(0).toUpperCase() + (recipeChoiceDetails.cuisineType[0]).slice(1)} />
                    <RecipeChoiceCalorieCount calorieCount={Math.round((recipeChoiceDetails.totalNutrients.ENERC_KCAL.quantity) / (recipeChoiceDetails.yield))} />
                    <RecipeChoiceCookingTime time={recipeChoiceDetails.totalTime} />
                    <RecipeChoiceServings servings={recipeChoiceDetails.yield} />
                    <RecipeChoiceLessThan600Cal calorieCount={Math.round((recipeChoiceDetails.totalNutrients.ENERC_KCAL.quantity) / (recipeChoiceDetails.yield))} />
                  </div>
                </div>
                {/*               <RecipeChoiceDietLabels dietLabels={recipeChoiceDetails.dietLabels} /> */}
                <RecipeChoiceIngredients ingredients={recipeChoiceDetails.ingredientLines} ingredientImages={recipeChoiceDetails.ingredients} />
                <RecipeChoiceNutrients nutrients={recipeChoiceDetails.totalNutrients} />



              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseRecipeChoiceCard}>CLOSE</Button>
              </DialogActions>



            </Dialog>
            : <></>
          }
        </div>
        :
        <Box sx={{ margin: 'auto' }}>
          <CircularProgress />
        </Box>
      }
    </section>
  )
}



export default RecipesByIngredient