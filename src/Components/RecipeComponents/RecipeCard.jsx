import React from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';


const RecipeCard = ( {recipe, handleOpenRecipeCard} ) => {
  <Card
  key={recipe.recipe.uri}
  sx={{
    margin: "1em",
    maxWidth: "24em",
    minWidth: "24em",
    height: "24em",
  }}
  data-recipelink={recipe.recipe.uri}
>
  <div className="recipe-selection-details-container">
    <CardMedia
      sx={{
        cursor: "pointer"
      }}
      component="img"
      alt={recipe.recipe.label}
      height="200"
      image={recipe.recipe.images.REGULAR.url}
      data-recipelink={recipe.recipe.uri}
      onClick={handleOpenRecipeCard}
    />
    <CardContent>
      <Typography
        gutterBottom
        variant="h6"
        sx={{
          textAlign: "left",
          cursor: "pointer"
        }}
        data-recipelink={recipe.recipe.uri}
        onClick={handleOpenRecipeCard}
      >
        {recipe.recipe.label}
      </Typography>
    </CardContent>
    <CardActions
      sx={{
        display: "flex",
        justifyContent: "end"
      }}

    >
      <Button
        size="small"
        data-recipelink={recipe.recipe.uri}
        onClick={handleOpenRecipeCard}
      >
        View details
      </Button>
    </CardActions>
  </div>

</Card>

}

export default RecipeCard