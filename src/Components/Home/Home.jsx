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
      <ImageList sx={{ width: 1280, height: 720 }} cols={2} rowHeight={360}>
        {imageData.map((image) => (
          <ImageListItem key={image.img}>
            <img
              srcSet={`${image.img}?w=640&h=360&fit=crop&auto=format&dpr=2 2x`}
              src={`${image.img}?w=640&h=360&fit=crop&auto=format`}
              alt={image.alt}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default Home