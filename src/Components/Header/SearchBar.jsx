import React, { useEffect, useRef, useState } from "react";

import Button from '@mui/material/Button';

const SearchBar = ( {onSearchSubmit} ) => {

  const [searchText, setSearchText] = useState("")

  const handleSearchInput = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearchSubmit(searchText)
  }

  return(
    <div>
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Search recipes..."
        value={searchText}
        onChange={handleSearchInput}>
      </input>
      <Button type="submit">Search</Button>
    </form>
{/*     <Button onClick={onQuickPrepSearchSubmit}>Ready in 30 minutes or less</Button> */}
  </div>
  )
}

export default SearchBar