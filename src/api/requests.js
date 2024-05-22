import axios from "axios"

export const recipeByIngredientSearch = (recipeSearchText) => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const recipeFilterQuery = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeSearchText}&time=1%2B&app_id=${appID}&app_key=${appKey}`
  
  if (!recipeSearchText) {
    return Promise.resolve([])

  } else {
    return axios
      .get(recipeFilterQuery)
      .then((response) => {
        console.log(response.data.hits)
        return(response.data.hits)
/*         return(response.data.hits.filter(recipe => recipe.recipe.totalTime > 0)) */
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const recipesByRegionSearch = (regionQuery) => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const searchURL = `https://api.edamam.com/api/recipes/v2?type=public&time=1%2B&dishType=Main%20course&app_id=${appID}&app_key=${appKey}&cuisineType=${regionQuery}`
  
  if (!regionQuery) {
    return Promise.resolve([])

  } else {
    return axios
      .get(searchURL)
      .then((response) => {
        console.log(response.data.hits)
        return(response.data.hits)
/*         return(response.data.hits.filter(recipe => recipe.recipe.totalTime > 0)) */
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



export const quickPrepSearch = (time) => {

  const appID = process.env.REACT_APP_APPID
  const appKey = process.env.REACT_APP_APPKEY

  const quickPrepQuery = `https://api.edamam.com/api/recipes/v2/?type=public&time=1-${time}&app_id=${appID}&app_key=${appKey}`

  if (!time) {
    return Promise.resolve([])
  
  } else {
    return axios
      .get(quickPrepQuery)
      .then((response) => {
        return(response.data.hits)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}


