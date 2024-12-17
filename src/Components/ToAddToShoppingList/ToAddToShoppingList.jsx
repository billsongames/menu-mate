import React from "react";

const ToAddToShoppingList = ({ toAddtoList }) => {
  return (
    <section>
      <h3>
        To Add To Shopping List
      </h3>
      <div>
        {toAddtoList}
      </div>

    </section>
  )
}

export default ToAddToShoppingList