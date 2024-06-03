import React from "react";
import { useNavigate } from 'react-router-dom';

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { Typography } from "@mui/material";

import "./navbarRegion.css";


const NavBarRegion = () => {

  const navigate = useNavigate()

  const regionsOne = [
    "American",
    "Asian",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",
  ]

  const regionsTwo = [
    "Eastern Europe",
    "French",
    "Indian",
    "Italian",
    "Japanese",
    "Kosher"
  ]

  const regionsThree =[
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "South American",
    "South East Asian"
  ]

  const handleClick = (event) => {
    event.preventDefault()
    navigate(`/recipes/region/${event.target.dataset.region}`)
  }


  return (
    <nav className="region-button-container">
      <Typography variant="h5">Recipes by region</Typography>
      <Carousel
        autoPlay={false}
        animation="slide"
        NavButton={({ onClick, className, style, next, prev }) => {
          // Other logic

          return (
            <Button onClick={onClick} className={className} style={style}>
              {next && <ArrowForwardIosIcon sx={{color: "#8FBA74"}} />}
              {prev && <ArrowBackIosIcon sx={{color: "#8FBA74"}} />}
            </Button>
          )
        }}
      >
        <div>
          {regionsOne.map((region) => (
            <button key={region} className="region-button" data-region={region} onClick={handleClick}>{region}</button>
          ))}
        </div>
        <div>
          {regionsTwo.map((region) => (
            <button key={region} className="region-button" data-region={region} onClick={handleClick}>{region}</button>
          ))}
        </div>
      </Carousel>
    </nav>
  )
}

export default NavBarRegion