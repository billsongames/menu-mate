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

  const handleRecipesClick = (event => {
    setAnchorElement(event.currentTarget)
  })

  const handleRecipesClose = () => {
    setAnchorElement(null)
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
              onClick={handleRecipesClick}
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
              <MenuItem sx={menuItemSX} disableRipple={true} onClick={handleRecipesClose}>
                <Button href="/recipes" disableRipple={true} sx={menubuttonSX}>Recipe Search</Button>
              </MenuItem>

              <MenuItem sx={menuItemSX} disableRipple={true} onClick={handleRecipesClose}>
                <Button href="/recipes/vegetarian" disableRipple={true} sx={menubuttonSX}>Vegetarian Recipes</Button>
              </MenuItem>

              <MenuItem sx={menuItemSX} disableRipple={true} onClick={handleRecipesClose}>
                <Button href="/recipes/less-than-600-calories" disableRipple={true} sx={menubuttonSX}>Less than 600 Calories</Button>
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