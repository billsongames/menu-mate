import React from "react";
import { useNavigate } from 'react-router-dom';

import { Typography } from "@mui/material";

import "./navbarRegion.css"


const NavBarRegion = ( {onRegionSubmit} ) => {

  const navigate = useNavigate()

  const regions=[
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

  const handleSubmit = (event) => {
    event.preventDefault()
    onRegionSubmit(event.target.dataset.region)
/*     navigate(`${(event.target.dataset.region).replace(/ /gi, "-").toLowerCase()}`) */
  }  


  return(
    <nav className="region-button-container">
      <Typography variant="h5">Recipes by region</Typography>
      {regions.map((region) => (
        <button key={region} className="region-button" data-region={region} onClick={handleSubmit}>{region}</button>
      ))}
    </nav>
  )
}

export default NavBarRegion