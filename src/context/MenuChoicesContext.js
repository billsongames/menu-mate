import React, { createContext, useEffect, useState } from "react";

const MenuChoicesContext = createContext()

function MenuChoicesProvider(props) {

  const menuChoicesDefault = [
    {
      recipe: {},
      complete: false
    },
    {
      recipe: {},
      complete: false
    },
    {
      recipe: {},
      complete: false
    },
    {
      recipe: {},
      complete: false
    },
    {
      recipe: {},
      complete: false
    },
    {
      recipe: {},
      complete: false
    },
    {
      recipe: {},
      complete: false
    }
  ]

  const menuChoiceDefaultEntry = {
    recipe: {},
    complete: false
  }

  const [menuChoices, setMenuChoices] = useState(menuChoicesDefault)

  const addToMenuChoices = (event) => {
    event.preventDefault()

    const choiceData = (JSON.parse(localStorage.getItem("MenuMate_MenuChoices")))
    const targetIndex = choiceData.findIndex(choice => choice.complete === false)

    if (targetIndex === -1) {
      return
    } else {
      choiceData[targetIndex].recipe = JSON.parse(event.target.dataset.completerecipe)
      choiceData[targetIndex].complete = true

      setMenuChoices(choiceData)
      localStorage.setItem("MenuMate_MenuChoices", JSON.stringify(choiceData))
    }
  }

  const removeMenuChoice = (event) => {
    event.preventDefault()
    const choiceData = (JSON.parse(localStorage.getItem("MenuMate_MenuChoices")))
    const targetIndex = choiceData.findIndex(choice => choice.recipe.uri === event.target.dataset.recipeuri)

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
    <MenuChoicesContext.Provider value={{ menuChoices, setMenuChoices, addToMenuChoices, removeMenuChoice }}>
      {props.children}
    </MenuChoicesContext.Provider>

  )
}

export { MenuChoicesContext, MenuChoicesProvider }