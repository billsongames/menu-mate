import React, { createContext, useEffect, useState } from "react";

const MenuChoicesContext = createContext()

function MenuChoicesProvider(props) {

  const menuChoicesDefault = [
    {
      img: "../../assets/img/emptyMenuSlot.png"
    },
    {
      img: "../../assets/img/emptyMenuSlot.png"
    }
  ]


  /*   const [menuChoices, setMenuChoices] = useState(menuChoicesDefault) */
  const [menuChoices, setMenuChoices] = useState()

  useEffect(() => {
    if (localStorage.getItem("MenuMate_MenuChoices") === null) {
      setMenuChoices(menuChoicesDefault)
      localStorage.setItem("MenuMate_MenuChoices", JSON.stringify(menuChoicesDefault))
    }
    else {
      setMenuChoices(JSON.parse(localStorage.getItem("MenuMate_MenuChoices")))
    }
  }, [])

  return (
    <MenuChoicesContext.Provider value={{ menuChoices, setMenuChoices }}>
      {props.children}
    </MenuChoicesContext.Provider>

  )
}

export { MenuChoicesContext, MenuChoicesProvider }