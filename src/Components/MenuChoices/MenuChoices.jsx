import { React, useState } from "react";
import "./menuChoices.css"

import emptyMenuSlot from "../../assets/img/emptyMenuSlot.png"

const MenuChoices = () => {

  let menuSlots = [
    {
      name: "slot1",
      img: "../../assets/img/emptyMenuSlot.png"
    },
    {
      name: "slot2",
      img: "../../assets/img/emptyMenuSlot.png"
    },
    {
      name: "slot3",
      img: "../../assets/img/emptyMenuSlot.png"
    },
    {
      name: "slot4",
      img: "../../assets/img/emptyMenuSlot.png"
    },  
    {
      name: "slot5",
      img: "../../assets/img/emptyMenuSlot.png"
    },
    {
      name: "slot6",
      img: "../../assets/img/emptyMenuSlot.png"
    },
    {
      name: "slot7",
      img: "../../assets/img/emptyMenuSlot.png"
    }
  ]

  return (
    <div className="menuChoices-container">
      {menuSlots.map((slot, index) => (
        <div key={index} className="menuChoices-slot">
          <img src={slot.img} />
        </div>
      ))}

    </div>

  )
}

export default MenuChoices