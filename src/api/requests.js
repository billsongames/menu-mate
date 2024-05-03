import axios from "axios"

export const recipeSearch = (recipeSearchText) => {

  const appID = "abcaf8c1"
  const appKey = "db566e9563b42a54b321337c2df2d0c6"

  const recipeFilterQuery = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeSearchText}&app_id=${appID}&app_key=${appKey}`
  
  if (!recipeSearchText) {
    return Promise.resolve([])

  } else {
    return axios
      .get(recipeFilterQuery)
      .then((response) => {
        console.log(response.data.hits)
        return(response.data.hits)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}


export const recipeLookUp = (recipeChoiceLink) => {

  const appID = "abcaf8c1"
  const appKey = "db566e9563b42a54b321337c2df2d0c6"

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