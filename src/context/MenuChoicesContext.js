import React, { createContext, useEffect, useState } from "react";

const MenuChoicesContext = createContext()

function MenuChoicesProvider(props) {

  const menuChoicesDefault = [
    {
      recipe_uri: null,
      title: "Choose a recipe",
      img: "../../assets/img/emptyMenuSlot.png",
      ingredients: [],
      complete: false
    },
    {
      recipe_uri: null,
      title: "Choose a recipe",
      img: "../../assets/img/emptyMenuSlot.png",
      ingredients: [],
      complete: false
    },
    {
      recipe_uri: null,
      title: "Choose a recipe",
      img: "../../assets/img/emptyMenuSlot.png",
      ingredients: [],
      complete: false
    },
    {
      recipe_uri: null,
      title: "Choose a recipe",
      img: "../../assets/img/emptyMenuSlot.png",
      ingredients: [],
      complete: false
    },
    {
      recipe_uri: null,
      title: "Choose a recipe",
      img: "../../assets/img/emptyMenuSlot.png",
      ingredients: [],
      complete: false
    },    {
      recipe_uri: null,
      title: "Choose a recipe",
      img: "../../assets/img/emptyMenuSlot.png",
      ingredients: [],
      complete: false
    },
    {
      recipe_uri: null,
      title: "Choose a recipe",
      img: "../../assets/img/emptyMenuSlot.png",
      ingredients: [],
      complete: false
    }
  ]

  const menuChoiceDefaultEntry = {
    recipe_uri: "",
    title: "Choose a recipe",
    img: "../../assets/img/emptyMenuSlot.png",
    ingredients: [],
    complete: false
  }


  /*   const [menuChoices, setMenuChoices] = useState(menuChoicesDefault) */
  const [menuChoices, setMenuChoices] = useState()

  const updateMenuChoices = (event) => {
    event.preventDefault()

    const choiceData = (JSON.parse(localStorage.getItem("MenuMate_MenuChoices")))
    const targetIndex = choiceData.findIndex(choice => choice.complete === false)

    if (targetIndex === -1){ 
      return
    } else {
      choiceData[targetIndex].recipe_uri = event.target.dataset.recipeuri
      choiceData[targetIndex].img = event.target.dataset.imageurl
      choiceData[targetIndex].title = event.target.dataset.title
      choiceData[targetIndex].ingredients = JSON.parse(event.target.dataset.ingredients)
      choiceData[targetIndex].complete = true

      setMenuChoices(choiceData)
      localStorage.setItem("MenuMate_MenuChoices", JSON.stringify(choiceData))
    }
  }

  const removeMenuChoice = (event) => {
    event.preventDefault()
    const choiceData = (JSON.parse(localStorage.getItem("MenuMate_MenuChoices")))
    const targetIndex = choiceData.findIndex(choice => choice.recipe_uri === event.target.dataset.recipeuri)

    if (targetIndex === -1) {
      return
    } else {
      choiceData.splice(targetIndex, 1)
      choiceData.push(menuChoiceDefaultEntry)

      setMenuChoices(choiceData)
      localStorage.setItem("MenuMate_MenuChoices", JSON.stringify(choiceData))

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
    <MenuChoicesContext.Provider value={{ menuChoices, setMenuChoices, updateMenuChoices, removeMenuChoice }}>
      {props.children}
    </MenuChoicesContext.Provider>

  )
}

export { MenuChoicesContext, MenuChoicesProvider }