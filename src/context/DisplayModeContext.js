import React, { createContext, useEffect, useState } from "react";

const DisplayModeContext = createContext()

function DisplayModeProvider(props) {

  const [displayMode, setDisplayMode] = useState("home")

  const toggleDisplayMode = (value) => {
    setDisplayMode(`${value}`)
  }

  return (
    <DisplayModeContext.Provider value={{ displayMode, toggleDisplayMode }}>
      {props.children}
    </DisplayModeContext.Provider>

  )
}

export { DisplayModeContext, DisplayModeProvider }