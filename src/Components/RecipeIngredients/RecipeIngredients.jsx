import React from "react";

const RecipeIngredients = ( {recipe} ) => {

  return(
    <section>
      Recipe Ingredients

      <form id="ingredientSelector">
        {recipe.strIngredient1 !== null && recipe.strIngredient1.length > 0
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
        {recipe.strIngredient2 !== null && recipe.strIngredient2.length > 0
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
        {recipe.strIngredient3 !== null && recipe.strIngredient3.length > 0 
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
        {recipe.strIngredient4 !== null && recipe.strIngredient4.length > 0
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
        {recipe.strIngredient5 !== null && recipe.strIngredient5.length > 0
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
        {recipe.strIngredient6 !== null && recipe.strIngredient6.length > 0
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
        {recipe.strIngredient7 !== null && recipe.strIngredient7.length > 0
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
        {recipe.strIngredient8 !== null && recipe.strIngredient8.length > 0
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
        {recipe.strIngredient9 !== null && recipe.strIngredient9.length > 0
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
        {recipe.strIngredient10 !== null && recipe.strIngredient10.length > 0
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
        {recipe.strIngredient11 !== null && recipe.strIngredient11.length > 0
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
        {recipe.strIngredient12 !== null && recipe.strIngredient12.length > 0
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
        {recipe.strIngredient13 !== null && recipe.strIngredient13.length > 0
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
        {recipe.strIngredient14 !== null && recipe.strIngredient14.length > 0
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
        {recipe.strIngredient15 !== null && recipe.strIngredient15.length > 0
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
        {recipe.strIngredient16 !== null && recipe.strIngredient16.length > 0
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
        {recipe.strIngredient17 !== null && recipe.strIngredient17.length > 0
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
        {recipe.strIngredient18 !== null && recipe.strIngredient18.length > 0
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
        {recipe.strIngredient19 !== null && recipe.strIngredient19.length > 0
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
        {recipe.strIngredient20 !== null && recipe.strIngredient20.length > 0
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
    </section>
  )
}

export default RecipeIngredients