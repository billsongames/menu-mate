import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import "./searchBar.css"

const SearchBar = ( {onSearchSubmit} ) => {

  const navigate = useNavigate()

  const [searchText, setSearchText] = useState("")

  const handleSearchInput = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearchSubmit(searchText)
/*     navigate(`../recipes/ingredient/${searchText}`) */
  }

  return(
    <div className="searchbar">
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Search recipes..."
        value={searchText}
        onChange={handleSearchInput}>
      </input>
      <Button type="submit">Search</Button>
    </form>

  </div>
  )
}

export default SearchBar