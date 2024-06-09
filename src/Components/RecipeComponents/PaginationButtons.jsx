import React from "react";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { ThemeProvider, createTheme, makeStyles } from "@mui/material";

const PaginationButtons = ({ count, page, onPageChange }) => {

  const sx_paginationStack = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em"
  }

  const theme = createTheme({
    button: {
      primary: "#8FBA74",
      secondary: "#8FBA74"
    }

  })











  return (

    <Stack sx={sx_paginationStack} spacing={2}>
      <Pagination
        count={count}
        size="large"
        page={page}
        showFirstButton
        showLastButton
        onChange={onPageChange}
      />
    </Stack >

  )
}

export default PaginationButtons