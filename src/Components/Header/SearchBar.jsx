import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';

import SearchIcon from '@mui/icons-material/Search';

import "./searchBar.css";

const SearchBar = ({ onSearchSubmit }) => {

  const navigate = useNavigate()

  const [searchText, setSearchText] = useState("")

  const handleSearchInput = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    /*     onSearchSubmit(searchText) */
    navigate(`../recipes/ingredient/${searchText}`)
  }

  return (
    <div className="searchbar">
      <Box
        component="form"
        onSubmit={handleSubmit}
        width="300px"
      >
        <TextField
          height="32px"
          variant="outlined"
          placeholder="Search recipe ingredients..."
          onInput={event => setSearchText(event.target.value)}
          autoComplete="off"
        />
        <Button onClick={handleSubmit}>
          <SearchIcon />
        </Button>
      </Box>











    </div>
  )
}

export default SearchBar