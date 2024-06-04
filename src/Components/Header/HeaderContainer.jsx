import React, { useEffect, useRef, useState } from "react";

import SearchBar from "./SearchBar";
import NavBarRegion from "./NavBarRegion";

import "./headerContainer.css"

import searchbarImage from "../../assets/img/ingredients/avocado-1838785_1280.jpg"

const HeaderContainer = () => {
  return (
    <section>
      <div className="header-container">
        <img className="header-image" src={searchbarImage} />
        <div className="header-content">
          <SearchBar />
          <NavBarRegion />
        </div>
      </div>
    </section>


  )
}

export default HeaderContainer