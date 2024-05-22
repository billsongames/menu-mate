import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import "./searchBar.css"

const SearchBar = ({ onSearchSubmit }) => {

  const [searchText, setSearchText] = useState("")

  const handleSearchInput = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearchSubmit(searchText)
    /*     navigate("../recipes/recipes-by-ingredient") */
  }

  return (
    <div className="searchbar">
      <form>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchText}
          onChange={handleSearchInput}>
        </input>
        <Link to={`../recipes/ingredient/${searchText}`}>
          <Button type="submit">Search</Button>
        </Link>  
      </form>

    </div>
  )
}

export default SearchBar