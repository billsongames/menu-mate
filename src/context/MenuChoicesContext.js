import React, { createContext, useEffect, useState } from "react";

const MenuChoicesContext = createContext()

function MenuChoicesProvider(props) {

  const menuChoicesDefault = [
    {
      choice: 1,
      img: "../../assets/img/emptyMenuSlot.png",
      complete: false
    },
    {
      choice: 2,
      img: "../../assets/img/emptyMenuSlot.png",
      complete: false
    }
  ]


  /*   const [menuChoices, setMenuChoices] = useState(menuChoicesDefault) */
  const [menuChoices, setMenuChoices] = useState()

  const updateMenuChoices = (event) => {
    console.log("hello")

    const choiceData = (JSON.parse(localStorage.getItem("MenuMate_MenuChoices")))
    const newChoiceData = [...choiceData]
    console.log(choiceData)
    const targetIndex = choiceData.findIndex(choice => choice.choice === 1)
    newChoiceData[targetIndex].img = ""


    setMenuChoices(newChoiceData)
    console.log(newChoiceData)
    localStorage.setItem("MenuMate_MenuChoices", JSON.stringify(newChoiceData))
  }

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
    <MenuChoicesContext.Provider value={{ menuChoices, setMenuChoices, updateMenuChoices }}>
      {props.children}
    </MenuChoicesContext.Provider>

  )
}

export { MenuChoicesContext, MenuChoicesProvider }