import React, { useState } from "react";

import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

import "./topbar.css"

import logo from "../../assets/logo/menumate-logo-256x64-dark.png"

const TopBar = () => {

  const buttonSX = {
    color: "black",
    ":hover": {
      bgcolor: "#8FBA74"
    }
  }

  const menuItemSX = {
    ":hover": {
      bgcolor: "#8FBA74"
    }
  }

  const [anchorElement, setAnchorElement] = useState(null)
  const open = Boolean(anchorElement)

  const handleClick = (event => {
    setAnchorElement(event.currentTarget)
  })

  const handleClose = () => {
    setAnchorElement(null)
  }

  return (
    <div className="topbar-container">
      <div>
        <Button href = "/" sx={buttonSX}>
          <img className="topbar-logo" src={logo} />
        </Button>
      </div>
      <div>
        <Stack
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >

{/*           <Button href="../">HOME</Button> */}
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={buttonSX}
          >
            RECIPES
          </Button>
        </Stack>
        <Menu
          id="basic-menu"
          anchorEl={anchorElement}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem sx={menuItemSX} onClick={handleClose}>
            <Button href="/recipes" sx={buttonSX}>Recipe Search</Button>
          </MenuItem>

          <MenuItem sx={menuItemSX} onClick={handleClose}>
            <Button href="/recipes/vegetarian" sx={buttonSX}>Vegetarian Recipes</Button>
          </MenuItem>

          <MenuItem sx={menuItemSX} onClick={handleClose}>
            <Button href="/recipes/less-than-600-calories" sx={buttonSX}>Less than 600 Calories</Button>
          </MenuItem>
        </Menu>
      </div>
    </div>



















    /*       <Link to = {"/"}>
            Home
          </Link>
          <Link to = {"recipes"}>
            Recipes
          </Link>   */

  )
}

export default TopBar