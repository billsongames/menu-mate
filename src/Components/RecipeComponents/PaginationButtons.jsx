import React from "react";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { ThemeProvider, createTheme, makeStyles } from "@mui/material";

import edamam_badge from "../../assets/logo/Edamam_Badge_Transparent.png"

const PaginationButtons = ({ count, page, onPageChange }) => {

  const sx_paginationStack = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em 0"
  }

  const theme = createTheme({
    button: {
      primary: "#8FBA74",
      secondary: "#8FBA74"
    }

  })



  return (
    <div>

      <Stack sx={sx_paginationStack} spacing={2}>
        <Pagination
          count={count}
          size="small"
          page={page}
          showFirstButton
          showLastButton
          onChange={onPageChange}
        />
      </Stack >
      <div>
        <a href="https://www.edamam.com/" target="_blank">
          <img src={edamam_badge} width="200px" />
        </a>
      </div>


    </div>
  )
}

export default PaginationButtons