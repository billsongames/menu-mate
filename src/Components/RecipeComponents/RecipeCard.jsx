import React, { useContext, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";

import { MenuChoicesContext } from "../../context/MenuChoicesContext";

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

import CheckIcon from '@mui/icons-material/Check';

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
  const [dialogOpen, setDialogOpen] = useState(false)

  const { menuChoices } = useContext(MenuChoicesContext)
  const { addToMenuChoices } = useContext(MenuChoicesContext)

  const handleOpenRecipeCard = async (event) => {
    event.preventDefault()
    /*     setRecipeChoiceDetails(await recipeLookUp((event.target.dataset.recipelink).slice(51))) */
    setRecipeChoiceDetails(JSON.parse(event.target.dataset.completerecipe))
    setDialogOpen(true);
  }

  const handleAddToMenuChoices = (event) => {
    event.preventDefault()
    console.log(menuChoices)
    addToMenuChoices(event)
  }

  const handleCloseRecipeChoiceCard = () => {
    setDialogOpen(false)
  }

  const choiceData = (JSON.parse(localStorage.getItem("MenuMate_MenuChoices")))

  const targetIndex = choiceData.findIndex(choice => choice.recipe.uri === recipe.recipe.uri)





  return (
    <React.Fragment>
      <Card
        key={recipe.recipe.uri}
        sx={{
          "@media screen and (max-width:768px)": {
            margin: "1em 0",
            width: "90%"
          },
          "@media screen and (min-width:768px)": {
            margin: "1em",
            minWidth: "300px",
            maxWidth: "300px"
          }
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
            height="180"
            image={recipe.recipe.image}
            data-recipelink={recipe.recipe.uri}
            data-completerecipe={JSON.stringify(recipe.recipe)}
            onClick={handleOpenRecipeCard}
          />
          <CardContent>
            <Typography
              gutterBottom
              sx={{
                fontWeight: "bold",
                textAlign: "left",
                cursor: "pointer",
                "@media screen and (max-width:480px)": {
                  fontSize: "1em"
                },
                "@media screen and (min-width:768px)": {
                  fontSize: "1em"
                }
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
              justifyContent: "start"
            }}

          >
            <Button
              size="small"
              data-recipelink={recipe.recipe.uri}
              data-completerecipe={JSON.stringify(recipe.recipe)}
              onClick={handleOpenRecipeCard}
            >
              View details
            </Button>

            {targetIndex === -1
              ?
              <Button
                size="small"
                onClick={handleAddToMenuChoices}
                data-imageurl={recipe.recipe.image}
                data-title={recipe.recipe.label}
                data-ingredients={JSON.stringify(recipe.recipe.ingredients)}
                data-recipeuri={recipe.recipe.uri}
                data-completerecipe={JSON.stringify(recipe.recipe)}
              >
                Add to menu
              </Button>
              :
              <React.Fragment>
                <Button size="small" disabled={true}>
                  Added to menu
                </Button>
                <CheckIcon
                  sx={{
                    fill: "#8FBA74",
                    width: "1em"
                  }}
                />



              </React.Fragment>
            }

          </CardActions>
        </div>

      </Card>

      {
        recipeChoiceDetails != null
          ?
          <Dialog
            open={dialogOpen}
            fullWidth={true}
            maxWidth="sm"
            onClose={handleCloseRecipeChoiceCard}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            PaperProps={{ sx: { height: "56em" } }}
          >
            <DialogTitle
              sx={{
                fontWeight: "bold",
                "@media screen and (max-width:480px)": {
                  fontSize: "1em"
                },
                "@media screen and (min-width:768px)": {
                  fontSize: "1.5em"
                }
              }}
              gutterBottom id="scroll-dialog-title">
              {recipeChoiceDetails.label}</DialogTitle>

            <DialogContent>
              <div className="recipe-dialog-image-info-container">
                <img src={recipeChoiceDetails.image} className="recipe-dialog-image" />
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
              {targetIndex === -1
                ?
                <Button
                  size="small"
                  onClick={handleAddToMenuChoices}
                  data-imageurl={recipe.recipe.image}
                  data-title={recipe.recipe.label}
                  data-ingredients={JSON.stringify(recipe.recipe.ingredients)}
                  data-recipeuri={recipe.recipe.uri}
                  data-completerecipe={JSON.stringify(recipe.recipe)}
                >
                  Add to menu
                </Button>
                :
                <React.Fragment>
                  <Button size="small" disabled={true}>
                    Added to menu
                  </Button>
                  <CheckIcon
                    sx={{
                      fill: "#8FBA74",
                      width: "1em"
                    }}
                  />



                </React.Fragment>
              }
              <Button size="small" onClick={handleCloseRecipeChoiceCard}>CLOSE</Button>
            </DialogActions>



          </Dialog>
          : <></>
      }
    </React.Fragment >
  )


}

export default RecipeCard