import React from "react";

const LoaderButton = ( {onLoaderClick} ) => {


  return (
    <React.Fragment>
      <button onClick={onLoaderClick}>Loader</button>
    </React.Fragment>
  )
}

export default LoaderButton