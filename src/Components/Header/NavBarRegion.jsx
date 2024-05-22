import React from "react";
import { Link } from 'react-router-dom';

import { Typography } from "@mui/material";

import "./navbarRegion.css"


const NavBarRegion = ( {onRegionSubmit} ) => {

/*   const navigate = useNavigate() */

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
/*     navigate("../recipes/recipes-by-region") */
  }  


  return(
    <nav className="region-button-container">
      <Typography variant="h5">Recipes by region</Typography>
      {regions.map((region) => (
        <Link to={`../recipes/region/${region}`} key={region} >
          <button className="region-button" data-region={region}>{region}</button>
        </Link>
          
      ))}
    </nav>
  )
}

export default NavBarRegion