import React, { useContext, useEffect, useState } from "react";

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
  const [ingredientsJSX, setIngredientsJSX] = useState([])
  const [shoppingList, setShoppingList] = useState([])
  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    const jsxElements = []
    const listArray = []

    menuChoices.map((choice) => {
      if (choice.complete === true) {
        console.log(choice)
        const length = choice.recipe.ingredientLines.length
        jsxElements.push(
          <div className="ingredients-list-slot-title">{choice.recipe.label}</div>
        )

        for (let i = 0; i < length; i++) {
          jsxElements.push(
            <div className="ingredients-list-slot-list-item" key={`${choice.recipe.label}-${i}`}>
              <input
                type="checkbox"
                className="checkbox"
                value={choice.recipe.ingredientLines[i]}
                onChange={() => handleCheckboxChange()}
              />
              <label htmlFor={`checkbox-${choice.recipe.label}-${i}`}>
                {choice.recipe.ingredientLines[i]}
              </label>
            </div>
          )

          listArray.push(choice.recipe.ingredientLines[i])
        }
      }
    })

    setIngredientsJSX(jsxElements)

  }, [menuChoices])


  const handleCheckboxChange = () => {
    const data = [...document.querySelectorAll(".checkbox:checked")].map(event => event.value)
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
        FULL INGREDIENT LIST - TICK THE ONES YOU NEED
      </div>

      {ingredientsJSX
        ?
        <div>
          <Button onClick={handleOpenShoppingList}>GENERATE SHOPPING LIST</Button>
          {ingredientsJSX}
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
          <img src={logo} />
          <DialogTitle variat="h6" fontWeight={"bold"}>SHOPPING LIST</DialogTitle>
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