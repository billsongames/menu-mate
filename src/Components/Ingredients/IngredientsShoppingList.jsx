import React, { useContext, useEffect, useState } from "react";

import Checkbox from '@mui/material/Checkbox';

import { MenuChoicesContext } from "../../context/MenuChoicesContext";

import { filteredFoodCategories } from "../../data/filteredFoodCategories";

const IngredientsShoppingList = () => {

  const { menuChoices } = useContext(MenuChoicesContext)
  const [ingredientsList, setIngredientsList] = useState([])

  useEffect(() => {
    const list = []
    menuChoices.map((choice) => {
      if (choice.complete === true) {
        console.log(choice)
        const length = choice.recipe.ingredients.length
        for (let i = 0; i < length; i++) {
          list.push(choice.recipe.ingredients[i].text)
        }
      }
    })
    console.log(list)
    setIngredientsList(list)
  }, [menuChoices])





  return (
    <div className="shoppingList">
      {ingredientsList
        ?
        <ul>
          {ingredientsList.map((ingredient, index) => {
            return(
              <li key={index}>
                {ingredient}
              </li>
            )  
            })
          }
        </ul>
        :
        <></>

      }

    </div>
  )
}

export default IngredientsShoppingList