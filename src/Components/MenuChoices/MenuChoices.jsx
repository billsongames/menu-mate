import React, { useContext, useEffect, useState } from "react";

import { MenuChoicesContext } from "../../context/MenuChoicesContext";
import DeleteIcon from '@mui/icons-material/Delete';

import "./menuChoices.css"

import emptyMenuSlot from "../../assets/img/emptyMenuSlot.png"

const MenuChoices = () => {

  const { menuChoices } = useContext(MenuChoicesContext)
  const { removeMenuChoice } = useContext(MenuChoicesContext)

  const handleRemoveMenuChoice = (event) => {
    event.preventDefault()
    removeMenuChoice(event)

  }





  return (
    <div className="menuChoices-container">
      {menuChoices
        ?
        <React.Fragment>
          {menuChoices.map((choice, index) => (
            <div key={index} className="menuChoices-slot">
              <img src={choice.img} title={choice.title} />
              <div className="menuChoices-delete-button" data-recipeuri={choice.recipe_uri} onClick={handleRemoveMenuChoice}>
                {choice.complete === true
                  ? <DeleteIcon className="menuChoices-delete-icon" />
                  : <></>
                }

              </div>

            </div>
          ))}
        </React.Fragment>
        :
        <></>
      }


    </div>

  )
}

export default MenuChoices