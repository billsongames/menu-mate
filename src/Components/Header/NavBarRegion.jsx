import React, { useContext, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Drawer from '@mui/material/Drawer';
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import "./navbarRegion.css";


const NavBarRegion = () => {

  const navigate = useNavigate()

  const currentRegion = useParams()

  const [drawerOpen, setDrawerOpen] = useState(false)

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

  const regionsThree = [
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "South American",
    "South East Asian"
  ]

  const allRegions = [
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
    "Kosher", "Mediterranean",
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

  const handleRegionDrawerClick = (event) => {
    event.preventDefault()
    setDrawerOpen(!drawerOpen)
    navigate(`/recipes/region/${event.target.dataset.region}`)
  }

  const toggleRegionDrawer = (event) => {
    setDrawerOpen(!drawerOpen)
  }

  const buttonSX = {
    color: "white",
    fontWeight: "bold",

    ":hover": {
      textDecoration: "underline",
    }
  }


  return (
    <React.Fragment>

      <nav className="navBarRegion-container-desktop">
        <div>
          {regionsOne.map((region) => (
            <button key={region} id={region} className="region-button" data-region={region} onClick={handleClick}>{region}</button>
          ))}
        </div>
        <div>
          {regionsTwo.map((region) => (
            <button key={region} className="region-button" data-region={region} onClick={handleClick}>{region}</button>
          ))}
        </div>
        <div>
          {regionsThree.map((region) => (
            <button key={region} className="region-button" data-region={region} onClick={handleClick}>{region}</button>
          ))}
        </div>
      </nav>

      <nav className="navBarRegion-container-mobile">
        <Button sx={buttonSX} onClick={toggleRegionDrawer}>RECIPES BY REGION</Button>
        <Drawer open={drawerOpen} anchor="left">
          <div className="regionsDrawer">
            REGIONS
            {allRegions.map((region) => (
              <button key={region} id={region} className="region-button" data-region={region} onClick={handleRegionDrawerClick}>{region}</button>
            ))}
          </div>
          <Button onClick={toggleRegionDrawer}>CLOSE</Button>



        </Drawer>

      </nav>
    </React.Fragment>
  )
}

export default NavBarRegion