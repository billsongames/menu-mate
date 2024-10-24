import React, { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { DisplayModeContext } from "../../context/DisplayModeContext";

import { Button } from "@mui/material";

import "./home.css"



import { foodCategories } from "../../data/foodCategories"


const Home = () => {

  useEffect(() => {
    toggleDisplayMode("home")
  }, [])

  const navigate = useNavigate()

  const { displayMode, toggleDisplayMode } = useContext(DisplayModeContext)

  const handleBeginButtonClick = () => {
    toggleDisplayMode("recipes")
    navigate("/recipes")
  }

  const imageData = [
    {
      img: "/assets/img/ingredients/mushrooms-1351561_1280.jpg",
      alt: "mushrooms"
    },
    {
      img: "/assets/img/ingredients/kitchen-7471627_1280.jpg",
      alt: "kitchen"
    },
    {
      img: "/assets/img/ingredients/avocado-1838785_1280.jpg",
      alt: "avocado"
    },
    {
      img: "/assets/img/ingredients/kitchen-7471627_1280.jpg",
      alt: "kitchen"
    }
  ]
  return (
    <div className="home-container">
      <div>
        <img src={imageData[1].img} className="home-image" />
        <div id="home-text">
          <div>Add the recipes</div>
          <div>Create the menu</div>
          <div>Hassle free shopping</div>
          <button className="beginButton" onClick={() => handleBeginButtonClick()}>TO THE RECIPES...</button>
        </div>
      </div>
    </div>
  )
}

export default Home