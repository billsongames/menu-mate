import React, { useContext, useEffect, useState } from "react";

import { MenuChoicesContext } from "../../context/MenuChoicesContext";
import { AiFillDelete } from "react-icons/ai";
import ClearIcon from '@mui/icons-material/Clear';

import { Button, Card, CardMedia, CardActions, Stack } from "@mui/material";

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
    <div>
      {menuChoices
        ?
        <div className="menuChoices-container">
          {menuChoices.map((choice, index) => (
            <div key={index} className="menuChoices-slot">
              <img src={choice.img} />
              {choice.complete === true
                ? <div>
                    <div className="menuChoices-clearButton" onClick={handleRemoveMenuChoice} data-recipeuri={choice.recipe_uri}>
                      <ClearIcon sx={{fill: "#8FBA74", pointerEvents:"none", size: "1.5em"}} />
                    </div>
                  </div>
                : <></>
              }
            </div>
          ))}
        </div>
        :
        <></>
      }


    </div>

  )
}

export default MenuChoices