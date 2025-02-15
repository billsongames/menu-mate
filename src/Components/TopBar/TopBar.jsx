import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { DisplayModeContext } from "../../context/DisplayModeContext";

import MenuChoices from "../MenuChoices/MenuChoices";

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import "./topbar.css"

import logo from "../../assets/logo/menumate-logo-256x64-light.png"

const TopBar = () => {

  const navigate = useNavigate()

  const { displayMode } = useContext(DisplayModeContext)

  const buttonSX = {
    color: "white",
    fontWeight: "bold",
    "@media screen and (max-width:768px": {
      size: "small"

    },
    "@media screen and (min-width:768px": {
      size: "medium"
    },

    ":hover": {
      textDecoration: "underline",
    }
  }

  const menuItemSX = {
    ":hover": {
      bgcolor: "white"
    }
  }

  const menubuttonSX = {
    color: "black",
    fontWeight: "bold",
    ":hover": {
      bgcolor: "white",
      textDecoration: "underline",
    },
  }

  const [anchorElement, setAnchorElement] = useState(null)
  const open = Boolean(anchorElement)

  const handleRecipesMenuOpenClick = (event => {
    setAnchorElement(event.currentTarget)
  })

  const handleRecipesClose = () => {
    setAnchorElement(null)
  }

  const handleRecipesNavClick = () => {
    setAnchorElement(null)
    navigate("/recipes")
  }

  const handleVegetarianNavClick = (event) => {
    setAnchorElement(null)
    navigate(`/recipes/vegetarian`)
  }

  const handleVeganNavClick = () => {
    setAnchorElement(null)
    navigate("/recipes/vegan")
  }

  const handleDairyFreeNavClick = () => {
    setAnchorElement(null)
    navigate("/recipes/dairy-free")
  }

  const handleGlutenFreeNavClick = () => {
    setAnchorElement(null)
    navigate("/recipes/gluten-free")
  }


  const handleLessThan600CaloriesNavClick = () => {
    setAnchorElement(null)
    navigate("/recipes/less-than-600-calories")
  }

  return (
    <div className="topbar-container">
      <div>
        <Button href="/" >
          <img className="topbar-logo" src={logo} />
        </Button>
      </div>
      {(displayMode == "recipes")
        ?
        <React.Fragment>
          <div>
            <Button
              sx={{
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
                ":hover": {
                  textDecoration: "underline",
                },
                "@media (max-width:1024px": {
                  color: "red"

                },
                "@media (min-width:1024px": {
                  fontSize: "28px",
                  color: "white",
                }
              }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleRecipesMenuOpenClick}
              disableRipple={true}
            >
              RECIPES
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorElement}
              open={open}
              onClose={handleRecipesClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem sx={menuItemSX} disableRipple={true} >
                <Button onClick={handleRecipesNavClick} disableRipple={true} sx={menubuttonSX}>Recipe Search</Button>
              </MenuItem>

              <MenuItem sx={menuItemSX} disableRipple={true} >
                <Button onClick={handleVegetarianNavClick} disableRipple={true} sx={menubuttonSX}>Vegetarian Recipes</Button>
              </MenuItem>

              <MenuItem sx={menuItemSX} disableRipple={true} onClick={handleVeganNavClick}>
                <Button disableRipple={true} sx={menubuttonSX}>Vegan Recipes</Button>
              </MenuItem>

              <MenuItem sx={menuItemSX} disableRipple={true} onClick={handleDairyFreeNavClick}>
                <Button disableRipple={true} sx={menubuttonSX}>Dairy Free Recipes</Button>
              </MenuItem>

              <MenuItem sx={menuItemSX} disableRipple={true} onClick={handleGlutenFreeNavClick}>
                <Button disableRipple={true} sx={menubuttonSX}>Gluten Free Recipes</Button>
              </MenuItem>

              <MenuItem sx={menuItemSX} disableRipple={true} onClick={handleLessThan600CaloriesNavClick}>
                <Button disableRipple={true} sx={menubuttonSX}>Less than 600 Calories</Button>
              </MenuItem>
            </Menu>
          </div>
          <MenuChoices />

        </React.Fragment>

        : displayMode === "ingredients"
          ?
          <></>
          : displayMode === "home"
            ?
            <></>
            : <></>
      }

    </div>
  )
}

export default TopBar