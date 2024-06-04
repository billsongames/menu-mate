import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';

import SearchIcon from '@mui/icons-material/Search';

import "./searchBar.css";



const SearchBar = ()  => {

  const navigate = useNavigate()

  const [searchText, setSearchText] = useState("")

  const handleSearchInput = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if (searchText) {
      navigate(`/recipes/ingredient/${searchText}`)
    }

  }

  const handleMouseEnter = () => {
    const element = document.getElementById("searchbar-wrapper")
    element.style.borderColor = "#8FBA74"
  }

  const handleMouseLeave = () => {
    const element = document.getElementById("searchbar-wrapper")
    element.style.borderColor = "black"
  }

  return (
    <div className="searchbar-container">


      <div className="searchbar-title">
        Search for inspiration...
      </div>
      <form
        id="searchbar-wrapper"
        onSubmit={handleSubmit}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
      >
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchText}
          onChange={handleSearchInput}
        />
        <SearchIcon className="searchbar-icon" onClick={handleSubmit} />
      </form>
    </div>



  )
}

export default SearchBar