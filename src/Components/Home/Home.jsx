import React from "react";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import "./home.css"

import foodPic from "../../assets/img/ingredients/mushrooms-8058299_1280.jpg"


const Home = () => {

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
          <div>Finish the menu</div>
          <div>Remove the stress</div>
        </div>
      </div>

    </div>
  )
}

export default Home