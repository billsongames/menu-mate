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

const IngredientsShoppingList = () => {

  const { menuChoices } = useContext(MenuChoicesContext)
  const [ingredientsList, setIngredientsList] = useState([])
  const [shoppingList, setShoppingList] = useState([])

  const [checkedState, setCheckedState] = useState([])

  const [dialogOpen, setDialogOpen] = useState(false)



  useEffect(() => {
    const list = []
    const checkArray = []
    menuChoices.map((choice) => {
      if (choice.complete === true) {
        console.log(choice)
        const length = choice.recipe.ingredients.length
        for (let i = 0; i < length; i++) {
          list.push(choice.recipe.ingredients[i].text)
          checkArray.push(false)
        }
      }
    })

    setIngredientsList(list)
    setCheckedState(checkArray)

  }, [menuChoices])

  const handleCheckboxChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )
    setCheckedState(updatedCheckedState)

    let array = []
    let checkboxes = document.querySelectorAll("input[type=checkbox]:checked")

    for (let i = 0; i < checkboxes.length; i++) {
      array.push(checkboxes[i].value)
    }
    setShoppingList(array)
  }

  const handleOpenShoppingList = () => {
    setDialogOpen(true)
  }

  const handleCloseShoppingList = () => {
    setDialogOpen(false)
  }







  return (
    <div className="shoppingList">
      <div>
        FULL INGREDIENT LIST - TICK THE ONES YOU NEED
      </div>

      {ingredientsList
        ?
        <div>
          <Button onClick={handleOpenShoppingList}>GENERATE SHOPPING LIST</Button>
          <ul>
            {ingredientsList.map((ingredient, index) => {
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    name={ingredient}
                    value={ingredient}
                    checked={checkedState[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <label htmlFor={`checkbox-${index}`}>
                    {ingredient}
                  </label>
                </li>
              )
            })
            }
          </ul>
        </div>
        :
        <></>

      }
      <Dialog
        open={dialogOpen}
        fullWidth={true}
        maxWidth="sm"
        onClose={handleCloseShoppingList}
        scroll="paper"
        PaperProps={{ sx: { height: "56em" } }}
      >
        <DialogTitle variat="h6" fontWeight={"bold"}>SHOPPING LIST</DialogTitle>
        <DialogContent>
          {shoppingList
            ?
            <ul>
              {shoppingList.map((ingredient, index) => {
                return (
                  <li key={index}>
                    {ingredient}
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