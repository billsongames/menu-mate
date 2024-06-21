import React, { useContext, useState } from "react";

import { foodCategories } from "../../data/foodCategorries";

const IngredientsShoppingList = () => {

  const [filteredList, setFilteredList] = useState([...new Set(foodCategories)])

  console.log(filteredList)

  return (
    <div className="shoppingList">
      {filteredList.map((item, index) => (
        <div key={index}>
          {item}
        </div>


      ))}
    </div>
  )
}

export default IngredientsShoppingList