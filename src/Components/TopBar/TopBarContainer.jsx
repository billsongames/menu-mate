import React, { useContext } from "react";

import { DisplayModeContext } from "../../context/DisplayModeContext";


import TopBar from "./TopBar";
import TopBarIngredients from "./TopBarIngredients";

const TopBarContainer = () => {

  const { displayMode } = useContext(DisplayModeContext)
  return (
    <React.Fragment>
      {displayMode === "recipes"
        ? <TopBar />
        : <TopBarIngredients />
      }


    </React.Fragment>

  )
}

export default TopBarContainer