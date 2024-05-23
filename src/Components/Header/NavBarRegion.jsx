import React from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';

import { Typography } from "@mui/material";

import "./navbarRegion.css"


const NavBarRegion = () => {

  const navigate = useNavigate()

  const regions = [
    "American",
    "Asian",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",
    "Eastern Europe",
    "French",
    "Indian",
    "Italian",
    "Japanese",
    "Kosher",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "South American",
    "South East Asian"
  ]

  const handleClick = (event) => {
    event.preventDefault()
    navigate(`../recipes/region/${event.target.dataset.region}`)
  }


  return (
    <nav className="region-button-container">
      <Typography variant="h5">Recipes by region</Typography>
      {regions.map((region) => (
        <button key={region} className="region-button" data-region={region} onClick={handleClick}>{region}</button>
      ))}
    </nav>
  )
}

export default NavBarRegion