import React, { useContext, useEffect, useState } from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from "@mui/material/Typography";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { MenuChoicesContext } from "../../context/MenuChoicesContext";

import { filteredFoodCategories } from "../../data/filteredFoodCategories";

import logo from "../../assets/logo/menumate-logo-256x64-light.png"

const IngredientsShoppingList = () => {

  const { menuChoices } = useContext(MenuChoicesContext)
  const [recipeListJSX, setRecipeListJSX] = useState([])
  const [shoppingList, setShoppingList] = useState([])
  const [dialogOpen, setDialogOpen] = useState(false)



  useEffect(() => {
    const jsxElements = []

    menuChoices.map((choice) => {
      if (choice.complete === true) {
        const length = choice.recipe.ingredientLines.length
        const ingredientsJSX = []

        for (let i = 0; i < length; i++) {
          ingredientsJSX.push(
            <div className="ingredients-list-slot-list-item" key={`${choice.recipe.label}-${i}`}>
              <input
                type="checkbox"
                className="ingredient-checkbox"
                value={choice.recipe.ingredientLines[i]}
                onChange={() => handleCheckboxChange()}
              />
              <label htmlFor={`checkbox-${choice.recipe.label}-${i}`}>
                {choice.recipe.ingredientLines[i]}
              </label>
            </div>
          )
        }

        jsxElements.push(
          <div className="accordion-entry" key={`${choice.recipe.label}`}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
              >
                <img className="ingredients-list-slot-image" src={choice.recipe.image} />
                <div className="ingredients-list-slot-title">{choice.recipe.label}</div>
              </AccordionSummary>
              <AccordionDetails>
                {ingredientsJSX}
              </AccordionDetails>
            </Accordion>
          </div>
        )
      }
    })

    setRecipeListJSX(jsxElements)

  }, [menuChoices])


  const handleCheckboxChange = () => {
    const data = [...document.querySelectorAll(".ingredient-checkbox:checked")].map(event => event.value)
    setShoppingList(data)
  }

  const handleOpenShoppingList = () => {
    setDialogOpen(true)
  }

  const handleCloseShoppingList = () => {
    setDialogOpen(false)
  }

  return (
    <div className="ingredients-list-container">
      <div className="ingredients-list-title">
        FULL INGREDIENT LIST
      </div>
      <div className="ingredients-list-subtitle">
        TICK THE ONES YOU NEED
      </div>

      {recipeListJSX
        ?
        <div>
          {recipeListJSX}
          <Button onClick={handleOpenShoppingList}>GENERATE SHOPPING LIST</Button>
        </div>
        :
        <></>
      }
      <Dialog
        open={dialogOpen}
        fullWidth={true}
        maxWidth="md"
        onClose={handleCloseShoppingList}
        scroll="paper"
        PaperProps={{ sx: { height: "56em", backgroundColor: "wheat" } }}
      >

        <DialogContent>
          <img src={logo} height="42em" />
          <div className="shoppingList-title">SHOPPING LIST</div>
          {shoppingList
            ?
            <ul className="shoppingList">
              {shoppingList.map((ingredient, index) => {
                return (
                  <li key={index}>
                    <div className="shoppingList-item">
                      {ingredient}
                    </div>

                  </li>
                )
              })}
            </ul>
            :
            <></>
          }
        </DialogContent>
        <DialogActions>
          <Button size="small" onClick={handleCloseShoppingList}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default IngredientsShoppingList