import React from "react";

const PagenotFound = () =>{
    const divStyle = {
        color: "red",
        textAlign: "center"
    }
    return(
        <div style={divStyle}>  
           <h1>Page not Found!</h1>
           <p>Entered URL is not valid</p>
        </div>
    )
}

export default PagenotFound;