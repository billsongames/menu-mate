import axios from "axios"

export const recipeSearch = (recipeSearchText) => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const recipeFilterQuery = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeSearchText}&app_id=${appID}&app_key=${appKey}`
  
  if (!recipeSearchText) {
    return Promise.resolve([])

  } else {
    return axios
      .get(recipeFilterQuery)
      .then((response) => {
        console.log(response.data.hits)
        return(response.data.hits.filter(recipe => recipe.recipe.totalTime > 0))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}


export const recipeLookUp = (recipeChoiceLink) => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const recipeChoiceQuery = `https://api.edamam.com/api/recipes/v2/${recipeChoiceLink}?type=public&app_id=${appID}&app_key=${appKey}`

  if (!recipeChoiceLink) {
    return Promise.resolve([])

  } else {
    return axios
      .get(recipeChoiceQuery)
      .then((response) => {
        console.log(response.data.recipe)
        return(response.data.recipe)
      })
      .catch((error) => {
        console.log(error)
      })

  }  
}