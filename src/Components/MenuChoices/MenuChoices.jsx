import React, { useContext, useEffect, useState } from "react";

import { MenuChoicesContext } from "../../context/MenuChoicesContext";

import "./menuChoices.css"

import emptyMenuSlot from "../../assets/img/emptyMenuSlot.png"

const MenuChoices = () => {

  const { menuChoices } = useContext(MenuChoicesContext)



  return (
    <div className="menuChoices-container">
      {menuChoices
        ?
        <React.Fragment>
          {menuChoices.map((choice, index) => (
            <div key={index} className="menuChoices-slot">
              <img src={choice.img} />
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