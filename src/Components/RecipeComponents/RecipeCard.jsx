import React, { useEffect, useRef, useState } from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import { recipeLookUp } from "../../api/requests";

import RecipeChoiceCalorieCount from "../RecipeChoiceCard/RecipeChoiceCalorieCount";
import RecipeChoiceCookingTime from "../RecipeChoiceCard/RecipeChoiceCookingTime";
import RecipeChoiceIngredients from "../RecipeChoiceCard/RecipeChoiceIngredients";
import RecipeChoiceLessThan600Cal from "../RecipeChoiceCard/RecipeChoiceLessThan600Cal";
import RecipeChoiceNutrients from "../RecipeChoiceCard/RecipeChoiceNutrients";
import RecipeChoiceRegion from "../RecipeChoiceCard/RecipeChoiceRegion";
import RecipeChoiceServings from "../RecipeChoiceCard/RecipeChoiceServings";

import "../RecipeChoiceCard/recipeChoiceCard.css";
import "./recipeComponents.css";

const RecipeCard = ({ recipe }) => {

  const [recipeChoiceDetails, setRecipeChoiceDetails] = useState(null)
  const [open, setOpen] = useState(false)

  const handleOpenRecipeCard = async (event) => {
    event.preventDefault()
    setRecipeChoiceDetails(await recipeLookUp((event.target.dataset.recipelink).slice(51)))
    setOpen(true);
  }

  const handleCloseRecipeChoiceCard = () => setOpen(false)

  const descriptionElementRef = useRef(null)

  const handleAddRecipeToMenu = () => {
    alert("added")
  }

  return (
    <React.Fragment>
      <Card
        key={recipe.recipe.uri}
        sx={{
          margin: "1em",
          maxWidth: "20em",
          minWidth: "20em",
          height: "22em",
        }}
        data-recipelink={recipe.recipe.uri}
      >
        <div className="recipe-selection-details-container">
          <CardMedia
            sx={{
              cursor: "pointer"
            }}
            component="img"
            alt={recipe.recipe.label}
            height="200"
            image={recipe.recipe.image}
            data-recipelink={recipe.recipe.uri}
            onClick={handleOpenRecipeCard}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{
                textAlign: "left",
                cursor: "pointer"
              }}
              data-recipelink={recipe.recipe.uri}
              onClick={handleOpenRecipeCard}
            >
              {recipe.recipe.label}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "end"
            }}

          >
            <Button
              size="small"
              data-recipelink={recipe.recipe.uri}
              onClick={handleOpenRecipeCard}
            >
              View details
            </Button>
            <Button onClick={handleAddRecipeToMenu}>
              Add
            </Button>
          </CardActions>
        </div>

      </Card>

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
    </React.Fragment>
  )
  

}

export default RecipeCard