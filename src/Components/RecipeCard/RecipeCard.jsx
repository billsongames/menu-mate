import React, { useEffect, useState } from "react";
import range from 'lodash/range'

import ToAddToShoppingList from "../ToAddToShoppingList/ToAddToShoppingList";

import { test_recipe } from "../../data/recipes"

import "./recipeCard.css"

const RecipeCard = ( {recipe} ) => {

/*   const recipe = test_recipe.meals[0] */

  const [toAddtoList, setToAddtoList] = useState([])

  const handleIngredientToggle = () => {
    const form = document.getElementById("ingredientSelector")
    const inputs = form.getElementsByTagName("input")
    let ingredientsArray =[]
    

    for (var i=0, max=inputs.length; i < max; i += 1) {
      if (inputs[i].type === "checkbox" && inputs[i].checked) {
        ingredientsArray.push(inputs[i].value)
      }
    setToAddtoList(ingredientsArray)  
    }
  }

  return (
    <section>
      <h2>
        {recipe.strMeal}
      </h2>
      <img className="recipe-card-image" src={recipe.strMealThumb} />
      <form id="ingredientSelector">
        {recipe.strIngredient1 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure1}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient1}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient1}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient2 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure2}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient2}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient2}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient3 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure3}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient3}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient3}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient4 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure4}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient4}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient4}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient5 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure5}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient5}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient5}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient6 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure6}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient6}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient6}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient7 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure7}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient7}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient7}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient8 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure8}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient8}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient8}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient9 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure9}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient9}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient9}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient10 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure10}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient10}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient10}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient11 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure11}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient11}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient11}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient12 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure12}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient12}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient12}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient13 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure13}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient13}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient13}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient14 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure14}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient14}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient14}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient15 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure15}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient15}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient15}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient16 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure16}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient16}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient16}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient17 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure17}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient17}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient17}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient18 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure18}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient18}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient18}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient19 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure19}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient19}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient19}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }
        {recipe.strIngredient20 !== null
        ?
        <ul>
          <li className="recipe-card-ingredients-list-entry">
            <div className="recipe-card-ingredients-list-entry-measure">
              {recipe.strMeasure20}
            </div>
            <div className="recipe-card-ingredients-list-entry-ingredient">
              {recipe.strIngredient20}
            </div>
            <input type="checkbox"
              value={recipe.strIngredient20}
              onClick={handleIngredientToggle}
            />
          </li>
        </ul>
        : <></>
        }

    
      </form>

      <ToAddToShoppingList toAddtoList={toAddtoList} />

    </section>

  )
}

export default RecipeCard