import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MenuChoicesContext } from "../../context/MenuChoicesContext";
import { DisplayModeContext } from "../../context/DisplayModeContext";
import ClearIcon from '@mui/icons-material/Clear';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Drawer from '@mui/material/Drawer';
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import BarChartIcon from '@mui/icons-material/BarChart';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import TimerIcon from '@mui/icons-material/Timer'

import { recipeLookUp } from "../../api/requests";

import RecipeChoiceCalorieCount from "../RecipeChoiceCard/RecipeChoiceCalorieCount";
import RecipeChoiceCookingTime from "../RecipeChoiceCard/RecipeChoiceCookingTime";
import RecipeChoiceIngredients from "../RecipeChoiceCard/RecipeChoiceIngredients";
import RecipeChoiceLessThan600Cal from "../RecipeChoiceCard/RecipeChoiceLessThan600Cal";
import RecipeChoiceNutrients from "../RecipeChoiceCard/RecipeChoiceNutrients";
import RecipeChoiceRegion from "../RecipeChoiceCard/RecipeChoiceRegion";
import RecipeChoiceServings from "../RecipeChoiceCard/RecipeChoiceServings";

import "../RecipeChoiceCard/recipeChoiceCard.css";
import "../RecipeComponents/recipeComponents.css";

import defaultMenuChoiceImage from "../../assets/img/emptyMenuSlot.png"

import "./menuChoices.css";


