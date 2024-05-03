import React, { useEffect, useRef, useState } from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'

import axios from "axios";

import "./recipeSelection.css"

const RecipeSelection = () => {

  const appID = "abcaf8c1"
  const appKey = "db566e9563b42a54b321337c2df2d0c6"

  const [recipeFilter, setRecipeFilter] = useState("beef")
  const [recipeList, setRecipeList] = useState([])

  const [recipeChoiceLink, setRecipeChoiceLink] = useState(null)
  const [recipeChoiceDetails, setRecipeChoiceDetails] = useState(null)

  const recipeFilterQuery = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeFilter}&app_id=${appID}&app_key=${appKey}`
  const recipeChoiceQuery = `https://api.edamam.com/api/recipes/v2/${recipeChoiceLink}?type=public&app_id=abcaf8c1&app_key=db566e9563b42a54b321337c2df2d0c6`

  const [open, setOpen] = useState(false)


  useEffect(() => {
    async function getRecipeList() {
      axios
      .get(recipeFilterQuery)
      .then((response) => {
        console.log(response)

        setRecipeList(response.data.hits)
      })
      .catch((error) => {
        console.log(error)
      })   
    }
    getRecipeList()
  }, [])  
  



  useEffect(() => {
    async function getRecipeChoice() {
      axios
        .get(recipeChoiceQuery)
        .then((response)=> {
          setRecipeChoiceDetails(response.data.recipe)
        })
        .catch ((error) => {
          console.log(error)
      })
    }

    getRecipeChoice()
  }, [recipeChoiceLink])








  const handleOpenRecipeCard = (event) => {
    event.preventDefault()
    setRecipeChoiceLink((event.target.dataset.recipelink).slice(51))
    console.log(event.target.dataset.recipelink)
    setOpen(true);
  }

  const handleCloseRecipeCard = () => setOpen(false)

  const descriptionElementRef = useRef(null)

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement != null) {
        descriptionElement.focus()
      }
    }
  }, [open])


  return (
    <section>
      <h1>
        Recipe Selection

      </h1>
      <div className="recipe-selection-container">
        {recipeList.map((recipe) => (

          <Card
            key={recipe.recipe.uri}
            sx={{ maxWidth: 300, minWidth: 300 }}
            className="recipe-selection-card"
            data-recipelink={recipe.recipe.uri}
          >
            <CardMedia
              className="recipe-selection-card-link"
              component="img"
              alt={recipe.recipe.label}
              height="200"
              image={recipe.recipe.images.REGULAR.url}
              data-recipelink={recipe.recipe.uri}
              onClick={handleOpenRecipeCard}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" className="recipe-selection-card-link" data-recipeid={recipe.id} onClick={handleOpenRecipeCard}>
                {recipe.recipe.label}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" data-recipelink={recipe.recipe.uri} onClick={handleOpenRecipeCard}>View details</Button>
            </CardActions>
          </Card>
        ))}

        {recipeChoiceDetails != null
          ?
          <Dialog
            open={open}
            onClose={handleCloseRecipeCard}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >

            <DialogTitle id="scroll-dialog-title">{recipeChoiceDetails.label}</DialogTitle>
            <DialogContent>
              <img src={recipeChoiceDetails.images.REGULAR.url} width="100%" />
              <DialogContentText>
                hello
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseRecipeCard}>CLOSE</Button>
            </DialogActions>

          </Dialog>


          : <></>
        }
      </div>

    </section>
  )
}



export default RecipeSelection