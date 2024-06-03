import React from "react";

import CircularProgress from '@mui/material/CircularProgress';

const ProgressDisplay = () => {
  const sx = {
    color: "#8FBA74"
  }
  return (
    <CircularProgress sx={sx} />
  )
}

export default ProgressDisplay