import React, { createContext, useEffect, useState } from "react";

const MenuChoicesContext = createContext()

function MenuChoicesProvider(props) {

  const menuChoicesDefault = [
    {
      choice: 1,
      title: "Choose a recipe",
      img: "../../assets/img/emptyMenuSlot.png",
      complete: false
    },
    {
      choice: 2,
      title: "Choose a recipe",
      img: "../../assets/img/emptyMenuSlot.png",
      complete: false
    },
    {
      choice: 3,
      title: "Choose a recipe",
      img: "../../assets/img/emptyMenuSlot.png",
      complete: false
    },
    {
      choice: 4,
      title: "Choose a recipe",
      img: "../../assets/img/emptyMenuSlot.png",
      complete: false
    },
    {
      choice: 5,
      title: "Choose a recipe",
      img: "../../assets/img/emptyMenuSlot.png",
      complete: false
    },    {
      choice: 6,
      title: "Choose a recipe",
      img: "../../assets/img/emptyMenuSlot.png",
      complete: false
    },
    {
      choice: 7,
      title: "Choose a recipe",
      img: "../../assets/img/emptyMenuSlot.png",
      complete: false
    }
  ]


  /*   const [menuChoices, setMenuChoices] = useState(menuChoicesDefault) */
  const [menuChoices, setMenuChoices] = useState()

  const updateMenuChoices = (event) => {
    event.preventDefault()

    const choiceData = (JSON.parse(localStorage.getItem("MenuMate_MenuChoices")))
    const newChoiceData = [...choiceData]
    const targetIndex = choiceData.findIndex(choice => choice.complete === false)

    if (targetIndex === -1){ 
      return
    } else {
      newChoiceData[targetIndex].img = event.target.dataset.imageurl
      newChoiceData[targetIndex].title = event.target.dataset.title
      newChoiceData[targetIndex].complete = true
      setMenuChoices(newChoiceData)
      console.log(newChoiceData)
      localStorage.setItem("MenuMate_MenuChoices", JSON.stringify(newChoiceData))
    }
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