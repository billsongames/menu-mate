import { React, useEffect, useState } from "react";

import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import "./progressDisplay.css"

const ProgressDisplay = (error) => {

  const [resultError, setResultError] = useState(false)
  const progressSx = {
    color: "#8FBA74"

  }

  const errorSx = {
    color: "#8FBA74",
    width: 80,
    height: 80
  }


  useEffect(() => {
    const timer = setTimeout(() => setResultError(true), 10000)
  }, [])






  return (
    <div className="progressDisplayContainer">
      {resultError === false
        ?
        <CircularProgress sx={progressSx} size={80} />
        :
        <>
          <div>
            <ErrorOutlineIcon sx={errorSx} />
          </div>
          <div>
            Error retrieving results. Please try later
          </div>
        </>
      }
    </div>

  )




}

export default ProgressDisplay