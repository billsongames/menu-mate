import React, { useState } from "react";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const TopBar = () => {

  const [anchorElement, setAnchorElement] = useState(null)
  const open = Boolean(anchorElement)

  const handleClick = (event => {
    setAnchorElement(event.currentTarget)
  })

  const handleClose = () => {
    setAnchorElement(null)
  }

  return (
    <div>
    <Stack
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >

      <Button href="../">HOME</Button>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
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
          onMouseLeave: handleClose, 'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Button href="recipes">Recipe Search</Button>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Button href="recipes">Vegetarian Recipes</Button>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Button href="recipes">Less than 600 Calories</Button>
        </MenuItem>        
      </Menu>
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