const MenuChoices = () => {

  const { menuChoices } = useContext(MenuChoicesContext)
  const { removeMenuChoice } = useContext(MenuChoicesContext)

  const [recipeChoiceDetails, setRecipeChoiceDetails] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const {displayMode, toggleDisplayMode} = useContext(DisplayModeContext)

  const navigate = useNavigate()

  const handleOpenRecipeCard = async (event) => {
    event.preventDefault()
    /* setRecipeChoiceDetails(await recipeLookUp((event.target.dataset.recipelink).slice(51))) */
    setRecipeChoiceDetails(JSON.parse(event.target.dataset.completerecipe))
    setDialogOpen(true);
  }

  const handleCloseRecipeChoiceCard = () => {
    setDialogOpen(false)
  }

  const handleRemoveMenuChoice = (event) => {
    event.preventDefault()
    removeMenuChoice(event)
  }

  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleContinueToIngredientsClick = () =>{
    navigate("/ingredients-summary")

  }

  return (
    <div>
      {menuChoices
        ?
        <div className="menuChoices-container">
          {menuChoices.map((choice, index) => (
            <div key={index} className="menuChoices-slot">
              {choice.complete === true
                ?
                <img
                  src={choice.recipe.image}
                  title={choice.recipe.label}
                  data-recipelink={choice.recipe.uri}
                  data-completerecipe={JSON.stringify(choice.recipe)}
/*                   onClick={handleOpenRecipeCard} */
                />
                :
                <img src={defaultMenuChoiceImage} title="Choose a recipe" />
              }
              {choice.complete === true
                ? <div>
                  <div className="menuChoices-clearButton" onClick={handleRemoveMenuChoice} data-recipeuri={choice.recipe.uri}>
                    <ClearIcon
                      sx={{
                        fill: "#8FBA74",
                        pointerEvents: "none",
                        width: "1em",
                        zIndex: "-1",
                        "&:hover": { fill: "blue" }

                      }}
                    />
                  </div>
                </div>
                : <></>
              }
            </div>
          ))}
          <button onClick={toggleDrawer}>View menu</button>
        </div>
        :
        <></>
      }



      {recipeChoiceDetails !== null
        ?
        <Dialog
          open={dialogOpen}
          fullWidth={true}
          maxWidth="sm"
          height="400px"
          onClose={handleCloseRecipeChoiceCard}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          PaperProps={{ sx: { height: "56em" } }}
        >

          <DialogTitle variant="h5" fontWeight="bold" gutterBottom id="scroll-dialog-title">{recipeChoiceDetails.label}</DialogTitle>
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
            {/*           <Button
            size="small"
            onClick={handleUpdateMenuChoices}
            data-imageurl={recipe.recipe.image}
            data-title={recipe.recipe.label}
            data-ingredients={JSON.stringify(recipe.recipe.ingredients)}
            data-recipeuri={recipe.recipe.uri}
          >
            Add
          </Button> */}
            <Button size="small" onClick={handleCloseRecipeChoiceCard}>CLOSE</Button>
          </DialogActions>
        </Dialog>
        : <></>
      }



      <Drawer open={drawerOpen} anchor="right" onClose={toggleDrawer}>
        <Card sx={{ height: "100%" }}>
          <div className="menuChoices-drawer-header">
            <div className="menuChoices-drawer-header-close">
              <div className="menuChoices-drawer-header-clearButton-container">
                <div className="menuChoices-drawer-clearButton" onClick={toggleDrawer} >
                  <ClearIcon
                    sx={{
                      fill: "#8FBA74",
                      pointerEvents: "none",
                      width: "1em"
                    }}
                  />
                </div>
              </div>
            </div>

            <Typography
              gutterBottom
              variant="h6"
              sx={{
                width: "60%",
                margin: "0.5em 1em",
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              MENU
            </Typography>
            <div className="menuChoices-drawer-header-spacer">

            </div>
          </div>

          {menuChoices
            ?
            <div className="menuChoices-drawer-container">
              {menuChoices.map((choice, index) => (
                <div key={index}>
                  <div className="menuChoices-drawer-entry-container">
                    <div className="menuChoices-drawer-image">
                      {choice.complete === true
                        ?
                        <React.Fragment>
                          <img
                            src={choice.recipe.image}
                            title={choice.recipe.label}
                            data-completerecipe={JSON.stringify(choice.recipe)}
/*                             onClick={handleOpenRecipeCard} */
                          />
                          <div>
                            <div className="menuChoices-drawer-clearButton" onClick={handleRemoveMenuChoice} data-recipeuri={choice.recipe.uri}>
                              <ClearIcon
                                sx={{
                                  fill: "#8FBA74",
                                  pointerEvents: "none",
                                  width: "1em",
                                }}
                              />
                            </div>
                          </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                          <img src={defaultMenuChoiceImage} title="Choose a recipe" />
                        </React.Fragment>
                      }
                    </div>

                    {choice.complete === true
                      ?
                      <div className="menuChoices-drawer-info">
                        <div className="menuChoices-drawer-label">
                          {choice.recipe.label}
                        </div>

                        <div className="menuChoices-drawer-item">
                          <PublicIcon sx={{ height: "0.5em" }} />
                          <div>
                            {`${(choice.recipe.cuisineType[0]).charAt(0).toUpperCase() + (choice.recipe.cuisineType[0]).slice(1)}`}
                          </div>
                        </div>

                        <div className="menuChoices-drawer-item">
                          <BarChartIcon sx={{ height: "0.5em" }} />
                          <div>
                            {`${Math.round((choice.recipe.totalNutrients.ENERC_KCAL.quantity) / (choice.recipe.yield))} calories`}
                          </div>
                        </div>

                        <div className="menuChoices-drawer-item">
                          <TimerIcon sx={{ height: "0.55em" }} />
                          <div>
                            {`${choice.recipe.totalTime} minutes`}
                          </div>
                        </div>


                      </div>
                      :
                      <div className="menuChoices-drawer-info">
                        <div className="menuChoices-drawer-label-empty">
                          Choose a recipe
                        </div>
                      </div>
                    }

                    {choice.complete === true
                      ?
                      <div className="menuChoices-drawer-clearButton-container">
                        <div className="menuChoices-drawer-clearButton" onClick={handleRemoveMenuChoice} data-recipeuri={choice.recipe.uri}>
                          <ClearIcon
                            sx={{
                              fill: "#8FBA74",
                              pointerEvents: "none",
                              width: "1em"
                            }}
                          />
                        </div>
                      </div>
                      :
                      <></>
                    }
                  </div>
                  <Divider />
                </div>
              ))}
            </div>
            :
            <></>
          }

          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <div>
              <Button onClick={() => handleContinueToIngredientsClick()} /* href="/ingredients-summary" */>
                CONTINUE TO INGREDIENTS
              </Button>
            </div>

          </CardActions>
        </Card>

      </Drawer>

    </div>
  )






}

export default MenuChoices